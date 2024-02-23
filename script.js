document.addEventListener("DOMContentLoaded", function() {
    const holder = document.getElementById('holder');
    const idInput = document.getElementById('id');
    const contentInput = document.getElementById('content');

    contentInput.addEventListener('input', function() {
        const id = idInput.value.trim();
        const content = contentInput.value.trim();

        if (id === '') {
            console.error('ID cannot be empty');
            return;
        }

        if (content === '') {
            console.error('Content cannot be empty');
            return;
        }

        const existingParagraph = document.getElementById(id);
        if (existingParagraph) {
            existingParagraph.textContent = content;
        } else {
            const newParagraph = document.createElement('p');
            newParagraph.id = id;
            newParagraph.textContent = content;
            holder.appendChild(newParagraph);
        }
    });
});