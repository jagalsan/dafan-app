import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'df-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    collectibles!: any[];

    constructor() {}

    ngOnInit(): void {
        this.getCollectibles();
    }

    getCollectibles(): void {
        //TODO: Create collectibles service
        this.collectibles = [
            {
                id: 1,
                label: 'test collectible 1',
                image: 'https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0889/usr/images/news/main_image/6/nft-bored-ape-yacht-club.png',
            },
            {
                id: 2,
                label: 'test collectible 2',
                image: 'https://s3.ap-northeast-1.amazonaws.com/fio.one/live/wp-content/uploads/2021/12/ape3.png',
            },
            {
                id: 3,
                label: 'test collectible 3',
                image: 'https://www.businesstoday.com.my/wp-content/uploads/2022/02/monkey-art-NFT.png',
            },
            {
                id: 4,
                label: 'test collectible 4',
                image: 'https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-2-1.png.webp',
            },
            {
                id: 1,
                label: 'test collectible 1',
                image: 'https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0889/usr/images/news/main_image/6/nft-bored-ape-yacht-club.png',
            },
            {
                id: 2,
                label: 'test collectible 2',
                image: 'https://s3.ap-northeast-1.amazonaws.com/fio.one/live/wp-content/uploads/2021/12/ape3.png',
            },
            {
                id: 3,
                label: 'test collectible 3',
                image: 'https://www.businesstoday.com.my/wp-content/uploads/2022/02/monkey-art-NFT.png',
            },
            {
                id: 4,
                label: 'test collectible 4',
                image: 'https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-2-1.png.webp',
            },
        ];
    }
}
