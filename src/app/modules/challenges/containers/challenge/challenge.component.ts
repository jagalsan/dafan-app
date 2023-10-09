import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Challenge } from '../../models/challenge.interface';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/modules/auth/models/user.interface';
import { ChallengesService } from '../../challenges.service';
import { LeaderBoardUser } from '../../models/leader-board.interface';
import { leaderBoardResponse } from '../../mocks/leader-board.response';

@Component({
    selector: 'df-challenge',
    templateUrl: 'challenge.component.html',
    styleUrls: ['./challenge.component.scss'],
})
export class ChallengeComponent implements OnInit {
    challenge: Challenge;
    userData: User;
    challengeType: 'bet' | 'quiz' | 'scorersPredictions';
    leaderBoard: { id: number; leaderBoardUsers: LeaderBoardUser[] };
    leaderBoardResponse = leaderBoardResponse;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private challengeService: ChallengesService,
    ) {}

    ngOnInit(): void {
        this.challenge = this.route.snapshot.data['challenge'];
        this.challengeType = this.challenge.subType.name;
        this.leaderBoard = {
            id: leaderBoardResponse.id,
            leaderBoardUsers: leaderBoardResponse.leaderBoardUsers.slice(0, 4),
        };

        this.getUserData();
    }

    getUserData(): void {
        this.userData = this.authService.getUserData();
    }

    completeChallenge(challenge: Challenge) {
        this.challengeService.completeChallenge(challenge).subscribe(() => {
            const fanPointsResult = this.userData.fanPoints + challenge.rewardPoints;
            this.authService.updateUserData({ ...this.userData, fanPoints: fanPointsResult });
        });
    }
}
