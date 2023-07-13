import { Component, Input } from '@angular/core';
import { MenuOption } from '../../models/menu-config.interface';

@Component({
    selector: 'df-tab-bar',
    templateUrl: 'tab-bar.component.html',
    styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent {
    @Input() menu!: MenuOption[];

    constructor() {}
}
