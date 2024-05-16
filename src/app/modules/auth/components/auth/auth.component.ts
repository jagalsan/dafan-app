import { Component, Input } from '@angular/core';

@Component({
    selector: 'df-auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    @Input({ required: true }) authPageTitle: string;
    @Input({ required: true }) authView: 'reset' | 'register' | 'login';

    constructor() {}
}
