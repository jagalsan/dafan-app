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
        {
            id: 5,
            points: 1540,
            alias: 'Funry',
            ranking: 5,
        },
        {
            id: 6,
            points: 1430,
            alias: 'PerPr',
            ranking: 6,
        },
        {
            id: 7,
            points: 1429,
            alias: 'HellLight',
            ranking: 7,
        },
        {
            id: 8,
            points: 1222,
            alias: 'Fryda',
            ranking: 8,
        },
        {
            id: 9,
            points: 1220,
            alias: 'Rasgnarrok',
            ranking: 9,
        },
        {
            id: 10,
            points: 1000,
            alias: 'Anna',
            ranking: 10,
        },
    ],
};
