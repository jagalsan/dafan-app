import { Component } from '@angular/core';
import { leaderBoardResponse } from '../../mocks/leader-board.response';

@Component({
    selector: 'df-leader-board',
    templateUrl: 'leader-board.component.html',
    styleUrls: ['./leader-board.component.scss'],
})
export class LeaderBoardComponent {
    leaderBoard = leaderBoardResponse;

    constructor() {}
}
