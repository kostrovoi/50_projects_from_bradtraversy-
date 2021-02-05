const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}


function dragStart() {
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0);

  console.log(this.className);
  console.log('dragStart');
}

function dragEnd() {
  this.className = 'fill';
  // this.classList.remove('hold');

  console.log(this.className);
  console.log('dragEnd');
}

function dragOver(e) {
  e.preventDefault();

  console.log('dragOver');
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';

  console.log(this.className);
  console.log('dragEnter');
}

function dragLeave() {
  this.className = 'empty';
  // this.classList.remove('hovered');

  console.log(this.className);
  console.log('dragLeave');
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);

  console.log(this);
  console.log('dragDrop');
}