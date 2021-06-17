const APIURL = 'https://api.github.com/users/'
const main = document.getElementById('main')
const form = document.getElementById('form')
let search = document.getElementById('search')

// dot then - catch syntax

// function getUser(username) {
//   axios(APIURL + username)
//     .then(response => console.log(response.data))
//     .catch(err => console.log(err))
// }

// getUser('kostrovoi')

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)

    createUserCard(data)
    getRepos(username)

    console.log(data)
  } catch(err) {
    if(err.response.status === 404) {
      createErrorCard('no profile with this username')
    }

    console.log(err)
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created')

    addReposToCard(data)

    console.log(data)
  } catch(err) {
    if(err.response.status === 404) {
      createErrorCard('problem fetching repo')
    }

    console.log(err)
  }
}

function createErrorCard(msg) {
  const cardHTML = `
  <div class="card">
    <h1>${msg}</h1>
    </div>
  `

  main.innerHTML = cardHTML
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
      <div class="img-container">
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      </div>
      <div class="user-info">
        <h2>${user.name == null ? user.login : user.name}</h2>
        <p>${user.bio == null ? 'bio was not added' : user.bio}</p>

           <ul>
             <li>${user.followers} <strong>Followers</strong></li>
             <li>${user.following} <strong>Following</strong></li>
             <li>${user.public_repos} <strong>Repos</strong></li>
           </ul>

           <div id="repos"></div>
      </div>
    </div>
  `

  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos')
  repos
    .slice(0, 15)
    .forEach(repo => {
    const repoEl = document.createElement('a')
    repoEl.classList.add('repo')
    repoEl.href = repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name

    reposEl.appendChild(repoEl)
  });
}

  form.addEventListener('submit', (e) => {

    e.preventDefault()
    const user = search.value

    if(user) {
      getUser(user)
      search = ''
    }
  })