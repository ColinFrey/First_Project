// JS scripts placed here
document.addEventListener('DOMContentLoaded', () => {
    // 1. FAKE COMMENTS HERE
    const myFakeComments = [
        { name: "User One", text: "Mr. Grand cheated my grandfather out of his birth rights. He stole his property, his career, and his wife, and still had the nerve to call him a brother. But his lemon bars are so good that when my grandfather tried them, he forgave all of Mr. Grand’s wrongdoings and they were the best of friends until my grandfather died from eating too many lemon bars. I wont ever forget you sweet Grandpa", rating: 5},
        { name: "User Two", text: "Grands lemon bars, more like bland lemon bars.", rating: 2 },
        { name: "User Three", text: "I make this lemon bar from recipe and is very not good. I follow all step correct (mostly) and still come out wrong which mean recipe problem not me. The lemon is too much lemon. Is sour in bad way, not classy sour. Lemon bar suppose be soft flavor, not punch face. At Harvard baking school they tell us lemon must respect sugar. This lemon did not respect anything. Crust also falling apart. I pick up bar and it crumble like sand. This is not professional. Harvard never teach crumbly crust, they teach clean cut and proud bar. It lasted as long as my patience. Also sugar amount is confused! Too sweet but also sour?? This is science mistake. At Harvard we learn balance and math, so I know. I do not recommend this recipe unless change. People who say is good maybe never learn real baking or never go to Harvard like me. I will be telling my Facebook group (of 200 members) to never follow this recipe. Very disappointed.", rating: 2},
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

        const stars = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);


        const isLong = item.text.length > CHAR_LIMIT;
        const shortText = isLong ? item.text.substring(0, CHAR_LIMIT) + "..." : item.text;

        rectangle.innerHTML = `
        <div class="start-rating">${stars}</div>
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