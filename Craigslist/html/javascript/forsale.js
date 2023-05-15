const homes = [
  {
  "Name": "Chair 1",
  "Price": 99.99,
  "Address": "New York Street 1",
  "Description": "Looking for participants for a focus group",
  "Contact": "contact@forsale1.com",
  "Type": "Miscellaneous"
  },
  {
  "Name": "Chair 2",
  "Price": 15.99,
  "Address": "San Francisco Street 1",
  "Description": "Looking for participants for a focus group",
  "Contact": "contact@forsale2.com",
  "Type": "Miscellaneous"
  },
  {
  "Name": "Chair 3",
  "Price": 49.99,
  "Address": "Los Angeles Street 1",
  "Description": "Looking for participants for a focus group",
  "Contact": "contact@forsale3.com",
  "Type": "Vehicles & Automotive Parts"
  },
  {
  "Name": "Chair 4",
  "Price": 55,
  "Address": "Chicago Street 1",
  "Description": "Looking for participants for a focus group",
  "Contact": "contact@forsale4.com",
  "Type": "Vehicles & Automotive Parts"
  },
  {
  "Name": "Chair 5",
  "Price": 63,
  "Address": "Boston Street 1",
  "Description": "Looking for participants for a focus group",
  "Contact": "contact@forsale5.com",
  "Type": "Electronics & Technology"
  },
  {
  "Name": "Chair 6",
  "Price": 18.4,
  "Address": "Seattle Street 1",
  "Description": "Looking for participants for a focus group",
  "Contact": "contact@forsale6.com",
  "Type": "Electronics & Technology"
  },
  {
  "Name": "Chair 7",
  "Price": 15,
  "Address": "Miami Street 1",
  "Description": "Looking for participants for a focus group",
  "Contact": "contact@forsale7.com",
  "Type": "Home & Garden"
  },
  {
  "Name": "Chair 8",
  "Price": 20,
  "Address": "Denver Street 1",
  "Description": "Looking for participants for a focus group",
  "Contact": "contact@forsale8.com",
  "Type": "Home & Garden"
  },
  {
  "Name": "Chair 9",
  "Price": 22,
  "Address": "Dallas Street 1",
  "Description": "Looking for participants for a focus group",
  "Contact": "contact@forsale9.com",
  "Type": "Fashion & Accessories"
  },
  {
  "Name": "Chair 10",
  "Price": 100,
  "Address": "Philadelphia Street 1",
  "Description": "Looking for participants for a focus group",
  "Contact": "contact@forsale10.com",
  "Type": "Fashion & Accessories"
  },
  {
  "Name": "Chair 11",
  "Price": 70,
  "Address": "Portland Street 1",
  "Description": "Looking for participants for a focus group",
  "Contact": "contact@forsale11.com",
  "Type": "Sports & Outdoors"
  },
  {
    "Name": "Chair 12",
    "Price": 59.99,
    "Address": "Austin Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@forsale12.com",
    "Type": "Sports & Outdoors"
  },
  {
    "Name": "Chair 13",
    "Price": 42.2,
    "Address": "San Diego Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@forsale13.com",
    "Type": "Toys & Collectibles"
  },
  {
      "Name": "Chair 14",
      "Price": 12.5,
      "Address": "Atlanta Street 1",
      "Description": "Looking for participants for a focus group",
      "Contact": "contact@forsale14.com",
      "Type": "Toys & Collectibles"
    }
  ];
  
  
  function createHomeElement(home) {
    // create the anchor element
    let a = document.createElement("a");
    a.href = "for-sale-ad.html?id=" + encodeURIComponent(home.Name);
  
    // create the div element with class 'home'
    let div = document.createElement("div");
    div.id = "homes";
  
    // create the image element with class 'jobimage'
    let img = document.createElement("img");
    img.src = "../images/jobs/chair.jpg";
    img.alt = "";
    img.id = "jobimage"; // Change this line
    div.appendChild(img);
  
    // create the p element with the address
    let p2 = document.createElement("p");
    p2.id = "address";
    p2.innerHTML = "Price: " + home.Price + "$";
    div.appendChild(p2);

    // create the p element with class 'jobname'
    let p1 = document.createElement("p");
    p1.id = "jobname"; // Change this line
    p1.innerHTML = home.Name;
    div.appendChild(p1);
  
    // create the image element with class 'like'
    let like = document.createElement("img");
    like.src = "../images/heart.png";
    like.id = "like"; // Change this line
    div.appendChild(like);
  
    // append the div element to the anchor element
    a.appendChild(div);
  
    return a;
  }
  
  
  function displayHomes(homes) {
    let categories = document.querySelector(".categories");
    categories.innerHTML = "";
  
    homes.forEach(home => {
      let homeElement = createHomeElement(home);
      categories.appendChild(homeElement);
    });
  
    const likeImages = document.querySelectorAll('#like');
  
    likeImages.forEach((likeImage) => {
      likeImage.onclick = function() {
          return false;
      };
    });
  
    likeImages.forEach(function(likeImage) {
      likeImage.addEventListener("click", function() {
        if (likeImage.classList.contains("animate-like")) {
          likeImage.classList.remove("animate-like");
        } else {
          likeImage.classList.add("animate-like");
        }
      });
    });
  }
  
const subDropdown = document.querySelector("#sub");
const subToType = {
  "all": "View All",
  "vehicles": "Vehicles & Automotive Parts",
  "electronics": "Electronics & Technology",
  "home-garden": "Home & Garden",
  "fashion": "Fashion & Accessories",
  "sports-outdoors": "Sports & Outdoors",
  "toys-collectibles": "Toys & Collectibles",
  "miscellaneous": "Miscellaneous"
};


subDropdown.addEventListener("change", function() {
  const selectedValue = subDropdown.value;
  let filteredHomes = [];

  if (selectedValue in subToType) {
    if (selectedValue === "all") {
      filteredHomes = homes;
    } else {
      filteredHomes = homes.filter(home => home.Type === subToType[selectedValue]);
    }
  } else {
    filteredHomes = homes;
  }

  displayHomes(filteredHomes);
});
  
displayHomes(homes);
  