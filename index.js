document.querySelector('.tool-button').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu_container');
  menu.classList.toggle('hide');
});
document.querySelector('.close_menu_icon').addEventListener('click', () => {
  document.getElementById('mobile-menu_container').classList.toggle('hide');
});
document.querySelectorAll('.nav-link-mobile').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-menu_container').classList.toggle('hide');
  });
});
