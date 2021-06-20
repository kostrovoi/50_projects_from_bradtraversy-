const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

//  we can use built in event 'dblclick'
loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      console.log('hi - 123');
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
  // console.log('hi - 123');
  // createHeart(e);
});

function createHeart(e) {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const xAxis = e.clientX;
  const yAxis = e.clientY;

  console.log(xAxis, yAxis);

  const offsetLeft = e.target.offsetLeft;
  const offsetTop = e.target.offsetTop;

  const xInsideImg = xAxis - offsetLeft;
  const yInsideImg = yAxis - offsetTop;

  console.log(xInsideImg, yInsideImg);

  heart.style.top = `${yInsideImg}px`;
  heart.style.left = `${xInsideImg}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++ timesClicked;
}
