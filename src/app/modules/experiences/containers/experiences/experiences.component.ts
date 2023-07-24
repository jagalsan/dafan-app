import { Component, OnInit } from '@angular/core';
import { ClubExperience } from '../../models/experience.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { User } from 'src/app/modules/auth/models/user.interface';
import { NavController } from '@ionic/angular';
import { ExperiencesService } from '../../experiences.service';
import { ExperiencesType } from '../../enums/experiences-type.enum';

@Component({
    selector: 'df-experiences',
    templateUrl: 'experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
    experiencesTypeEnum = ExperiencesType;
    clubExperiences!: ClubExperience[];
    userData!: User;

    constructor(
        private experiencesService: ExperiencesService,
        private authService: AuthService,
        private navCtrl: NavController,
    ) {}

    ngOnInit(): void {
        this.getClubExperiences();
        this.getUserData();
    }

    getClubExperiences(): void {
        this.clubExperiences = this.experiencesService.getClubExperiences();
    }

    getUserData(): void {
        this.userData = this.authService.getUserData();
    }

    navigateExperience(collectibleHashId: string): void {
        this.navCtrl.navigateForward(`/experiences/${collectibleHashId}`);
    }
}
