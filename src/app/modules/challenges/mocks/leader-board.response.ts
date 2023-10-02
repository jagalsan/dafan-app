import { LeaderBoardUser } from '../models/leader-board.interface';

export const leaderBoardResponse: { id: number; leaderBoardUsers: LeaderBoardUser[] } = {
    id: 1,
    leaderBoardUsers: [
        {
            id: 1,
            points: 1980,
            alias: 'HFets',
            ranking: 1,
        },
        {
            id: 2,
            points: 1900,
            alias: 'Marip',
            ranking: 2,
        },
        {
            id: 3,
            points: 1888,
            alias: 'Unluucky04',
            ranking: 3,
        },
        {
            id: 4,
            points: 1689,
            alias: 'Merrpop',
            ranking: 4,
        },
    ],
};
