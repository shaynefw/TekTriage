const newpostFormHandler = async (event) => {
    event.preventDefault();
    
    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-contents').value.trim();
    
    if (title && contents) { // if title and content are not empty
        const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, contents }),
        headers: {
            'Content-Type': 'application/json',
        },
        });
        console.log(response)
    
        if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert('Failed to create post');
        }
    }
    }

document
    .querySelector('.newpost-form')
    .addEventListener('submit', newpostFormHandler);