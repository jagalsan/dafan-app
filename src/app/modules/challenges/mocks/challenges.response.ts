import { Challenge } from '../models/challenge.interface';

export const onFieldChallengesResponse: Challenge[] = [
    {
        id: 1,
        label: 'Conssumption at the bar',
        name: 'Conssumption at the bar',
        rewardPoints: 10,
        typeId: 2,
        image: 'assets/images/examples/beer.png',
        type: {
            id: 2,
            name: 'onField',
        },
        validatorCode: 'xxxxxxxcccc2',
    },
    {
        id: 2,
        label: 'Attend match at the stadium',
        name: 'AttendMatch',
        rewardPoints: 100,
        typeId: 2,
        image: 'assets/images/examples/club-match-challenge.jpeg',
        type: {
            id: 2,
            name: 'onField',
        },
        validatorCode: 'xxxxxxxcccc3',
    },
    {
        id: 3,
        label: 'Buy merchandising at our official Store',
        name: 'buyMerchandising',
        rewardPoints: 60,
        typeId: 2,
        image: 'assets/images/examples/club-shop.jpeg',
        type: {
            id: 2,
            name: 'onField',
        },
        validatorCode: 'xxxxxxxcccc4',
    },
    {
        id: 4,
        label: 'Visit our museum',
        name: 'VisitMuseum',
        rewardPoints: 70,
        typeId: 2,
        image: 'assets/images/examples/museum-club.png',
        type: {
            id: 2,
            name: 'onField',
        },
        validatorCode: 'xxxxxxxcccc5',
    },
];

export const digitalChallengesList: Challenge[] = [
    {
        id: 5,
        label: '#legendsQUIZ',
        name: 'legendsQuiz',
        rewardPoints: 110,
        typeId: 1,
        type: {
            id: 1,
            name: 'digital',
        },
        subType: {
            id: 1,
            name: 'quiz',
            typeId: 2,
        },
        completed: false,
    },
    {
        id: 6,
        label: 'Porra of the week',
        name: 'weekBet',
        rewardPoints: 70,
        typeId: 1,
        type: {
            id: 1,
            name: 'digital',
        },
        completed: false,
        subType: {
            id: 1,
            name: 'bet',
            typeId: 1,
            teams: [
                {
                    id: 1,
                    image: 'club-logo.png',
                    name: 'Deportivo de la coruña',
                },
                {
                    id: 2,
                    image: 'barca-logo.png',
                    name: 'Barcelona',
                },
            ],
        },
    },
    {
        id: 7,
        label: 'Weekly scorers',
        name: 'weeklyScorers',
        rewardPoints: 100,
        typeId: 1,
        type: {
            id: 1,
            name: 'digital',
        },
        subType: {
            id: 1,
            name: 'scorersPredictions',
            typeId: 3,
            players: [
                {
                    id: 1,
                    name: '',
                    image: 'club-player-1.png',
                    selected: false,
                },
                {
                    id: 2,
                    name: '',
                    image: 'club-player-2.png',
                    selected: false,
                },
                {
                    id: 3,
                    name: '',
                    image: 'club-player-3.png',
                    selected: false,
                },
            ],
        },
        completed: false,
    },
];
