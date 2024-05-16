import { ClubExperience } from '../models/experience.interface';

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
                previewImage: '/assets/images/examples/club-shirt.jpg',
                type: {
                    label: 'Discounts',
                    name: 'discount',
                    id: 1,
                },
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero accusantium modi velit ducimus aspernatur debitis consequuntur exercitationem officia placeat. Dolores, consequuntur ad! Veniam sapiente aliquid quae non sint repellendus?',
                pointsCost: 42,
                levelRequired: 1,
            },
            {
                id: 2,
                name: 'museumAccess',
                label: 'Museum access',
                percentageDiscount: 20,
                previewImage: '/assets/images/examples/museum-club.jpg',
                type: {
                    label: 'Discounts',
                    name: 'discount',
                    id: 1,
                },
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero accusantium modi velit ducimus aspernatur debitis consequuntur exercitationem officia placeat. Dolores, consequuntur ad! Veniam sapiente aliquid quae non sint repellendus? <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero accusantium modi velit ducimus aspernatur debitis consequuntur exercitationem officia placeat. Dolores, consequuntur ad! Veniam sapiente aliquid quae non sint repellendus?',
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
                id: 4,
                name: 'stadiumTour',
                label: 'Stadium tour',
                previewImage: '/assets/images/examples/camp-club.png',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero accusantium modi velit ducimus aspernatur debitis consequuntur exercitationem officia placeat. Dolores, consequuntur ad! Veniam sapiente aliquid quae non sint repellendus? <br> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero accusantium modi velit ducimus aspernatur debitis consequuntur exercitationem officia placeat. Dolores, consequuntur ad! Veniam sapiente aliquid quae non sint repellendus?',
                pointsCost: 1500,
                levelRequired: 1,
            },
            {
                id: 7,
                name: 'liveMatch',
                label: 'VIP live match section',
                previewImage: '/assets/images/examples/club-vip-match.jpg',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                description:
                    ' Attend 1 Deportivo La Liga match in our VIP stand, having access to free food, beverages and located in preferencia stand.<br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero accusantium modi velit ducimus aspernatur debitis consequuntur exercitationem officia placeat. Dolores, consequuntur ad! Veniam sapiente aliquid quae non sint repellend',
                pointsCost: 1500,
                levelRequired: 2,
            },
            {
                id: 6,
                name: 'SignedShirt',
                label: 'Signed Shirt',
                previewImage: '/assets/images/examples/club-shirt.jpg',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                description:
                    "Acquire a signed shirt by one of Depor's legends like Bebeto, Mauro Silva or Scaloni. <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero accusantium modi velit ducimus aspernatur debitis consequuntur exercitationem officia placeat. Dolores, consequuntur ad! Veniam sapiente aliquid quae non sint repellendus? <br> <br> Sit vero accusantium modi velit ducimus aspernatur debitis consequuntur exercitationem officia placeat. Dolores, consequuntur ad! Veniam sapiente aliquid quae non sint repellendus?",
                pointsCost: 2000,
                levelRequired: 2,
            },
            {
                id: 3,
                name: 'meetPlayer',
                label: 'Meet player',
                previewImage: '/assets/images/examples/club-player-wallpaper.png',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero accusantium modi velit ducimus aspernatur debitis consequuntur exercitationem officia placeat. Dolores, consequuntur ad! Veniam sapiente aliquid quae non sint repellendus?',
                pointsCost: 2000,
                levelRequired: 2,
            },
            {
                id: 8,
                name: 'meetGreet',
                label: 'Meet & Greet legend',
                previewImage: '/assets/images/examples/meet-club-legend.jpg',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                description:
                    "Have you ever dreamed about meeting a Deportivo's legend. This is your opportunity. Experience a match at Riazor Stadium and have the opportunity to meet & greet Donato <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero accusantium modi velit ducimus aspernatur debitis consequuntur exercitationem officia placeat. Dolores, consequuntur ad! Veniam sapiente aliquid quae non sint repellendus?",
                pointsCost: 3000,
                levelRequired: 3,
            },
            {
                id: 9,
                name: 'playInStadium',
                label: 'Play in the stadium',
                previewImage: '/assets/images/examples/camp-club.png',
                type: {
                    label: 'Full experience',
                    name: 'fullExperience',
                    id: 2,
                },
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero accusantium modi velit ducimus aspernatur debitis consequuntur exercitationem officia placeat. Dolores, consequuntur ad! Veniam sapiente aliquid quae non sint repellendus? <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero accusantium modi velit ducimus aspernatur debitis consequuntur exercitationem officia placeat. Dolores, consequuntur ad! Veniam sapiente aliquid quae non sint repellendus?',
                pointsCost: 9000,
                levelRequired: 5,
            },
        ],
    },
];
