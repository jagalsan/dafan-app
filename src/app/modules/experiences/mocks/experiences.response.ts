import { ClubExperience, Experience } from '../models/experience.interface';

export const experiencesResponse: Experience[] = [
    {
        id: 1,
        name: 'merch',
        label: 'Merch',
        percentageDiscount: 15,
        previewImage: '',
        type: {
            label: 'Discounts',
            name: 'discount',
            id: 1,
        },
        pointsCost: 42,
        levelRequired: 1,
    },
    {
        id: 2,
        name: 'museumAccess',
        label: 'Museum access',
        percentageDiscount: 30,
        previewImage: '',
        type: {
            label: 'Discounts',
            name: 'discount',
            id: 1,
        },
        pointsCost: 250,
        levelRequired: 1,
    },
    {
        id: 3,
        name: 'meetPlayer',
        label: 'Meet player',
        previewImage: '',
        type: {
            label: 'Full experience',
            name: 'fullExperience',
            id: 2,
        },
        pointsCost: 2000,
        levelRequired: 3,
    },
    {
        id: 4,
        name: 'stadiumTour',
        label: 'Stadium tour',
        previewImage: '',
        type: {
            label: 'Full experience',
            name: 'fullExperience',
            id: 2,
        },
        pointsCost: 1500,
        levelRequired: 1,
    },
];

export const ClubExperiencesResponse: ClubExperience[] = [
    {
        type: {
            label: 'Discounts',
            name: 'discount',
            id: 1,
        },
        experiences: [
            {
                id: 1,
                name: 'merch',
                label: 'Merch',
                percentageDiscount: 20,
                previewImage: '/assets/images/examples/shirt_deport.png',
                type: {
                    label: 'Discounts',
                    name: 'discount',
                    id: 1,
                },
                pointsCost: 42,
                levelRequired: 1,
            },
            {
                id: 2,
                name: 'museumAccess',
                label: 'Museum access',
                percentageDiscount: 20,
                previewImage: '/assets/images/examples/museum_deport.png',
                type: {
                    label: 'Discounts',
                    name: 'discount',
                    id: 1,
                },
                pointsCost: 250,
                levelRequired: 1,
            },
        ],
    },
    {
        type: {
            label: 'Full experience',
            name: 'fullExperience',
            id: 2,
        },
        experiences: [
            {
                id: 5,
                name: 'museumAccessFree',
                label: 'Free Stadium tour',
                previewImage: '/assets/images/examples/museum_deport.png',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                pointsCost: 400,
                levelRequired: 1,
            },
            {
                id: 6,
                name: 'SignedShirt',
                label: 'Signed Shirt',
                previewImage: '/assets/images/examples/shirt_deport.png',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                pointsCost: 300,
                levelRequired: 2,
            },
            {
                id: 3,
                name: 'meetPlayer',
                label: 'Meet player',
                previewImage: '/assets/images/examples/player_deport.png',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                pointsCost: 2000,
                levelRequired: 2,
            },
            {
                id: 4,
                name: 'stadiumTour',
                label: 'Stadium tour',
                previewImage: '/assets/images/examples/camp_deport.png',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                pointsCost: 1500,
                levelRequired: 1,
            },
            {
                id: 7,
                name: 'liveMatch',
                label: 'VIP live match section',
                previewImage: '/assets/images/examples/deport_match.jpeg',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                pointsCost: 1500,
                levelRequired: 2,
            },
            {
                id: 8,
                name: 'meetGreet',
                label: 'Meet & Greet legend',
                previewImage: '/assets/images/examples/meet_deport.jpeg',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                pointsCost: 6000,
                levelRequired: 3,
            },
            {
                id: 9,
                name: 'playInStadium',
                label: 'Play in the stadium',
                previewImage: '/assets/images/examples/camp_deport.png',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                pointsCost: 9000,
                levelRequired: 5,
            },
        ],
    },
];
