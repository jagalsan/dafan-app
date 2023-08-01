import { Injectable } from '@angular/core';
import { Challenge } from './models/challenge.interface';
import { Observable } from 'rxjs';
import { digitalChallengesList } from './mocks/challenges.response';

@Injectable({ providedIn: 'root' })
export class ChallengesService {
    constructor() {}

    getChallenges() {}

    getChallenge(challengeId: number): Observable<Challenge> {
        return new Observable(observer => {
            const challenge: Challenge = digitalChallengesList.find(challenge => challenge.id === Number(challengeId));
            observer.next(challenge);
        });
    }

    validateChallengeCode(challenge: Challenge, validatorCode: string): boolean {
        if (challenge.validatorCode === validatorCode) {
            return true;
        }
        return false;
    }

    completeChallenge(challenge: Challenge): Observable<void> {
        return new Observable(observer => {
            const challenge: Challenge = digitalChallengesList.find(
                challenge => challenge.id === challenge.id,
            ) as Challenge;
            challenge.completed = true;
            observer.next();
        });
    }
}
