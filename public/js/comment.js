// get post and display it to the page with comments
const renderCommments = _ => {
  document.getElementById('comments').innerHTML = ''
  document.getElementById('comment').innerHTML = ''
  axios.get(`/api/posts/${document.getElementById('comment').dataset.pid}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(({ data: post }) => {
      // display post on console
      console.log(post)
      axios.get(`/api/users/${post.uid}`,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((user) => {
          const content = document.createElement('div')
          content.innerHTML = `
          <div class="row">
            <div class="col s12">
              <div class="card grey darken-3">
                <div class="card-content white-text">
                  <span class="card-title">${post.title}</span>
                  <p>${post.text}</p>
                </div>
                <div class="card-action">
                  <p class="white-text" style="display: inline;">Created by ${user.data.username} at ${post.createdAt}</p>
                </div>
              </div>
            </div>
          </div>
          `
          document.getElementById('comment').append(content)
          post.comments.forEach(element => {
            axios.get(`/api/users/${post.uid}`,{
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
            })
              .then((cUser) => {
                const comment = document.createElement('div')
                comment.innerHTML = `
                <div class="row">
                  <div class="col s12">
                    <div class="card grey darken-3">
                      <div class="card-content white-text">
                        <p>${element.text}</p>
                      </div>
                      <div class="card-action">
                        <p class="white-text" style="display: inline;">Created by ${cUser.data.username} at ${element.createdAt}</p>
                      </div>
                    </div>
                  </div>
                </div>
                `
                document.getElementById('comments').append(comment)
              })
              .catch(err => console.log(err))
          })
        })
        .catch(err => console.log(err))
    })
}

renderCommments()

// comment listener
document.getElementById('comSubmit').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/comments', {
    text: document.getElementById('comtext').value,
    pid: document.getElementById('comment').dataset.pid
  }, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(_ => renderCommments())
    .catch(err => console.log(err))
})
