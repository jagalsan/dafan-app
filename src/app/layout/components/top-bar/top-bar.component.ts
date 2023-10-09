import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { filter } from 'rxjs';
import { TokenPackage } from 'src/app/core/models/tokens/token-package.interface';
import { TokensService } from 'src/app/core/services/tokens.service';
import { User } from 'src/app/modules/auth/models/user.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FanTokensModalComponent } from 'src/app/shared/components/fan-tokens-modal/fan-tokens-modal.component';

@Component({
    selector: 'df-top-bar',
    templateUrl: 'top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
    @ViewChild('popover') popover;

    isPopoverOpen = false;
    userData!: User;
    isChildView!: boolean;
    childTitle!: string;
    tokenPackages: TokenPackage[];

    constructor(
        private authService: AuthService,
        private router: Router,
        private modalCtrl: ModalController,
        private tokensService: TokensService,
        private navCtrl: NavController,
    ) {}

    ngOnInit(): void {
        this.getUserData();
        this.getTokenPackages();

        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            const currentRoute = this.router.routerState.root;
            let childRoute = currentRoute;

            while (childRoute.firstChild) {
                childRoute = childRoute.firstChild;
            }
            this.childTitle = childRoute.snapshot.data['childTitle']
                ? childRoute.snapshot.data['childTitle']
                : childRoute.snapshot.queryParams['childTitle']
                ? childRoute.snapshot.queryParams['childTitle']
                : childRoute.snapshot.params['id']
                ? '#' + childRoute.snapshot.params['id']
                : '';
            this.isChildView = childRoute.snapshot.data['isChildView'];
        });
    }

    getUserData(): void {
        this.userData = this.authService.getUserData();
    }

    goBack(): void {
        this.navCtrl.back();
    }

    getTokenPackages(): void {
        this.tokenPackages = this.tokensService.getTokenPackages();
    }

    async openFanPointsModal(): Promise<void> {
        const modal = await this.modalCtrl.create({
            component: FanTokensModalComponent,
            cssClass: 'df-modal',
            breakpoints: [1],
            initialBreakpoint: 1,
            componentProps: {
                userData: this.userData,
                tokenPackages: this.tokenPackages,
            },
        });
        await modal.present();
    }

    presentPopover(e: Event) {
        this.popover.event = e;
        this.isPopoverOpen = true;
    }

    async logout(): Promise<void> {
        await this.popover.dismiss();
        this.isPopoverOpen = false;
        this.authService.logout();
    }

    async navigateProfile(): Promise<void> {
        await this.popover.dismiss();
        this.isPopoverOpen = false;
        this.navCtrl.navigateRoot('/profile');
    }
}
