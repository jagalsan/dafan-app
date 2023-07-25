import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FanTokensModalComponent } from './components/fan-tokens-modal/fan-tokens-modal.component';
import { TokenPackageListModule } from './modules/token-packages-list/token-packages-list.module';
import { SuggestModalComponent } from './components/suggest-modal/suggest-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeScanningModalComponent } from './components/code-scanning-modal/code-scanning-modal.component';

const COMPONENTS = [FanTokensModalComponent, SuggestModalComponent, CodeScanningModalComponent];

@NgModule({
    imports: [CommonModule, IonicModule.forRoot(), TokenPackageListModule, FormsModule, ReactiveFormsModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
})
export class SharedModule {}
