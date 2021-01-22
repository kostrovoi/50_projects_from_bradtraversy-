const smallCups = document.querySelectorAll('.one-small-cup');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => highlightCups(index));
});

function highlightCups(index) {
  // console.log(index);

  if (smallCups[index].nextElementSibling !== null) {
    if (
      smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')
    ) {
      index--;
      // console.log(index)
    }
   } // else {index = smallCups.length - 2;}

     console.log(index)

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.one-small-cup.full').length;
  // console.log(fullCups)
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    // 330 is the height of the big cup in css
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
