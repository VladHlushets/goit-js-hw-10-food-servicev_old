import dishes from './menu.json';
import template from './templates/dish-cards.hbs';
import './js/change-theme.js';
import './styles.css';

console.log(template);

const menuRef = document.querySelector('.js-menu');

const markUp = template(dishes);

menuRef.insertAdjacentHTML('beforeend', markUp);
