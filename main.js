document.addEventListener('DOMContentLoaded', function () {
    const coffeeList = document.getElementById('coffee-list');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const matchedItems = [];

        const coffeeItems = coffeeList.getElementsByTagName('li');
        for (let i = 0; i < coffeeItems.length; i++) {
            const itemText = coffeeItems[i].textContent.toLowerCase();
            if (itemText.includes(query)) {
                matchedItems.push(coffeeItems[i]);
            }
        }

        updateSearchResults(matchedItems);
    });

    function updateSearchResults(matchedItems) {
        searchResults.innerHTML = '';

        matchedItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.textContent;
            listItem.addEventListener('click', () => {
                item.scrollIntoView({ behavior: 'smooth' });
                console.log(`Clicked on: ${item.textContent}`);
            });
            searchResults.appendChild(listItem);
        });

        searchResults.style.display = matchedItems.length > 0 ? 'block' : 'none';
    }
});
