// JS scripts placed here
document.addEventListener('DOMContentLoaded', () => {
    // 1. FAKE COMMENTS HERE
    const myFakeComments = [
        { name: "User One", text: "This is a comment that is really long becasue I am trying to test the opena and close text box for overly large comments. This is me still tying away and testing this feature. I hope it works. Lemon bars are amazing!!!" },
        { name: "User Two", text: "This is a second comment that is really long becasue I am trying to test the opena and close text box for overly large comments. This is me still tying away and testing this feature. I hope it works. Lemon bars are amazing!!!" },
        { name: "User Three", text: "This is just a short comment test." },
        { name: "User Four", text: "This is another comment that is really long becasue I am trying to test the opena and close text box for overly large comments. This is me still tying away and testing this feature. I hope it works. Lemon bars are amazing!!!" },
        { name: "User Five", text: "This is still a comment that is really long becasue I am trying to test the opena and close text box for overly large comments. This is me still tying away and testing this feature. I hope it works. Lemon bars are amazing!!!" }
    ];

    const CHAR_LIMIT = 60; // The character limit on comments
    const listContainer = document.getElementById('comment-list');

    // Check if the container exists before running
    if (!listContainer) {
        console.error("The ID 'comment-list' was not found in your HTML!");
        return;
    }
    listContainer.innerHTML='';

    // 2. THE LOGIC TO CREATE THE BOXES
    myFakeComments.forEach(item => {
        const rectangle = document.createElement('div');
        rectangle.className = 'comment-item';

        const isLong = item.text.length > CHAR_LIMIT;
        const shortText = isLong ? item.text.substring(0, CHAR_LIMIT) + "..." : item.text;

        rectangle.innerHTML = `
            <strong>${item.name}</strong>
            <span class="text-content">${shortText}</span>
        `;

        // 3. THE CLICK TO EXPAND/CLOSE LOGIC
        if (isLong) {
            let expanded = false;
            rectangle.addEventListener('click', () => {
                const span = rectangle.querySelector('.text-content');
                if (!expanded) {
                    span.innerText = item.text; // Show full text
                    expanded = true;
                } else {
                    span.innerText = shortText; // Show cut-off text
                    expanded = false;
                }
            });
        }

        listContainer.appendChild(rectangle);
    });
});