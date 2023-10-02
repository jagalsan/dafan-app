export interface FantasyLeague {
    id: number;
    name: string;
    matchList: LeagueMatch[];
}

interface LeagueMatch {
    id: number;
    awayTeam: FantasyClub;
    awayClubScore: number;
    homeClub: FantasyClub;
    homeClubScore: number;
}

interface FantasyClub {
    id: number;
    name: string;
    image: string;
}
