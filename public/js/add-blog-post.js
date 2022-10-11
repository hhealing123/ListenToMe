
//Creates a blog post 
const blogForm = async (event) => {
    event.preventDefault();

    const topic = document.querySelector('#topicPost').value.trim();
    const content = document.querySelector('#contentPost').value.trim();

    if (topic && content) {
        const response = await fetch('/api/blog_post', {
            method: 'POST',
            body: JSON.stringify({ topic, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.postForm').addEventListener('submit', blogForm);