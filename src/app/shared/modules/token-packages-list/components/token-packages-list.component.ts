import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TokenPackage } from 'src/app/core/models/tokens/token-package.interface';

@Component({
    selector: 'df-token-packages-list',
    templateUrl: 'token-packages-list.component.html',
    styleUrls: ['./token-packages-list.component.scss'],
})
export class TokenPackagesListComponent {
    @Input() tokenPackages: TokenPackage[];
    @Output() readonly buyPackageEvent: EventEmitter<number>;

    constructor() {}

    buyPackage(tokenPackage: TokenPackage) {
        this.buyPackageEvent.emit(tokenPackage.id);
    }
}
