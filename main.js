// JavaScript code for search functionality
document.addEventListener('DOMContentLoaded', function () {
    const coffeeTypes = document.querySelectorAll('ol li');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const matchedItems = [];

        coffeeTypes.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(query)) {
                matchedItems.push(item);
            }
        });

        updateSearchResults(matchedItems);
    });

    function updateSearchResults(matchedItems) {
        searchResults.innerHTML = '';

        matchedItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.textContent;
            listItem.addEventListener('click', () => {
                // Add your code here to handle the click on a search result item.
                // For example, you can scroll to the clicked item or navigate to it.
                item.scrollIntoView({ behavior: 'smooth' });
            });
            searchResults.appendChild(listItem);
        });

        searchResults.style.display = matchedItems.length > 0 ? 'block' : 'none';
    }
});
