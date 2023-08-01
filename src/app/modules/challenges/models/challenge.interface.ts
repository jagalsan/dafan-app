export interface Challenge {
    id: number;
    name: string;
    label: string;
    image?: string;
    rewardPoints: number;
    typeId: number;
    type: ChallengeType;
    subType?: ChallengeSubType;
    validatorCode?: string;
    completed?: boolean;
}
interface ChallengeType {
    id: number;
    name: 'digital' | 'onField';
}

interface ChallengePlayer {
    id: number;
    name: string;
    image: string;
}

interface ChallengeTeam {
    id: number;
    name: string;
    image: string;
}

interface ChallengeSubType {
    id: number;
    name: 'quiz' | 'bet' | 'scorersPredictions';
    typeId: number;
    players?: ChallengePlayer[];
    teams?: [ChallengeTeam, ChallengeTeam];
}
