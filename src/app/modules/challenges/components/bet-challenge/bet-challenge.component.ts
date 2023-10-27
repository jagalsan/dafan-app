import { Component, Input } from '@angular/core';
import { Challenge } from '../../models/challenge.interface';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'df-bet-challenge',
    templateUrl: 'bet-challenge.component.html',
    styleUrls: ['bet-challenge.component.scss'],
})
export class BetChallengeComponent {
    @Input() challenge: Challenge;

    firstTeamScorer: number = 1;
    secondTeamScorer: number = 3;
    betCompleted = false;
    playerSelected = true;

    constructor(private toastController: ToastController) {}

    incrementScorer(team: 'first' | 'second'): void {
        if (team === 'first') this.firstTeamScorer++;
        else this.secondTeamScorer++;
    }

    reduceScorer(team: 'first' | 'second'): void {
        if (team === 'first' && this.firstTeamScorer > 0) this.firstTeamScorer--;
        else if (team === 'second' && this.secondTeamScorer > 0) this.secondTeamScorer--;
    }

    makeBet(): void {
        const toast = this.toastController.create({
            color: 'success',
            message: 'Successful prediction',
            position: 'top',
            duration: 1500,
            icon: 'checkmark-circle-outline',
            cssClass: 'df-toast',
        });
        toast.then(e => e.present());
        this.betCompleted = true;
    }

    selectPlayer(playerSelected: any): void {
        if (!this.betCompleted) {
            const lastPlayerSelected = this.challenge.subType.players.find(player => player.selected);
            if (lastPlayerSelected) {
                this.challenge.subType.players.find(player => player.selected).selected = false;
            }
            this.challenge.subType.players.find(player => player.id === playerSelected.id).selected = true;
            this.playerSelected = true;
        }
    }
}
