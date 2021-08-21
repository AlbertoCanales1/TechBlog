const newPostHandler = async (event) => {
    event.preventDefault();
}

const title = document.querySelector('#blog-title').value.trim();
const content = document.querySelector('#blog-content').value.trim();

if (title && content){
    const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({title, content}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Cannot create blog');
    }
};

const delButtonHandler = async (event) => {
    if(event.target.hasAttribute('data-id')){
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}`,{
            method: 'DELETE',
        });

        if(response.ok) {
            document.location.replace('/profile');
        }else {
            alert('Cannot erase blog');
        }
    }
};

document
.querySelector('.new-blog-post')
.addEventListener('submit', newPostHandler);

document
.querySelector('.blog-list')
.addEventListener('click', delButtonHandler);