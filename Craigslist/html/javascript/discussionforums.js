const homes = [
    {
      "Name": "Discussion 1",
      "Description": "What is your favorite pet?",
      "Type": "Arts & Culture"
    },
    {
      "Name": "Discussion 2",
      "Description": "What is your favorite pet?",
      "Type": "Arts & Culture"
    },
    {
      "Name": "Discussion 3",
      "Description": "What is your favorite pet?",
      "Type": "Automobiles"
    },
    {
      "Name": "Discussion 4",
      "Description": "What is your favorite pet?",
      "Type": "Automobiles"
    },
    {
      "Name": "Discussion 5",
      "Description": "What is your favorite pet?",
      "Type": "Beauty & Personal Care"
    },
    {
      "Name": "Discussion 6",
      "Description": "What is your favorite pet?",
      "Type": "Beauty & Personal Care"
    },
    {
      "Name": "Discussion 7",
      "Description": "What is your favorite pet?",
      "Type": "Food & Cooking"
    },
    {
      "Name": "Discussion 8",
      "Description": "What is your favorite pet?",
      "Type": "Food & Cooking"
    },
    {
      "Name": "Discussion 9",
      "Description": "What is your favorite pet?",
      "Type": "Gaming & Technology"
    },
    {
      "Name": "Discussion 10",
      "Description": "What is your favorite pet?",
      "Type": "Gaming & Technology"
    },
    {
      "Name": "Discussion 11",
      "Description": "What is your favorite pet?",
      "Type": "Health & Wellness"
    },
    {
      "Name": "Discussion 12",
      "Description": "What is your favorite pet?",
      "Type": "Health & Wellness"
    },
    {
      "Name": "Discussion 13",
      "Description": "What is your favorite pet?",
      "Type": "Home & Garden"
    },
    {
      "Name": "Discussion 14",
      "Description": "What is your favorite pet?",
      "Type": "Home & Garden"
    },
    {
      "Name": "Discussion 15",
      "Description": "What is your favorite pet?",
      "Type": "Pets & Animals"
    },
    {
      "Name": "Discussion 16",
      "Description": "What is your favorite pet?",
      "Type": "Pets & Animals"
    }
];
  
  
  function createHomeElement(home) {
    // create the anchor element
    let a = document.createElement("a");
    a.href = "discussion-forums-ad.html?id=" + encodeURIComponent(home.Name);
  
    // create the div element with class 'home'
    let div = document.createElement("div");
    div.id = "homes";
  
    // create the image element with class 'jobimage'
    let img = document.createElement("img");
    img.src = "../images/jobs/discussion-forums.jpg";
    img.alt = "";
    img.id = "jobimage"; // Change this line
    div.appendChild(img);
  
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
  "arts": "Arts & Culture",
  "autos": "Automobiles",
  "beauty": "Beauty & Personal Care",
  "food": "Food & Cooking",
  "gaming": "Gaming & Technology",
  "health": "Health & Wellness",
  "home": "Home & Garden",
  "pets": "Pets & Animals"
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
  