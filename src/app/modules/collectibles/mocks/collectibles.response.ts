import { Collectible } from '../models/collectible.interface';

export const collectiblesResponse: Collectible[] = [
    {
        id: 1,
        image: 'assets/images/examples/collectibles/collectible-01.jpg',
        hashId: 'xxxxxx1',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'Focus',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'Red',
            },
            {
                id: 3,
                label: 'Skin',
                name: 'skin',
                value: 'Solana',
            },
            {
                id: 4,
                label: 'Background',
                name: 'background',
                value: 'Red',
            },
        ],
    },
    {
        id: 2,
        image: 'assets/images/examples/collectibles/collectible-02.jpg',
        hashId: 'xxxxxx2',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'Moustache',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'Opened',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'Brown',
            },
        ],
    },
    {
        id: 3,
        image: 'assets/images/examples/collectibles/collectible-03.jpg',
        hashId: 'xxxxxx3',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'Smile',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'Opened',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'Blond',
            },
        ],
    },
    {
        id: 4,
        image: 'assets/images/examples/collectibles/collectible-04.jpg',
        hashId: 'xxxxxx4',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'Moustache',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'Opened',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'Blond',
            },
        ],
    },
    {
        id: 5,
        image: 'assets/images/examples/collectibles/collectible-05.jpg',
        hashId: 'xxxxxx5',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'Smile',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'Round',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'Blond',
            },
        ],
    },
    {
        id: 6,
        image: 'assets/images/examples/collectibles/collectible-06.jpg',
        hashId: 'xxxxxx6',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'Smile',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'Type 3',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'Blond',
            },
        ],
    },
    {
        id: 7,
        image: 'assets/images/examples/collectibles/collectible-07.jpg',
        hashId: 'xxxxxx7',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'Type 3',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'Type 2',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'Blond',
            },
        ],
    },
    {
        id: 8,
        image: 'assets/images/examples/collectibles/collectible-08.jpg',
        hashId: 'xxxxxx8',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'Smile',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'Opened',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'Blond',
            },
        ],
    },
    {
        id: 9,
        image: 'assets/images/examples/collectibles/collectible-09.jpg',
        hashId: 'xxxxxx9',
        name: 'Fake collectible',
        price: 35,
        userOwner: {
            id: 33,
            name: 'Lumx3',
            image: '/assets/images/examples/collectible-owner-1.jpg',
        },
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'Smile',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'Opened',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'blond',
            },
        ],
    },
];

export const userCollectible: Collectible = {
    id: 8,
    image: 'assets/images/examples/collectibles/collectible-08.jpg',
    hashId: 'xxxxxx8',
    name: 'Fake collectible',
    percentage: 0.7,
    properties: [
        {
            id: 1,
            label: 'Mouth',
            name: 'mouth',
            value: 'smile',
        },
        {
            id: 2,
            label: 'Eyes',
            name: 'eyes',
            value: 'laser',
        },
        {
            id: 3,
            label: 'Hair',
            name: 'hair',
            value: 'blond',
        },
    ],
};
