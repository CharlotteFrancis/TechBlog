// const axios = require('axios')

document.getElementById('login').addEventListener('click', event => {
  event.preventDefault()
  console.log('event listener on login works!')
  // axios({
  //   method: 'post',
  //   url: '/api/users/login',
  //   data: {
  //     username: document.getElementById('username').value,
  //     password: document.getElementById('password').value
  //   }
  // })
  //   .then(({ data: token }) => {
  //     if (token) {
  //       localStorage.setItem('token', token)
  //       window.location = '/'
  //     } else {
  //       alert('Invalid username or password')
  //     }
  //   })
  //   .catch(err => console.log(err))
  axios.post('/api/users/login', {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  })
    .then(({ data: token }) => {
      if (token) {
        localStorage.setItem('token', token)
        window.location = '/'
      } else {
        alert('Invalid username or password')
      }
    })
    .catch(err => console.log(err))
  // end axios req
})
