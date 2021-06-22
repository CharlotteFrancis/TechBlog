
const renderPosts = _ => {
  axios.get('api/posts', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(({ data: posts }) => {
      console.log(posts)
      document.getElementById('content').innerHTML = ''
      posts.forEach(element => {
        axios.get(`/api/users/${element.uid}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then((user) => {
            const post = document.createElement('div')
            post.innerHTML = `
            <div class="row">
              <div class="col s12">
                <div class="card grey darken-3">
                  <div class="card-content white-text">
                    <span class="card-title">${element.title}</span>
                    <p>${element.text}</p>
                  </div>
                  <div class="card-action">
                    <a href="/edit/${element.id}">Edit</a>
                    <p class="white-text" style="display: inline;">Created by ${user.data.username} at ${element.createdAt}</p>
                  </div>
                </div>
              </div>
            </div>
            `
            document.getElementById('content').append(post)
          })
          .catch(err => console.log(err))
      })
    })
    .catch((err) => {
      console.log(err)
      window.location = '/login'
    })
}

document.getElementById('submit').addEventListener('click', event => {
  event.preventDefault()
  console.log(document.getElementById('textarea1').value)
  axios.post('/api/posts', {
    title: document.getElementById('title').value,
    text: document.getElementById('textarea1').value
  }, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then((post) => {
      renderPosts()
      document.getElementById('title').value = ''
      document.getElementById('textarea1').value = ''
    })
    .catch(err => console.log(err))
})

// render all posts
renderPosts()
