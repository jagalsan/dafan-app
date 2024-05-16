import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubExperience, Experience } from './models/experience.interface';
import { ClubExperiencesResponse } from './mocks/experiences.response';

@Injectable({ providedIn: 'root' })
export class ExperiencesService {
    constructor() {}

    getClubExperiences(): ClubExperience[] {
        return ClubExperiencesResponse;
    }

    getExperience(experienceId: number): Observable<Experience> {
        return new Observable(observer => {
            let experience;

            ClubExperiencesResponse.forEach(clubExperience => {
                if (!experience) {
                    experience = clubExperience.experiences.find(experience => experience.id === Number(experienceId));
                }
            });

            observer.next(experience);
        });
    }
}
