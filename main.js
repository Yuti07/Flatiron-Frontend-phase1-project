
document.addEventListener('DOMContentLoaded', function () {
  //elements
  const searchInput = document.getElementById('search-box');
  const searchResults = document.getElementById('search-results');
  let coffeeObjects = []; // Array to store coffee data

  // Using Fetch coffee data from JSON file
   function fetchCoffeeData() {
    fetch("http://localhost:3000/coffee")
    .then(response => response.json())
    .then(data => { coffeeObjects = data;
      generateCoffeeImages();
  });
  }
   // Function to generate coffee images dynamically
   function generateCoffeeImages() {
    const coffeeImageContainer = document.getElementById('four-coffees-container');

    coffeeObjects.forEach((coffee, index) => {
        const img = document.createElement('img');
        img.className = 'equal-size-image';
        img.src = coffee.image;
        img.alt = coffee.name;
        img.addEventListener('click', () => {
            scrollToCoffeeType(coffee.name);
            displayCoffeeContent(coffee);
        });
        coffeeImageContainer.appendChild(img);
    });
}
  fetchCoffeeData();
  // Function to update the search results based on the user's input
  function updateSearchResults(query) {
    const matchedItems = coffeeObjects.filter(
      (coffee) => coffee.name.toLowerCase().includes(query.toLowerCase())
    );
    clearSearchResults();

    matchedItems.forEach((item) => {
      const listItem = createListItem(item.name);
      listItem.addEventListener('click', () => handleListItemClick(item.name));
      searchResults.appendChild(listItem);
      });

    searchResults.style.display = matchedItems.length > 0 ? 'block' : 'none';
  }
   // Clear search results
  function clearSearchResults() {
    while (searchResults.firstChild) {
      searchResults.removeChild(searchResults.firstChild);
    }
  }
  // Create list item
  function createListItem(text) {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    return listItem;
  }
  // Handle list item click event
  function handleListItemClick(coffeeName) {
    scrollToCoffeeType(coffeeName);
    displayCoffeeContent(findCoffeeByName(coffeeName));
  }
 // Find coffee by name
 function findCoffeeByName(name) {
  return coffeeObjects.find(coffee => coffee.name === name);
}
  function scrollToCoffeeType(type) {
    const coffeeTypeElements = document.querySelectorAll('main > section');
    for (let i = 0; i < coffeeTypeElements.length; i++) {
      const coffeeType = coffeeTypeElements[i].getAttribute('id');
      if (coffeeType === type) {
        coffeeTypeElements[i].scrollIntoView({ behavior: 'smooth' });
        break;
      }
    }
  }

  function displayCoffeeContent(coffee) {
    const coffeeSection = document.getElementById(coffee.name);
    if (coffeeSection) {
      while (coffeeSection.firstChild) {
        coffeeSection.removeChild(coffeeSection.firstChild);
      }

      const h3 = document.createElement('h3');
      h3.textContent = coffee.name;

      const p = document.createElement('p');
      p.textContent = coffee.description;

      const img = document.createElement('img');
      img.src = coffee.image;
      img.alt = coffee.name;
      img.style.width = '200px';
      img.style.height = '150px';

      coffeeSection.appendChild(h3);
      coffeeSection.appendChild(p);
      coffeeSection.appendChild(img);
    }
  }

  // Loading  coffee data and initialize the search input
  fetchCoffeeData().then(data => {
    coffeeObjects = data;
    // Adding Event listener to handle the Enter key press in the search box
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      updateSearchResults(query);

      // Clear the search results and hide them if the search box is empty
      if (query === '') {
        clearSearchResults();
        searchResults.style.display = 'none';
      }
    });
    // Event listener for the Enter key press in the search box
    searchInput.addEventListener('keypress', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();
        const coffeeSection = document.getElementById(searchTerm);
        if (coffeeSection) {
          coffeeSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    //Adding Event listener for the coffee images
    const coffeeImages = document.querySelectorAll('.equal-size-image');
    coffeeImages.forEach((image, index) => {
      image.addEventListener('click', () => {
        const coffeeType = coffeeObjects[index].name;
        scrollToCoffeeType(coffeeType);
        displayCoffeeContent(coffeeObjects[index]);
      });
    });
  });
});
