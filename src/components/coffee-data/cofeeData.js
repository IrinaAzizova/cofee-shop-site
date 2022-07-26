import solimo from './Solimo.jpg';
import presto from './presto.jpg';
import aromatico from './aromatico.jpg';

import aboutGoods from './about-goods.jpg';
import aboutBeans from './about-our-beans.jpg';

export const coffeeData = [
    {name: 'Solimo Coffee Beans 2 kg', price: 10.73, img: solimo, best: true, id: 1, filter: 'Brazil', descr: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Presto Coffee Beans 1 kg', price: 15.99, img: presto, best: true, id: 2, filter: 'Columbia', descr: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'AROMISTICO Coffee 1 kg', price: 6.99, img: aromatico, best: true, id: 3, filter: 'Kenya', descr: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Solimo Coffee Beans 2 kg', price: 10.73, img: solimo, best: false, id: 4, filter: 'Brazil', descr: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Presto Coffee Beans 1 kg', price: 15.99, img: presto, best: false, id: 5, filter: 'Columbia', descr: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'AROMISTICO Coffee 1 kg', price: 6.99, img: aromatico, best: false, id: 6, filter: 'Kenya', descr: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Solimo Coffee Beans 2 kg', price: 10.73, img: solimo, best: false, id: 7, filter: 'Brazil', descr: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Presto Coffee Beans 1 kg', price: 15.99, img: presto, best: false, id: 8, filter: 'Columbia', descr: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'AROMISTICO Coffee 1 kg', price: 6.99, img: aromatico, best: false, id: 9, filter: 'Kenya', descr: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
];

export const aboutData = [
    {
        header: 'About goods', 
        descr: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.                 
            Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
            As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.`,
        img: aboutGoods,
        country: ''
    },
        
    {
        header: 'About our beans',
        descr: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. 
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.`,
        img: aboutBeans
    }
];