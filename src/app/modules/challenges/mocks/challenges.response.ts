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
