import menuTemplate from './templates/menu-items.hbs';
import murkupMenu from './js/menu.json';
import './sass/main.scss';
import { onChangeTheme, savedTheme, refs } from './js/theme';


refs.menuList.insertAdjacentHTML('afterbegin', menuTemplate(murkupMenu));
refs.themeSwitcher.addEventListener('change', onChangeTheme);

savedTheme();