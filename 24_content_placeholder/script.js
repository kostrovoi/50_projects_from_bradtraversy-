const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const author_name = document.getElementById('author_name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="./img/sunny-beach.jpg" alt="card-image">';
  title.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, explicabo.\
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, explicabo.\
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, explicabo.\
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, explicabo.';
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="user\'s foto">';
  author_name.innerHTML = 'Jhon Doe';
  date.innerHTML = 'Feb 23, 2021';

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));

  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));

}


