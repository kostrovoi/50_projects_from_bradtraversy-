const rippleBtns = document.querySelectorAll('.ripple-btn');

rippleBtns.forEach(rippleBtn => {
  rippleBtn.addEventListener('click', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);

    const btnLeft = e.target.offsetLeft;
    const btnTop = e.target.offsetTop;
    // console.log(btnTop, btnLeft);

    const xInside = x - btnLeft;
    const yInside = y - btnTop;
    // console.log(xInside, yInside);

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 510);
  });
});