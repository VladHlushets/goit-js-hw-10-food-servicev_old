const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// вешаем слушателя на свитч

refs.switch.addEventListener('change', changeTheme);

// меняем тему

const replaceTheme = (add, remove) => {
  refs.body.classList.add(add);
  refs.body.classList.remove(remove);
};

//   вызываем функцию

function changeTheme() {
  const { checked } = refs.switch;
  const { DARK, LIGHT } = Theme;

  if (checked) {
    replaceTheme(DARK, LIGHT);
    localStorage.setItem('theme', DARK);
    return;
  }

  replaceTheme(LIGHT, DARK);
  localStorage.setItem('theme', LIGHT);
}

// вешаем на боди

const localTheme = localStorage.getItem('theme');

if (localTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}
