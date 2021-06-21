const renderPost = _ => {
  axios.get('api/posts/all', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(({ data: posts }) => {
      console.log(posts)
      document.getElementById('homey').innerHTML = ''
      posts.forEach(element => {
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
                <a href="/posts/${element.id}">Comment</a>
                <p class="white-text" style="display: inline;">Created by ${element.uid} at ${element.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
        `
        document.getElementById('homey').append(post)
      })
    })
    .catch((err) => {
      console.log(err)
      window.location = '/login'
    })
}

renderPost()
