const post_id = window.location.pathname.split('/').pop();

console.log(post_id)
const commentFormHandler = async (event) => {
    event.preventDefault();
    
    const contents = document.querySelector('#comment-contents').value.trim();
    
    if (contents) { // if contents is not empty
        const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ contents, post_id }),
        headers: {
            'Content-Type': 'application/json',
        },
        });
        console.log(response)
    
        if (response.ok) {
        document.location.replace(`/post/${post_id}`);
        } else {
        alert('Failed to create post');
        }
    }
    }

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);