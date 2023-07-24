import { TokenPackage } from '../../models/tokens/token-package.interface';

export const tokenPackagesResponse: TokenPackage[] = [
    {
        id: 1,
        price: 5,
        savePrice: null,
        tokenCount: 10,
    },
    {
        id: 2,
        price: 20,
        savePrice: 5,
        tokenCount: 50,
    },
    {
        id: 3,
        price: 35,
        savePrice: 15,
        tokenCount: 100,
    },
    {
        id: 4,
        price: 120,
        savePrice: 50,
        tokenCount: 500,
    },
];
