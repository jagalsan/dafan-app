import { Component, Input } from '@angular/core';
import { LeaderBoardUser } from '../../models/leader-board.interface';

@Component({
    selector: 'df-leader-board',
    templateUrl: 'leader-board.component.html',
    styleUrls: ['./leader-board.component.scss'],
})
export class LeaderBoardComponent {
    @Input() leaderBoard: { id: number; leaderBoardUsers: LeaderBoardUser[] };
    @Input() type: 'challenge' | 'normal' = 'challenge';

    constructor() {}
}
