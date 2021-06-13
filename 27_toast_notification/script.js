const button = document.getElementById('button');
const toasts = document.querySelector('.toasts-container');

// console.log(button, toasts);
const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
]

const types = ['success', 'info', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
  const note = document.createElement('div')
  note.classList.add('toast')
  note.classList.add(type ? type : getRandomType())
  note.innerText = message ? message : getRandomMsg()

  toasts.appendChild(note)

  setTimeout(() => {
    note.remove()
  }, 3000)
}

function getRandomMsg() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}