import { Component, Input } from '@angular/core';
import { Challenge } from '../../models/challenge.interface';

@Component({
    selector: 'df-bet-challenge',
    templateUrl: 'bet-challenge.component.html',
    styleUrls: ['bet-challenge.component.scss'],
})
export class BetChallengeComponent {
    @Input() challenge: Challenge;

    constructor() {}
}
