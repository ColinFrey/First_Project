// JS scripts placed here
document.addEventListener('DOMContentLoaded', () => {
    // 1. FAKE COMMENTS HERE
    const myFakeComments = [
        { name: "AngelGrandpa_777", text: "Mr. Grand cheated my grandfather out of his birth rights. He stole his property, his career, and his wife, and still had the nerve to call him a brother. But his lemon bars are so good that when my grandfather tried them, he forgave all of Mr. Grand’s wrongdoings and they were the best of friends until my grandfather died from eating too many lemon bars. I wont ever forget you sweet Grandpa!", rating: 5},
        { name: "TheReal_BettyWhite", text: "Grands lemon bars, more like bland lemon bars.", rating: 2 },
        { name: "Deborah_Murphy", text: "I followed the recipe exactly, except I didn't have lemons, so I used yellow Gatorade and a splash of white vinegar. I also ran out of flour and since i'm on a diet I replaced sugar with protein powder. The crust turned out gooey and smelled like a chemical spill. My husband took one bite and told me we were getting a divorce. Thankfully I made him sign a prenup!", rating: 1},
        { name: "Harv4rdsFav_067", text: "I make this lemon bar from recipe and is very not good. I follow all step correct (mostly) and still come out wrong which mean recipe problem not me. The lemon is too much lemon. Is sour in bad way, not classy sour. Lemon bar suppose be soft flavor, not punch face. At Harvard baking school they tell us lemon must respect sugar. This lemon did not respect anything. Crust also falling apart. I pick up bar and it crumble like sand. This is not professional. Harvard never teach crumbly crust, they teach clean cut and proud bar. It lasted as long as my patience. Also sugar amount is confused! Too sweet but also sour?? This is science mistake. At Harvard we learn balance and math, so I know. I do not recommend this recipe unless change. People who say is good maybe never learn real baking or never go to Harvard like me. I will be telling my Facebook group (of 200 members) to never follow this recipe. Very disappointed.", rating: 0},
        { name: "MC_Zestyy", text: "I started spitting bars after eating these.", rating: 4},
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
        <div class="star-rating">${stars}</div>
    <strong>${item.name}</strong>
    <span class="text-content">${shortText}</span>
    ${isLong ? '<span class="read-more">Read More ▾</span>' : ''}
`;
        if (isLong) {
            let expanded = false;
            rectangle.addEventListener('click', () => {
                const span = rectangle.querySelector('.text-content');
                const readMoreLabel = rectangle.querySelector('.read-more');

                if (!expanded) {
                    span.innerText = item.text;
                    readMoreLabel.innerText = "Read Less ▴";
                    expanded = true;
                } else {
                    span.innerText = shortText;
                    readMoreLabel.innerText = "Read More ▾";
                    expanded = false;
                }
            });
        }

        listContainer.appendChild(rectangle);

        // 3. THE CLICK TO EXPAND/CLOSE LOGIC
        
    }); // This bracket closes the forEach loop
});