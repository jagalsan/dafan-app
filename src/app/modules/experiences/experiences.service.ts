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
            const clubExperience = ClubExperiencesResponse.find(clubExperience =>
                clubExperience.experiences.find(experience => experience.id === experienceId),
            )?.experiences.find(experience => experience.id === experienceId);

            observer.next(clubExperience);
        });
    }
}
