const commentForm = async (event) => {
    // Prevent event to do default actions.
    event.preventDefault();

    const topic_id = parseInt(document.querySelector('#newComment').dataset.id);
    const response = document.querySelector('#newComment').value.trim();
    
    if (response) {
        const answer = await fetch('/api/commentRoute', {
            method: 'POST',
            body: JSON.stringify({ response, topic_id, }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (answer.ok) {
            document.location.reload();
        } else {
            alert(answer.statusText)
        }
    }
};

document.querySelector('#commentForm').addEventListener('submit', commentForm);