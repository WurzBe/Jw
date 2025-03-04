// Quando a página carrega, aplica o tema salvo (se houver)
window.onload = () => {
  const theme = localStorage.getItem('theme') || 'dark'; // Padrão é 'dark'
  document.body.classList.add(theme);
};

function togglemode() {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.body.classList.replace(currentTheme, newTheme);
  localStorage.setItem('theme', newTheme); // Salva a preferência do tema
}


