import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/modules/auth/models/user.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Collectible } from '../../models/collectible.interface';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'df-collectible',
    templateUrl: 'collectible.component.html',
    styleUrls: ['./collectible.component.scss'],
})
export class CollectibleComponent implements OnInit {
    clubPrefix = environment.clubPrefix;
    userData!: User;
    isUserCollectible!: boolean;
    collectible!: Collectible;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.getUserData();
    }

    getUserData(): void {
        this.userData = this.authService.getUserData();

        this.collectible = this.route.snapshot.data['collectible'];
        this.isUserCollectible = this.userData.userCollectible.hashId === this.collectible.hashId;
    }
}
