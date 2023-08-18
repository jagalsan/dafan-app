import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizePipe } from './pipes/sanitize.pipe';

const PIPES = [SanitizePipe];

@NgModule({
    imports: [CommonModule],
    declarations: [...PIPES],
    exports: [...PIPES],
    providers: [...PIPES],
})
export class UtilsModule {}
