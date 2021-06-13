const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
    menuList: document.querySelector('.js-menu'),
    themeSwitcher: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
}

function onChangeTheme(evt) {
    if (evt.target.checked) {
        refs.body.classList.remove(Theme.LIGHT);
        refs.body.classList.add(Theme.DARK);

        localStorage.setItem('Theme', Theme.DARK);
    } else {
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);

        localStorage.setItem('Theme', Theme.LIGHT);
  }
};

function savedTheme () {
    const savedTheme = localStorage.getItem('Theme');
    if (savedTheme) {
        refs.body.classList.add(savedTheme);
        if (savedTheme === 'dark-theme') {
            refs.themeSwitcher.checked = true;
        };
    };
}

export {onChangeTheme, savedTheme, refs}