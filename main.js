document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-box');
  const searchResults = document.getElementById('search-results');
  let coffeeObjects = []; // Array to store coffee data

  // Using Fetch coffee data from JSON file
  async function fetchCoffeeData() {
    try {
      const response = await fetch('coffeeData.json');
      coffeeObjects = await response.json();
    } catch (error) {
      console.error('Error fetching coffee data:', error);
    }
  }

  // Function to update the search results based on the user's input
  function updateSearchResults(query) {
    const matchedItems = coffeeObjects.filter(
      (coffee) => coffee.name.toLowerCase().includes(query.toLowerCase())
    );

    // Clear the existing search results
    while (searchResults.firstChild) {
      searchResults.removeChild(searchResults.firstChild);
    }

    matchedItems.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item.name;
      listItem.addEventListener('click', () => {
        scrollToCoffeeType(item.name);
        displayCoffeeContent(item);
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
      while (searchResults.firstChild) {
        searchResults.removeChild(searchResults.firstChild);
      }
      searchResults.style.display = 'none';
    }
  });

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
  fetchCoffeeData().then(() => {
    // Adding Event listener to handle the Enter key press in the search box
    searchInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();
        const coffeeSections = document.querySelectorAll('main > section');
        for (const section of coffeeSections) {
          const sectionTitle = section.querySelector('h3').textContent.toLowerCase();
          if (sectionTitle.includes(searchTerm)) {
            section.scrollIntoView({ behavior: 'smooth' });
            break;
          }
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
