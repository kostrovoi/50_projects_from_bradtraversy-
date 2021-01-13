
const buttons = document.querySelectorAll('.faq-toggle');

// console.log(buttons);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentNode.classList.toggle('active');
  });
// console.log(button.parentNode);

});

