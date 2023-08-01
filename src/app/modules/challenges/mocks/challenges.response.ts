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
        image: 'assets/images/examples/deport_match_challenge.jpeg',
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
        image: 'assets/images/examples/deport_shop.jpeg',
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
        image: 'assets/images/examples/museum_deport.png',
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
            name: 'scorersPredictions',
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
                    image: 'deport_logo.png',
                    name: 'Deportivo de la coruña',
                },
                {
                    id: 2,
                    image: 'barca_logo.png',
                    name: 'Barcelona',
                },
            ],
        },
    },
    {
        id: 7,
        label: 'Weekly scorers predictions',
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
                    image: '',
                },
                {
                    id: 2,
                    name: '',
                    image: '',
                },
                {
                    id: 3,
                    name: '',
                    image: '',
                },
                {
                    id: 4,
                    name: '',
                    image: '',
                },
            ],
        },
        completed: false,
    },
];
