// render data onto editor
const renderEdit = _ => {
  document.getElementById('editPost').innerHTML = ''
  axios.get(`/api/posts/${document.getElementById('editPost').dataset.pid}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(({ data: post }) => {
      console.log(post)
      const editor = document.createElement('div')
      editor.innerHTML = `
        <span class="card-title">Edit Post</span>
        <label for="editTitle">Title</label>
        <input type="text" class="white-text" name="title" id="editTitle" value="${post.title}">
        <label for="editText">Text (required)</label>
        <textarea id="editText" class="materialize-textarea white-text" placeholder="${post.text} (required)"></textarea>
      `
      document.getElementById('editPost').append(editor)
    })
}

// listener for submit btn
document.getElementById('submitEdit').addEventListener('click', event => {
  event.preventDefault()
  console.log(document.getElementById('editPost').dataset.pid)
  console.log('button works!')
  console.log(document.getElementById('editText').value)
  axios.put(`/api/posts/${document.getElementById('editPost').dataset.pid}`, {
    title: document.getElementById('editTitle').value,
    text: document.getElementById('editText').value
  }, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(_ => {
      renderEdit()
      window.location = '/dashboard'
    })
    .catch(err => console.log(err))
})

// render the edit form
renderEdit()
console.log(document.getElementById('editPost').dataset.pid)
