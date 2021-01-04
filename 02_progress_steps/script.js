console.log('hi');

const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const circles = document.querySelectorAll('.circle');

// console.log(circles);

let currentActive = 1;

nextBtn.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  // console.log(currentActive);
  update();
});

prevBtn.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  console.log(actives.length, circles.length);
  console.log(actives.length / circles.length);
  console.log((actives.length - 1) / (circles.length - 1));

  let num = (actives.length - 1) / (circles.length - 1);
  progress.style.width = (Math.floor(num * 100) / 100) * 100 + '%';

  // Math.floor(num * 100) / 100
  // progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  console.log(progress.style.width);

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
