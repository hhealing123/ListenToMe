//Deletes blog post

const deletePost = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/blog_post/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('failed to delete blog post');
        }
    }
};

document.querySelector('.deleteBtn').addEventListener('click', deletePost)