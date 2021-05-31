import './style.css';

// 🥇 import your json data
// Using Vite’s module management capability, import .json file data, JSON: JavaScript Object Notation
import data from './olympic-sports.json'

// 🥈 add a div reference here
// Create a div by gettings its id and will append html elements to it 
let div = document.getElementById('grid');

for (var i = 0; i < data.length; i++) {
	// DOM changes using Element.insertAdjacentHTML(), see more at Mozilla Web Docs
	div.insertAdjacentHTML(
		'beforeend',
		'<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="/' +
			data[i].image +
			'" alt=' +
			JSON.stringify(data[i].sport) +
			'><h2>' +
			data[i].sport +
			'</h2><h3>' +
			data[i].details +
			'</h3><h4>Favored for gold: ' +
			data[i].gold +
			'</h4></div><div class="flip-card-back"><h3 class="description">' +
			data[i].description +
			'</h3></div></div></div>'
	);
}
