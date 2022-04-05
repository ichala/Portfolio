/* eslint-disable no-unused-vars */
const projects = [
  {
    id: 100,
    Name: 'Multi-Post Stories Gain+Glory 1',
    Desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    ImgPc: './images/placeholder-pop.png',
    Img: './images/image-details-1.png',
    LiveLink: 'https://ichala.github.io/Portfolio/',
    SrcLink: 'https://github.com/ichala/Portfolio',
    Techs: ['Ruby on rails', 'css', 'javascript', 'html'],
  },
  {
    id: 101,
    Name: 'Multi-Post Stories Gain+Glory 2',
    Desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    ImgPc: './images/placeholder-pop.png',
    Img: './images/image-details-1.png',
    LiveLink: 'https://ichala.github.io/Portfolio/',
    SrcLink: 'https://github.com/ichala/Portfolio',
    Techs: ['Ruby on rails', 'css', 'javascript', 'html'],
  },
  {
    id: 102,
    Name: 'Multi-Post Stories Gain+Glory 3',
    Desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    ImgPc: './images/placeholder-pop.png',
    Img: './images/image-details-1.png',
    LiveLink: 'https://ichala.github.io/Portfolio/',
    SrcLink: 'https://github.com/ichala/Portfolio',
    Techs: ['Ruby on rails', 'css', 'javascript', 'html'],
  },
  {
    id: 103,
    Name: 'Multi-Post Stories Gain+Glory 4',
    Desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    ImgPc: './images/placeholder-pop.png',
    Img: './images/image-details-1.png',
    LiveLink: 'https://ichala.github.io/Portfolio/',
    SrcLink: 'https://github.com/ichala/Portfolio',
    Techs: ['Ruby on rails', 'css', 'javascript', 'html'],
  },
  {
    id: 104,
    Name: 'Multi-Post Stories Gain+Glory 5',
    Desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    ImgPc: './images/placeholder-pop.png',
    Img: './images/image-details-1.png',
    LiveLink: 'https://ichala.github.io/Portfolio/',
    SrcLink: 'https://github.com/ichala/Portfolio',
    Techs: ['Ruby on rails', 'css', 'javascript', 'html'],
  },
  {
    id: 105,
    Name: 'Multi-Post Stories Gain+Glory 6',
    Desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    ImgPc: './images/placeholder-pop.png',
    Img: './images/image-details-1.png',
    LiveLink: 'https://ichala.github.io/Portfolio/',
    SrcLink: 'https://github.com/ichala/Portfolio',
    Techs: ['Ruby on rails', 'css', 'javascript', 'html'],
  },
];
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
function openModal(id) {
  document.getElementById('details-popup-container').classList.toggle('hide');
  projects.forEach((project) => {
    if (project.id === id) {
      document.querySelector('#ph-desk').src = project.ImgPc;
      document.querySelector('#ph-mob').src = project.Img;
      document.querySelector('.popup-title').innerText = project.Name;
      const tagslist = document.querySelector('.tags-list-popup');
      tagslist.innerHTML = '';
      project.Techs.forEach((tech) => {
        const LiTech = document.createElement('li');
        LiTech.classList.add('tag-popup');
        LiTech.innerText = tech;
        tagslist.appendChild(LiTech);
      });
      document.querySelector('.popup-details').innerText = project.Desc;
      document.querySelector('.SeeLive-btn').href = project.LiveLink;
      document.querySelector('.SeeSrc-btn').href = project.SrcLink;
      document.querySelector('.SeeLive-btn-pc').href = project.LiveLink;
      document.querySelector('.SeeSrc-btn-pc').href = project.SrcLink;
    }
  });
}
document.querySelector('.close-popup').addEventListener('click', () => {
  document.getElementById('details-popup-container').classList.toggle('hide');
});

projects.forEach((project) => {
  const li = document.getElementById('work-list');
  const div = document.createElement('div');
  div.classList.add('card');
  const placeholder = document.createElement('div');
  placeholder.classList.add('image-placeholder');
  div.appendChild(placeholder);
  const cardbody = document.createElement('div');
  cardbody.classList.add('card-body');
  const cardtitle = document.createElement('h2');
  cardtitle.classList.add('card-title');
  cardtitle.innerText = project.Name;
  const tagssection = document.createElement('div');
  tagssection.classList.add('tags-section');
  const tagslist = document.createElement('ul');
  tagslist.classList.add('tags-list');
  project.Techs.forEach((tech) => {
    const LiTech = document.createElement('li');
    LiTech.classList.add('tag');
    LiTech.innerText = tech;
    tagslist.appendChild(LiTech);
  });
  const CardFooter = document.createElement('div');
  CardFooter.classList.add('card-footer');
  CardFooter.innerHTML = `<button class="see-project-btn" onclick=openModal(${
    project.id
  })>See Project</button>`;
  tagssection.appendChild(tagslist);
  cardbody.appendChild(cardtitle);
  cardbody.appendChild(tagssection);
  cardbody.appendChild(CardFooter);
  div.appendChild(cardbody);
  li.appendChild(div);
});
