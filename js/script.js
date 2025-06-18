document.getElementById('toggleTheme').addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
});

// Define tema padrão
if (!document.documentElement.hasAttribute('data-theme')) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

// Carrossel de Projetos
const carousel = document.getElementById('carouselProjetos');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');

if (carousel && leftBtn && rightBtn) {
  leftBtn.onclick = () => {
    carousel.scrollBy({ left: -400, behavior: 'smooth' });
  };
  rightBtn.onclick = () => {
    carousel.scrollBy({ left: 400, behavior: 'smooth' });
  };
}

// Carrossel de Experiências
const carouselExp = document.getElementById('carouselExperiencias');
const leftBtnExp = document.querySelector('.carousel-btn.exp-left');
const rightBtnExp = document.querySelector('.carousel-btn.exp-right');

if (carouselExp && leftBtnExp && rightBtnExp) {
  leftBtnExp.onclick = () => {
    carouselExp.scrollBy({ left: -400, behavior: 'smooth' });
  };
  rightBtnExp.onclick = () => {
    carouselExp.scrollBy({ left: 400, behavior: 'smooth' });
  };
}

const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const toggleBtn = document.getElementById('toggleTheme');

function updateThemeIcon() {
  toggleBtn.innerHTML = document.body.classList.contains('light-theme')
    ? '<i class="lucide lucide-moon"></i>'   // Lua no tema claro
    : '<i class="lucide lucide-sun"></i>';   // Sol no tema escuro
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  updateThemeIcon();
});

updateThemeIcon();
