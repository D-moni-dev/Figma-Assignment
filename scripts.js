//wishloist Data

const wishlist = [
    {
        name: "Gucci Duffle Bag",
        Price: 960,
        OldPrice: 1160,
        Image: "images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png"
    },
      {
        name: "RGB Liquid CPU Cooler",
        Price: 1960,
         OldPrice: 3500,
        Image: "images/speaker.png"
    },
      {
        name: "GP11 Shooter USB Gamepad",
        Price: 550,
         OldPrice: 700,
        Image: "images/GP11_PRD3 1.png"
    },
      {
        name: "Quilted Satin Jacket",
        Price: 750,
         OldPrice: 800,
        Image: "images/jack.png"
    },

]


// Products Data
const products = [
  {
    name: "ASUS FHD Gaming Laptop",
    Price: 960,
    OldPrice: 1160,
    Image: "images/laptop.png"
  },
  {
    name: "IPS LCD Gaming Monitor",
    Price: 1160,
     OldPrice: 1500,
    Image: "images/tv.png"
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    Price: 560,
     OldPrice: 850,
    Image: "images/game pad.png"
  },
  {
    name: "AK-900 Wired Keyboard",
    Price: 200,
     OldPrice: 300,
    Image: "images/keyboard.png"
  }
];

//for the search bar
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("search-results");

const allItems = [...wishlist, ...products];

searchInput.addEventListener("input", function () {
  const searchValue = this.value.toLowerCase();

// If empty → clear search results
  if (searchValue === "") {
    searchResults.innerHTML = "";
    return;
  }

  const filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(searchValue)
  );

  // Clear previous results
  searchResults.innerHTML = "";

  if (filteredItems.length === 0) {
    searchResults.innerHTML = "<p>No results found</p>";
  } else {
    displayItems(filteredItems, "search-results");
  }
});


// Function to display cards
function displayItems(data, containerId) {
  const container = document.getElementById(containerId);

  data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.Image}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p class="price">$${item.Price}</p>
      ${item.OldPrice ? `<p class="old-price">$${item.OldPrice}</p>` : ""}
      <button>Add To Cart</button>
    `;

    container.appendChild(card);
  });
}

// Call function
displayItems(wishlist, "wishlist-container");
displayItems(products, "products-container");