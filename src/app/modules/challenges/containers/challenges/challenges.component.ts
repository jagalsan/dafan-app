import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { User } from 'src/app/modules/auth/models/user.interface';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { digitalChallengesList, onFieldChallengesResponse } from '../../mocks/challenges.response';
import { Challenge } from '../../models/challenge.interface';
import { CodeScanningModalComponent } from 'src/app/shared/components/code-scanning-modal/code-scanning-modal.component';
import { ChallengeComponent } from '../challenge/challenge.component';
import { fantasyLeagueResponse } from '../../mocks/fantasy-league.response';
import { leaderBoardResponse } from '../../mocks/leader-board.response';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'df-challenges',
    templateUrl: 'challenges.component.html',
    styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
    onFieldChallenges: Challenge[] = onFieldChallengesResponse;
    digitalChallenges: any[] = [];
    userData!: User;
    challengesTabSelected: 'digital' | 'onField' | 'leaderBoard' = 'digital';
    component = ChallengeComponent;
    fantasyLeague = fantasyLeagueResponse;
    leaderBoard = leaderBoardResponse;

    constructor(
        private authService: AuthService,
        private navCtrl: NavController,
        private modalController: ModalController,
        private toastController: ToastController,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.getUserData();
        this.getChallenges();
    }

    ionViewWillEnter() {
        this.challengesTabSelected = this.route.snapshot.queryParams['tab'] || 'digital';
    }

    getChallenges(): void {}

    getUserData(): void {
        this.userData = this.authService.getUserData();
    }

    navigateCollectible(collectibleHashId: string): void {
        this.navCtrl.navigateForward(`/collectibles/${collectibleHashId}`);
    }

    async scanPhysicalChallenges(challenge: Challenge): Promise<void> {
        const modal = await this.modalController.create({
            component: CodeScanningModalComponent,
            breakpoints: [0.5, 0.7],
            initialBreakpoint: 0.5,
            componentProps: {
                challenge: challenge,
            },
        });

        await modal.present();

        modal.onDidDismiss().then(e => {
            if (e.data?.action === 'successCodeScanned') {
                const newFanPoints = this.userData.fanPoints + challenge.rewardPoints;
                this.authService.updateUserData({ ...this.userData, fanPoints: newFanPoints });

                const toast = this.toastController.create({
                    color: 'success',
                    message: 'Points accumulated correctly',
                    position: 'top',
                    duration: 1500,
                    icon: 'checkmark-circle-outline',
                    cssClass: 'df-toast',
                });
                toast.then(e => e.present());
            }
        });
    }

    navigateChallenge(challengeId: number): void {
        const challenge = digitalChallengesList.find(challenge => challenge.id === challengeId);
        this.navCtrl.navigateForward('challenges/' + challengeId, {
            queryParams: {
                childTitle: challenge.label,
            },
        });
    }

    navigateToFantasyLeague(): void {
        this.navCtrl.navigateForward('challenges/fantasy-league', {
            queryParams: {
                childTitle: 'Fantasy league',
            },
        });
    }

    setTab(tab: 'digital' | 'onField' | 'leaderBoard'): void {
        this.challengesTabSelected = tab;
        this.navCtrl.navigateRoot(`/challenges?tab=${tab}`);
    }
}
