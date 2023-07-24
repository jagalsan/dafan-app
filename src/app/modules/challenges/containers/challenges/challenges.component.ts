import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { User } from 'src/app/modules/auth/models/user.interface';
import { NavController } from '@ionic/angular';
import { onFieldChallengesResponse } from '../../mocks/challenges.response';
import { Challenge } from '../../models/challenge.interface';

@Component({
    selector: 'df-challenges',
    templateUrl: 'challenges.component.html',
    styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
    onFieldChallenges: Challenge[] = onFieldChallengesResponse;
    digitalChallenges: any[] = [];
    userData!: User;
    challengesTabSelected: 'digital' | 'onField' = 'digital';

    constructor(
        private authService: AuthService,
        private navCtrl: NavController,
    ) {}

    ngOnInit(): void {
        this.getUserData();
        this.getChallenges();
    }

    getChallenges(): void {}

    getUserData(): void {
        this.userData = this.authService.getUserData();
    }

    navigateCollectible(collectibleHashId: string): void {
        this.navCtrl.navigateForward(`/collectibles/${collectibleHashId}`);
    }
}
