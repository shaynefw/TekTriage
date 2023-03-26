document.addEventListener('DOMContentLoaded', () => {
    const editPostForm = document.querySelector('.edit-post-form');
  
    editPostForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const postId = document.location.pathname.split('/')[3];
      const title = document.getElementById('post-title').value.trim();
      const contents = document.getElementById('post-contents').value.trim();
  
      if (title && contents) {
        const response = await fetch(`/api/posts/${postId}`, {
          method: 'PUT',
          body: JSON.stringify({ title, contents }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to edit post');
        }
      }
    });
  });
  