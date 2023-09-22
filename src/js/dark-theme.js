const toggles = document.querySelectorAll('.theme-toggle');

toggles.forEach(toggle => toggle.addEventListener('change', onChangeTheme));

const storadgeTheme = localStorage.getItem("ui-theme");
if (storadgeTheme) {
  document.documentElement.setAttribute('data-theme', JSON.parse(storadgeTheme));
  if (JSON.parse(storadgeTheme) === 'dark') {
    toggles.forEach(toggle => toggle.checked = true);
  } else {
    toggles.forEach(toggle => toggle.checked = false);
  }
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

function onChangeTheme(e) {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const targetTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem("ui-theme", JSON.stringify(targetTheme));
}
