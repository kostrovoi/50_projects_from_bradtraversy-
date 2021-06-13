const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

console.log(slidesLength);

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}%`;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  console.log(sliderHeight);
  if(direction === 'up') {
    activeSlideIndex++;
    if(activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
   } else {
    activeSlideIndex--;
    if(activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

    console.log(activeSlideIndex);

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;

    console.log(`translateY(-${activeSlideIndex * sliderHeight}px)`)
}
