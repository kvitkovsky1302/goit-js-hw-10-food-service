import menuTemplate from './templates/menu-items.hbs';
import murkupMenu from './js/menu.json';
import './sass/main.scss';

const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('afterbegin', menuTemplate(murkupMenu));