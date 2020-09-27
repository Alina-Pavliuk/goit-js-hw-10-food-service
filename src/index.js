import "./css/style.css";

import menuDishes from './menu.json';
import menuItem from './templates/menuItems.hbs';
import { Theme } from './theme.js';
const themeSwitch = document.querySelector(".theme-switch__toggle");
const menuList = document.querySelector('.js-menu');
const body = document.querySelector('body');
const itemMenu = menuItem(menuDishes);
menuList.insertAdjacentHTML('afterbegin', itemMenu);

themeSwitch.addEventListener('change', () => {
  console.log(themeSwitch.checked);
  if(themeSwitch.checked) {
    localStorage.setItem('theme', Theme.DARK);
    body.classList.toggle(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.toggle(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
  } 
});

if(localStorage.getItem('theme') === Theme.DARK) {
  themeSwitch.checked = true;
  body.classList = localStorage.getItem('theme');
} else {
  body.classList = localStorage.getItem('theme');
};
