import { Component } from '@angular/core';
import { menuConfig } from '../../services/menu.config';

@Component({
    selector: 'df-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
    menuBottom = menuConfig;

    constructor() {}
}
