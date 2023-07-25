import { Injectable } from '@angular/core';
import { Challenge } from './models/challenge.interface';

@Injectable({ providedIn: 'root' })
export class ChallengesService {
    constructor() {}

    getChallenges() {}

    validateChallengeCode(challenge: Challenge, validatorCode: string): boolean {
        if (challenge.validatorCode === validatorCode) {
            return true;
        }
        return false;
    }
}
