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
  const theme = themeSwitch.checked ? Theme.DARK : Theme.LIGHT;
  localStorage.setItem('theme', theme);
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);
});

const localTheme = localStorage.getItem('theme');
themeSwitch.checked = localTheme === Theme.DARK;
body.classList = localTheme;