const theme = {
  class: '.theme-icon',
  key: 'theme',
  dark: 'dark',
  light: 'light'
};

(document.querySelector(theme.class) as HTMLElement).onclick = toggleTheme;

function getTheme() {
  return localStorage.getItem(theme.key) || theme.dark
}

document.body.classList.add(getTheme())

function toggleTheme() {
  const newTheme = getTheme() == theme.dark ? theme.light : theme.dark
  document.body.classList.remove(theme.dark, theme.light)
  document.body.classList.add(newTheme)
  localStorage.setItem(theme.key, newTheme)
}
