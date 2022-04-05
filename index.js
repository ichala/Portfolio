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

document.querySelectorAll('.see-project-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById('details-popup-container').classList.toggle('hide');
  });
});
document.querySelector('.close-popup').addEventListener('click', () => {
  document.getElementById('details-popup-container').classList.toggle('hide');
});

const projects = [
  {
    _id : '100',
    Name : 'Multi-Post Stories Gain+Glory 1',
    Desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Img : './images/image-details-1.png',
    LiveLink: 'https://ichala.github.io/Portfolio/',
    SrcLink: 'https://github.com/ichala/Portfolio',
    Techs : ['Ruby on rails','css','javascript','html'],

  },
  {
    _id : '101',
    Name : 'Multi-Post Stories Gain+Glory 2',
    Desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Img : './images/image-details-1.png',
    LiveLink: 'https://ichala.github.io/Portfolio/',
    SrcLink: 'https://github.com/ichala/Portfolio',
    Techs : ['Ruby on rails','css','javascript','html'],

  },
  {
    _id : '102',
    Name : 'Multi-Post Stories Gain+Glory 3',
    Desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Img : './images/image-details-1.png',
    LiveLink: 'https://ichala.github.io/Portfolio/',
    SrcLink: 'https://github.com/ichala/Portfolio',
    Techs : ['Ruby on rails','css','javascript','html'],

  },
  {
    _id : '103',
    Name : 'Multi-Post Stories Gain+Glory 4',
    Desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Img : './images/image-details-1.png',
    LiveLink: 'https://ichala.github.io/Portfolio/',
    SrcLink: 'https://github.com/ichala/Portfolio',
    Techs : ['Ruby on rails','css','javascript','html'],

  },
  {
    _id : '104',
    Name : 'Multi-Post Stories Gain+Glory 5',
    Desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Img : './images/image-details-1.png',
    LiveLink: 'https://ichala.github.io/Portfolio/',
    SrcLink: 'https://github.com/ichala/Portfolio',
    Techs : ['Ruby on rails','css','javascript','html'],

  },
  {
    _id : '105',
    Name : 'Multi-Post Stories Gain+Glory 6',
    Desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Img : './images/image-details-1.png',
    LiveLink: 'https://ichala.github.io/Portfolio/',
    SrcLink: 'https://github.com/ichala/Portfolio',
    Techs : ['Ruby on rails','css','javascript','html'],

  },
]
let WorkList = document.getElementById('work-list');

