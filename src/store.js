import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import classic_1 from './assets/img/classic/classic_1.png';
import classic_2 from './assets/img/classic/classic_2.png';
import classic_3 from './assets/img/classic/classic_3.png';
import classic_4 from './assets/img/classic/classic_4.png';
import classic_5 from './assets/img/classic/classic_5.png';
import classic_6 from './assets/img/classic/classic_6.png';
import classic_7 from './assets/img/classic/classic_7.png';
import classic_8 from './assets/img/classic/classic_8.png';
import classic_9 from './assets/img/classic/classic_9.png';
import forms_1 from './assets/img/forms/forms_1.png';
import forms_2 from './assets/img/forms/forms_2.png';
import forms_3 from './assets/img/forms/forms_3.png';
import forms_4 from './assets/img/forms/forms_4.png';
import forms_5 from './assets/img/forms/forms_5.png';
import forms_6 from './assets/img/forms/forms_6.png';
import aroma_1 from './assets/img/aroma/aroma_1.png';
import aroma_2 from './assets/img/aroma/aroma_2.png';
import aroma_3 from './assets/img/aroma/aroma_3.png';

export const useCandles = create(devtools((set, get) => ({
    classic: [
        {
            id: 0,
            name: 'Свічка у склі Classik',
            volume: 200,
            src: classic_1,
            burning: '',
            description: '',
            price: 280
        },
        {
            id: 1,
            name: 'Свічка у склі Big',
            volume: 280,
            src: classic_2,
            burning: '',
            description: '',
            price: 340
        },
        {
            id: 2,
            name: 'Свічка Travel в алюмінієвій баночці',
            volume: 120,
            src: classic_3,
            burning: '',
            description: '',
            price: 220
        },
        {
            id: 3,
            name: 'Свічка у кришталевому підсвічнику',
            volume: 200,
            src: classic_4,
            burning: '',
            description: '',
            price: 390
        },
        {
            id: 4,
            name: 'Свічка у склі з дерев’яною кришечкою',
            volume: 200,
            src: classic_5,
            burning: '',
            description: '',
            price: 340
        },
        {
            id: 5,
            name: 'Свічка в банці з дерев’яною кришечкою',
            volume: 200,
            src: classic_6,
            burning: '',
            description: '',
            price: 320
        },
        {
            id:6,
            name: 'Свічка в кокосі',
            volume: 150,
            src: classic_7,
            burning: '',
            description: '',
            price: 250
        },
        {
            id: 7,
            name: 'Свічка Air у склянці з подвійним дном',
            volume: 350,
            src: classic_8,
            burning: '',
            description: '',
            price: 530
        },
        {
            id: 8,
            name: 'Свічка масажна у керамічному горнятку',
            volume: 130,
            src: classic_9,
            burning: '',
            description: '',
            price: 320
        },
    ],
    forms: [
        {
            id: 0,
            name: 'Тіло «Єва»',
            volume: '10см',
            src: forms_1,
            burning: '',
            description: '',
            price: 150
        },
        {
            id: 1,
            name: 'Тіло «Адам»',
            volume: '10см',
            src: forms_2,
            burning: '',
            description: '',
            price: 150
        },
        {
            id: 2,
            name: 'Свічка «Закохані»',
            volume: '16см',
            src: forms_3,
            burning: '',
            description: '',
            price: 250
        },
        {
            id: 3,
            name: 'Свічка «Шишки», набір',
            volume: '3шт',
            src: forms_4,
            burning: '',
            description: '',
            price: 195
        },
        {
            id: 4,
            name: 'Свічка «Сукуленти»',
            volume: '3шт',
            src: forms_5,
            burning: '',
            description: '',
            price: 210
        },
        {
            id: 5,
            name: 'Свічка «Гарбуз» ',
            volume: '350 грам',
            src: forms_6,
            burning: '',
            description: '',
            price: 230
        },
    ],
    aroma: [
        {
            id: 0,
            name: 'Аромасасше з прикрасою лаванда',
            src: aroma_1,
            description: '',
            price: 85
        },
        {
            id: 1,
            name: 'Аромасасше з прикрасою квітковий дизайн',
            src: aroma_2,
            description: '',
            price: 85
        },
        {
            id: 2,
            name: 'Аромасасше з прикрасою мармурова крихта',
            src: aroma_3,
            description: '',
            price: 85
        },
    ],
})));
