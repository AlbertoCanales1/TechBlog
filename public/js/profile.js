const newPostHandler = async (event) => {
    event.preventDefault();


const blog_title = document.querySelector('#blog-title').value.trim();
const contents = document.querySelector('#blog-contents').value.trim();

if (blog_title && contents){
    console.log("err")
    const response =  fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({blog_title, contents}),
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
}


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