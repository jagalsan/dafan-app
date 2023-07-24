import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FanTokensModalComponent } from './components/fan-tokens-modal/fan-tokens-modal.component';
import { TokenPackageListModule } from './modules/token-packages-list/token-packages-list.module';

const COMPONENTS = [FanTokensModalComponent];

@NgModule({
    imports: [CommonModule, IonicModule.forRoot(), TokenPackageListModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
})
export class SharedModule {}
