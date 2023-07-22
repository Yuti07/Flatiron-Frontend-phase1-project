document.addEventListener('DOMContentLoaded', function () {
    const coffeeList = document.getElementById('coffee-list');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // Generate 5 coffee objects with name, type, description, and image properties
    const coffeeObjects = [
        {
            name: 'Espresso',
            type: 'Concentrated Coffee',
            description: 'A concentrated coffee brewed by forcing hot water through finely-ground coffee beans. It forms the base for various coffee drinks.',
            image: 'path/to/espresso.jpg',
        },
        {
            name: 'Cappuccino',
            type: 'Espresso-based Coffee',
            description: 'Equal parts of espresso, steamed milk, and milk froth, creating a creamy and balanced coffee drink.',
            image: 'path/to/cappuccino.jpg',
        },
        {
            name: 'Latte',
            type: 'Espresso-based Coffee',
            description: 'Equal parts of espresso, steamed milk, and milk froth, creating a creamy and balanced coffee drink.',
            image: 'path/to/cappuccino.jpg',
        },
        {
            name: 'Mocha',
            type: 'Espresso-based Coffee',
            description: 'Equal parts of espresso, steamed milk, and milk froth, creating a creamy and balanced coffee drink.',
            image: 'path/to/cappuccino.jpg',
        },
        {
            name: 'Macchiato',
            type: 'Espresso-based Coffee',
            description: 'Equal parts of espresso, steamed milk, and milk froth, creating a creamy and balanced coffee drink.',
            image: 'path/to/cappuccino.jpg',
        },
        {
            name: 'Flate White',
            type: 'Espresso-based Coffee',
            description: 'Equal parts of espresso, steamed milk, and milk froth, creating a creamy and balanced coffee drink.',
            image: 'path/to/cappuccino.jpg',
        },
        {
            name: 'Ice Coffee',
            type: 'Espresso-based Coffee',
            description: 'Equal parts of espresso, steamed milk, and milk froth, creating a creamy and balanced coffee drink.',
            image: 'path/to/cappuccino.jpg',
        },
        {
            name: 'Turkish coffee',
            type: 'Espresso-based Coffee',
            description: 'Equal parts of espresso, steamed milk, and milk froth, creating a creamy and balanced coffee drink.',
            image: 'path/to/cappuccino.jpg',
        },
        {
            name: 'French Press coffee',
            type: 'Espresso-based Coffee',
            description: 'Equal parts of espresso, steamed milk, and milk froth, creating a creamy and balanced coffee drink.',
            image: 'path/to/cappuccino.jpg',
        },
        {
            name: 'Drip coffee',
            type: 'Espresso-based Coffee',
            description: 'Equal parts of espresso, steamed milk, and milk froth, creating a creamy and balanced coffee drink.',
            image: 'path/to/cappuccino.jpg',
        },
        {
            name: 'Affogato',
            type: 'Espresso-based Coffee',
            description: 'Equal parts of espresso, steamed milk, and milk froth, creating a creamy and balanced coffee drink.',
            image: 'path/to/cappuccino.jpg',
        },
        {
            name: 'Irish coffee',
            type: 'Espresso-based Coffee',
            description: 'Equal parts of espresso, steamed milk, and milk froth, creating a creamy and balanced coffee drink.',
            image: 'path/to/cappuccino.jpg',
        },

    ];

    // Function to update the search results based on the user's input
    function updateSearchResults(query) {
        const matchedItems = coffeeObjects.filter(coffee => coffee.name.toLowerCase().includes(query));

        searchResults.innerHTML = '';

        matchedItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
            listItem.addEventListener('click', () => {
                item.scrollIntoView({ behavior: 'smooth' });
                console.log(`Clicked on: ${item.name}`);
            });
            searchResults.appendChild(listItem);
        });

        searchResults.style.display = matchedItems.length > 0 ? 'block' : 'none';
    }

    // Event listener for the search input
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        updateSearchResults(query);
    });

    // Initial search results update (in case there is pre-filled input)
    updateSearchResults('');
});
