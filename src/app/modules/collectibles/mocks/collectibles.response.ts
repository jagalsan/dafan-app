import { Collectible } from '../models/collectible.interface';

export const collectiblesResponse: Collectible[] = [
    {
        id: 1,
        image: 'assets/images/examples/collectibles/collectible_01.png',
        hashId: 'xxxxxx1',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'type 2',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'type 1',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'type 2',
            },
        ],
    },
    {
        id: 2,
        image: 'assets/images/examples/collectibles/collectible_02.png',
        hashId: 'xxxxxx2',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'type 3',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'type 2',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'type 3',
            },
        ],
    },
    {
        id: 3,
        image: 'assets/images/examples/collectibles/collectible_03.png',
        hashId: 'xxxxxx3',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'type 1',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'type 1',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'type 1',
            },
        ],
    },
    {
        id: 4,
        image: 'assets/images/examples/collectibles/collectible_04.png',
        hashId: 'xxxxxx4',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'type 2',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'type 1',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'type 3',
            },
        ],
    },
    {
        id: 5,
        image: 'assets/images/examples/collectibles/collectible_05.png',
        hashId: 'xxxxxx5',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'type 1',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'type 2',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'type 3',
            },
        ],
    },
    {
        id: 6,
        image: 'assets/images/examples/collectibles/collectible_06.png',
        hashId: 'xxxxxx6',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'type 2',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'type 3',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'type 1',
            },
        ],
    },
    {
        id: 7,
        image: 'assets/images/examples/collectibles/collectible_07.png',
        hashId: 'xxxxxx7',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'type 3',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'type 2',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'type 1',
            },
        ],
    },
    {
        id: 8,
        image: 'assets/images/examples/collectibles/collectible_08.png',
        hashId: 'xxxxxx8',
        name: 'Fake collectible',
        properties: [
            {
                id: 1,
                label: 'Mouth',
                name: 'mouth',
                value: 'type 1',
            },
            {
                id: 2,
                label: 'Eyes',
                name: 'eyes',
                value: 'type 1',
            },
            {
                id: 3,
                label: 'Hair',
                name: 'hair',
                value: 'type 3',
            },
        ],
    },
];

export const userCollectible: Collectible = {
    id: 8,
    image: 'assets/images/examples/collectibles/collectible_08.png',
    hashId: 'xxxxxx8',
    name: 'Fake collectible',
    percentage: 0.7,
    properties: [
        {
            id: 1,
            label: 'Mouth',
            name: 'mouth',
            value: 'type 2',
        },
        {
            id: 2,
            label: 'Eyes',
            name: 'eyes',
            value: 'type 1',
        },
        {
            id: 3,
            label: 'Hair',
            name: 'hair',
            value: 'type 3',
        },
    ],
};
