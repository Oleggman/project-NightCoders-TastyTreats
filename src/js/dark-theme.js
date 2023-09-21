const toggles = document.querySelectorAll('.theme-toggle');

toggles.forEach(toggle => toggle.addEventListener('change', onChangeTheme));

function onChangeTheme(e) {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const targetTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', targetTheme);
}
