const hourEL = document.querySelector('.hour');
const minuteEL = document.querySelector('.minute');
const secondEL = document.querySelector('.second');
const timeEL = document.querySelector('.time');
let dateEL = document.querySelector('.date');
// let circleEL = document.querySelector('.circle');
const toggle = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// toggle.addEventListener('click', (e) => {
//   const html = document.querySelector('html');
//   if(html.classList.contains('dark')) {
//     html.classList.remove('dark');
//     e.target.innerHTML = 'Dark Mode';
//   } else {
//     html.classList.add('dark');
//     e.target.innerHTML = 'Light Mode';
//   }
// });

toggle.addEventListener('click', () => {
  const html = document.querySelector('html')
  html.classList.toggle('dark')
  toggle.innerText = html.classList.contains('dark')? 'Light mode': 'Dark mode';
});

function setTime() {
  const time = new Date();
  // console.log(time);
  const date = time.getDate();
  const month = time.getMonth();
  const day = time.getDay();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
  minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
  secondEL.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
  // move out transition property from the "seconds needle"
  secondEL.style.transition = `${seconds === 0 ? 'none' : 'all 0.5s ease-in'}`;

  timeEL.innerHTML = `${hoursForClock}:${minutes < 10 ? '0' + minutes: minutes} ${ampm}`;
  dateEL.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
  // circleEL.innerText = `${date}`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
//it needs to be above setTime() where we actually use it.

setTime();
setInterval(setTime, 1000);
