import { FantasyLeague } from '../models/fantasy-league.interface';

export const fantasyLeagueResponse: FantasyLeague = {
    id: 1,
    name: '#FANTASYleague',
    matchList: [
        {
            id: 1,
            homeClub: {
                id: 1,
                name: 'Deport',
                image: 'club-logo.png',
            },
            homeClubScore: 1,
            awayClubScore: 1,
            awayTeam: {
                id: 2,
                name: 'Barça',
                image: 'barca-logo.png',
            },
        },
        {
            id: 2,
            homeClub: {
                id: 3,
                name: 'Real Sociedad',
                image: 'real-sociedad-logo.png',
            },
            homeClubScore: 2,
            awayClubScore: 1,
            awayTeam: {
                id: 4,
                name: 'Atletico',
                image: 'atletico-logo.png',
            },
        },
        {
            id: 3,
            homeClub: {
                id: 5,
                name: 'Villareal',
                image: 'villareal-logo.png',
            },
            homeClubScore: 3,
            awayClubScore: 3,
            awayTeam: {
                id: 6,
                name: 'Sevilla',
                image: 'sevilla-logo.png',
            },
        },
    ],
};
