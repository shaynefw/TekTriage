document.addEventListener('DOMContentLoaded', () => {
    const postSelect = document.getElementById('post-select');
    const deletePostBtn = document.getElementById('delete-post-btn');
    const editPostBtn = document.getElementById('edit-post-btn');
    const commentSelect = document.getElementById('comment-select');
    const deleteCommentBtn = document.getElementById('delete-comment-btn');
  
    postSelect.addEventListener('change', function () {
      deletePostBtn.classList.remove('d-none');
      editPostBtn.classList.remove('d-none');
      editPostBtn.href = `/dashboard/edit/${postSelect.value}`;
    });
  
    commentSelect.addEventListener('change', function () {
      deleteCommentBtn.classList.remove('d-none');
    });
  
    deletePostBtn.addEventListener('click', async function () {
        const postId = postSelect.value;
        try {
          const response = await fetch(`/api/posts/${postId}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            window.location.reload();
          } else {
            alert('Failed to delete post');
          }
        } catch (error) {
          console.error(error);
          alert('Error deleting post');
        }
      });
  
    deleteCommentBtn.addEventListener('click', function () {
      // Add the code to handle the deletion of the comment
      const commentId = commentSelect.value;
      fetch(`/api/comments/${commentId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            window.location.reload();
          } else {
            alert('Failed to delete comment');
          }
        }
        )
    });
  });
  