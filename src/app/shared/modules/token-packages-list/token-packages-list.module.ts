import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TokenPackagesListComponent } from './components/token-packages-list.component';

@NgModule({
    imports: [IonicModule, CommonModule],
    exports: [TokenPackagesListComponent],
    declarations: [TokenPackagesListComponent],
    providers: [],
})
export class TokenPackageListModule {}
