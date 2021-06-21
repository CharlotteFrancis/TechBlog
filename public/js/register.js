// const axios = require('axios')

document.getElementById('register').addEventListener('click', event => {
  event.preventDefault()
  console.log('event listener on reg works!')
  // axios({
  //   method: 'post',
  //   url: '/api/users/register',
  //   data: {
  //     username: document.getElementById('username').value,
  //     password: document.getElementById('password').value
  //   }
  // })
  //   .then(() => window.location = '/login')
  //   .catch(err => console.log(err))
  axios.post('/api/users/register', {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  })
    .then(() => window.location = '/login')
    .cath(err => console.log(err))
})
