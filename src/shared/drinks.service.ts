// import { Component } from '@angular/core';
import { IDrinks } from './shared';
import { Injectable } from '@angular/core';

@Injectable()
export class DrinksService {
    getDrinks() : IDrinks[] { 
        return;
    }
}

// export class Drinks {
//     drinks: any = [
// // Beer family = 0
// 	[
// 		{
// 			family: 	'beer',
// 			name: 		'beer glass 200ml',
// 			img: 		'',
// 			contains: 	'0.6'
// 		},
// 		{	
// 			family: 	'beer',
// 			name: 		'beer glass 500ml',
// 			img: 		'',
// 			contains: 	'1.6',
// 		},
// 		{	
// 			family: 	'beer',
// 			name: 		'beer can',
// 			img: 		'',
// 			contains: 	'1.2'
// 		},
// 		{	
// 			family: 	'beer',
// 			name: 		'beer bottle 330ml',
// 			img: 		'',
// 			contains: 	'1.3'
// 		},
// 		{	
// 			family: 	'beer',
// 			name: 		'cider bottle 330ml',
// 			img: 		'',
// 			contains: 	'1.3'
// 		},
// 		{	
// 			family: 	'beer',
// 			name: 		'RTD bottle 330ml',
// 			img: 		'',
// 			contains: 	'1.6'
// 		}
// 	],

// // Wine family = 1
// 	[
// 		{
// 			family: 	'wine',
// 			name: 		'wine glass 100ml',
// 			img: 		'',
// 			contains: 	'1'
// 		},
// 		{	
// 			family: 	'wine',
// 			name: 		'wine bottle 750ml',
// 			img: 		'',
// 			contains: 	'8',
// 		},
// 		{	
// 			family: 	'wine',
// 			name: 		'wine cask 3000ml',
// 			img: 		'',
// 			contains: 	'30'
// 		}
// 	],

// // Spirit family = 2
// 	[
// 		{
// 			family: 	'spirit',
// 			name: 		'spirit shot 30ml',
// 			img: 		'',
// 			contains: 	'1'
// 		},
// 		{	
// 			family: 	'spirit',
// 			name: 		'spirit tumbler 50ml',
// 			img: 		'',
// 			contains: 	'1.5',
// 		},
// 		{	
// 			family: 	'spirit',
// 			name: 		'spirit flask 375ml',
// 			img: 		'',
// 			contains: 	'11'
// 		},
// 		{	
// 			family: 	'spirit',
// 			name: 		'spirit bottle 500ml',
// 			img: 		'',
// 			contains: 	'15'
// 		}
// 	],

// // Coctail family = 3
// 	[
// 		{
// 			family: 	'coctail',
// 			name: 		'coctail glass 300ml',
// 			img: 		'',
// 			contains: 	'5'
// 		},
// 	],

// ];
// }