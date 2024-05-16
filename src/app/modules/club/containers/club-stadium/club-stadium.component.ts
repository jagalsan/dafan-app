import { Component } from '@angular/core';
import { clubStadiumResponse } from '../../mocks/club-stadium.response';

@Component({
    selector: 'df-club-stadium',
    templateUrl: 'club-stadium.component.html',
    styleUrls: ['./club-stadium.component.scss'],
})
export class ClubStadiumComponent {
    clubStadium = clubStadiumResponse;
    constructor() {}
}
