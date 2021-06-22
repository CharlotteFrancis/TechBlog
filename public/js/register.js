
document.getElementById('register').addEventListener('click', event => {
  event.preventDefault()
  console.log('event listener on reg works!')
  // post user for registration
  axios.post('/api/users/register', {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  })
    .then(() => window.location = '/login') // go to login window after user creation
    .cath(err => console.log(err))
})
