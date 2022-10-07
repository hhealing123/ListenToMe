const editPostHandler = async (event) => {
    event.preventDefault();
    const topic = document.querySelector('#editTopic').value.trim();
    const content = document.querySelector('#editContent').value.trim();
    const id = parseInt(document.querySelector('#editTopic').dataset.set);

    if (content && topic) {
        const response = await fetch(`/api/blog_post/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                topic,
                content
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // If successful, redirect the browser to the dashboard page.
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            // If failed, send an alert error.
            alert ('Failed to edit post');
        }
    }
}

document.querySelector('#edit-post-form').addEventListener('submit', editPostHandler);