import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

import { coffeeData } from './components/coffee-data/cofeeData';

/* import MainPage from './components/main-page/main-page';*/
import CoffeePage from './components/coffee-page/coffee-page';
/* import PlesurePage from './components/plesure-page/plesure-page'; */ 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		{/* <MainPage/> */} 
		 <CoffeePage coffeeData={coffeeData}/>
		 {/* <PlesurePage/> */}
	</React.StrictMode>
);