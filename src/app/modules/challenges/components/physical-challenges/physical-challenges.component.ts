import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Challenge } from '../../models/challenge.interface';

@Component({
    selector: 'df-physical-challenges',
    templateUrl: 'physical-challenges.component.html',
    styleUrls: ['./physical-challenges.component.scss'],
})
export class PhysicalChallengesComponent {
    @Input() challenges: Challenge[];
    @Output() readonly scanEmitter: EventEmitter<Challenge> = new EventEmitter();

    constructor() {}

    scanChallenge(challenge: Challenge) {
        this.scanEmitter.emit(challenge);
    }
}
