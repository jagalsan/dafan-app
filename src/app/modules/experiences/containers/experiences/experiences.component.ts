import { Component, OnInit } from '@angular/core';
import { ClubExperience } from '../../models/experience.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { User } from 'src/app/modules/auth/models/user.interface';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { ExperiencesService } from '../../experiences.service';
import { ExperiencesType } from '../../enums/experiences-type.enum';
import { SuggestModalComponent } from 'src/app/shared/components/suggest-modal/suggest-modal.component';

@Component({
    selector: 'df-experiences',
    templateUrl: 'experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
    showSuggestBox: boolean;
    experiencesTypeEnum = ExperiencesType;
    clubExperiences!: ClubExperience[];
    userData!: User;

    constructor(
        private experiencesService: ExperiencesService,
        private authService: AuthService,
        private navCtrl: NavController,
        private modalCtrl: ModalController,
        private toastController: ToastController,
    ) {}

    ngOnInit(): void {
        this.getClubExperiences();
        this.getUserData();
    }

    checkScroll(event: any) {
        if (event.detail.scrollTop > 400) {
            this.showSuggestBox = true;
        } else {
            this.showSuggestBox = false;
        }
    }

    async openSuggestModal(): Promise<void> {
        const modal = await this.modalCtrl.create({
            component: SuggestModalComponent,
            breakpoints: [0, 0.5, 0.7],
            initialBreakpoint: 0.5,
        });
        await modal.present();

        modal.onDidDismiss().then(e => {
            if (e.data?.action === 'sendSuggest') {
                this.sendSuggest(e.data.formData);
            }
        });
    }

    async sendSuggest(suggest: any): Promise<void> {
        const toast = await this.toastController.create({
            color: 'success',
            message: 'Suggest was sent correctly',
            position: 'top',
            duration: 1500,
            icon: 'checkmark-circle-outline',
            cssClass: 'df-toast',
        });
        toast.present();
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
