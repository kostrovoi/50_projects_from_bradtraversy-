const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

// checkBoxes();

function checkBoxes() {
  // console.log(`viewport height: ${window.innerHeight}`, `trigger point height: ${window.innerHeight / 5 * 4}`);
  // the random trigger point

  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    // console.log(`the top of every box: ${boxTop}`);

    if(boxTop > triggerBottom) {
      box.classList.add('unshown');
    } else {
      box.classList.remove('unshown');
    }
  });
}