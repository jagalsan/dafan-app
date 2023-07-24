import { Component, OnInit } from '@angular/core';
import { MenuOption } from '../../models/menu-config.interface';
import { menuConfig } from '../../services/menu.config';

@Component({
    selector: 'df-tab-bar',
    templateUrl: 'tab-bar.component.html',
    styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent implements OnInit {
    menu!: MenuOption[];

    constructor() {}

    ngOnInit(): void {
        this.menu = menuConfig;
    }
}
