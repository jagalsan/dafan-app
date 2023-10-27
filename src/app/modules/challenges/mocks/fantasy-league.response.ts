import { FantasyLeague } from '../models/fantasy-league.interface';

export const fantasyLeagueResponse: FantasyLeague = {
    id: 1,
    name: '#FANTASYleague',
    matchList: [
        {
            id: 1,
            homeClub: {
                id: 1,
                name: 'Xolos',
                image: 'club-logo.png',
            },
            homeClubScore: 1,
            awayClubScore: 1,
            awayTeam: {
                id: 2,
                name: 'Juarez',
                image: 'juarez-logo.png',
            },
        },
        {
            id: 2,
            homeClub: {
                id: 3,
                name: 'Chivas',
                image: 'chivas-logo.png',
            },
            homeClubScore: 2,
            awayClubScore: 1,
            awayTeam: {
                id: 4,
                name: 'Necaxa',
                image: 'necaxa-logo.png',
            },
        },
        {
            id: 3,
            homeClub: {
                id: 5,
                name: 'Pachuca',
                image: 'pachuca-logo.png',
            },
            homeClubScore: 3,
            awayClubScore: 3,
            awayTeam: {
                id: 6,
                name: 'Tigres',
                image: 'tigres-logo.png',
            },
        },
    ],
};
