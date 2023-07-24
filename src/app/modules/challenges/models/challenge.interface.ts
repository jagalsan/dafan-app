export interface Challenge {
    id: number;
    name: string;
    label: string;
    image?: string;
    rewardPoints: number;
    typeId: number;
    type: ChallengeType;
    subType?: ChallengeSubType;
}

export interface MatchChallenge extends Challenge {
    opponentTeam: {
        id: number;
        name: string;
        image: string;
    };
}

export interface ScorersPredictionsChallenge extends Challenge {
    players: {
        name: string;
        image: string;
    }[];
}

interface ChallengeType {
    id: number;
    name: 'digital' | 'onField';
}

interface ChallengeSubType extends ChallengeType {
    typeId: number;
    subTypeName: 'quiz' | 'match' | 'scorersPredictions';
}
