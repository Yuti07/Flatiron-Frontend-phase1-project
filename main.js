document.addEventListener('DOMContentLoaded', function () {
    const coffeeList = document.getElementById('coffee-list');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // coffee objects with name, type, description, and image properties
    const coffeeObjects = [
        {
            name: 'Espresso',
            type: 'Concentrated Coffee',
            description: 'A concentrated coffee brewed by forcing hot water through finely-ground coffee beans. It forms the base for various coffee drinks.',
            image: 'Images/expresso.jpg',
        },
        {
            name: 'Americano',
            type: 'Simple Coffee',
            description: 'A simple coffee made by diluting a shot of espresso with hot water, resulting in a coffee similar to drip coffee but with a richer flavor.',
            image: 'Images/Americano-Coffee-thmbnail.jpg',
        },

        {
            name: 'Cappuccino',
            type: 'Espresso-based Coffee',
            description: 'Equal parts of espresso, steamed milk, and milk froth, creating a creamy and balanced coffee drink.',
            image: 'Images/cappuccino.jpg',
        },
        {
            name: 'Latte',
            type: 'Espresso-based Coffee',
            description: 'A coffee drink made with espresso and steamed milk, topped with a thin layer of milk froth.,            ',
            image: 'Images/latte.jpg',
        },
        {
            name: 'Mocha',
            type: 'Espresso-based Coffee',
            description: 'A delightful blend of espresso, steamed milk, chocolate syrup, and whipped cream.',
            image: 'Images/Mocha.jpg',
        },
        {
            name: 'Macchiato',
            type: 'Espresso-based Coffee',
            description: 'An espresso with a small amount of milk or milk froth, giving it a bolder coffee flavor.',
            image: 'Images/Macchiato.jpg',
        },
        {
            name: 'Flate White',
            type: 'Espresso-based Coffee',
            description: 'Espresso with velvety microfoam milk, creating a smooth and strong coffee taste.',
            image: 'Images/flat-white-coffee.webp',
        },
        {
            name: 'Ice Coffee',
            type: 'Espresso-based Coffee',
            description: 'Chilled coffee served over ice, often sweetened and mixed with milk or cream',
            image: 'Images/ice coffee.jpg',
        },
        {
            name: 'Turkish coffee',
            type: 'Espresso-based Coffee',
            description: 'Finely ground coffee boiled with water and sugar, served unfiltered in a small cup with grounds settled at the bottom',
            image: 'Images/turkish coffee.jpg',
        },
        {
            name: 'French Press coffee',
            type: 'Espresso-based Coffee',
            description: 'Coarse coffee grounds steeped in hot water, and then pressed to separate the liquid from the grounds.',
            image: 'Images/french press coffee.jpg',
        },
        {
            name: 'Drip coffee',
            type: 'Espresso-based Coffee',
            description: 'Coffee brewed by slowly dripping water through ground coffee beans in a filter.',
            image: 'Images/drip coffee.jpg',
        },
        {
            name: 'Affogato',
            type: 'Espresso-based Coffee',
            description: 'A dessert consisting of a scoop of vanilla ice cream or gelato drowned in a shot of hot espresso.',
            image: 'Images/Affogato coffee.jpg',
        },
        {
            name: 'Irish coffee',
            type: 'Espresso-based Coffee',
            description: 'A cocktail made with hot coffee, Irish whiskey, sugar, and topped with whipped cream',
            image: 'Images/irish-coffee.jpg'
}];
 // To Save coffeeObjects array to JSON file
 function saveToJSONFile(data) {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'coffees.json';
    a.click();
    URL.revokeObjectURL(url);
  }

    // Function to update the search results based on the user's input
    function updateSearchResults(query) {
        const matchedItems = coffeeObjects.filter(coffee => coffee.name.toLowerCase().includes(query.toLowerCase()));

        searchResults.innerHTML = '';

        matchedItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
            listItem.addEventListener('click', () => {
                scrollToCoffeeType(item.name);
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

    // Clear the search results and hide them if the search box is empty
    if (query === '') {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
    }
});
    function scrollToCoffeeType(type) {
        const coffeeTypeElements = coffeeList.getElementsByTagName('li');
        for (let i = 0; i < coffeeTypeElements.length; i++) {
            if (coffeeTypeElements[i].textContent.toLowerCase().includes(type.toLowerCase())) {
                coffeeTypeElements[i].scrollIntoView({ behavior: 'smooth' });
                break;
            }
        }
    }
    // Initial search results update (in case there is pre-filled input)
    updateSearchResults('');
});
  // Save the coffeeObjects array to coffees.json
  document.getElementById('save-to-json-btn').addEventListener('click', function () {
    saveToJSONFile(coffeeObjects);
  });
