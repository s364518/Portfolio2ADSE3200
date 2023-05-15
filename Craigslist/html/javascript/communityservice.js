const homes = [
  {
    "Name": "Community Service 1",
    "Price": 99.99,
    "Address": "New York Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice1.com",
    "Type": "Activities & Entertainment"
  },
  {
    "Name": "Community Service 2",
    "Price": 15.99,
    "Address": "San Francisco Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice2.com",
    "Type": "Activities & Entertainment"
  },
  {
    "Name": "Community Service 3",
    "Price": 49.99,
    "Address": "Los Angeles Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice3.com",
    "Type": "Art & Creativity"
  },
  {
    "Name": "Community Service 4",
    "Price": 55,
    "Address": "Chicago Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice4.com",
    "Type": "Art & Creativity"
  },
  {
    "Name": "Community Service 5",
    "Price": 63,
    "Address": "Boston Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice5.com",
    "Type": "Childcare & Babysitting"
  },
  {
    "Name": "Community Service 6",
    "Price": 18.4,
    "Address": "Seattle Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice6.com",
    "Type": "Childcare & Babysitting"
  },
  {
    "Name": "Community Service 7",
    "Price": 15,
    "Address": "Miami Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice7.com",
    "Type": "Education & Learning"
  },
  {
    "Name": "Community Service 8",
    "Price": 20,
    "Address": "Denver Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice8.com",
    "Type": "Education & Learning"
  },
  {
    "Name": "Community Service 9",
    "Price": 22,
    "Address": "Dallas Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice9.com",
    "Type": "Events & Gatherings"
  },
  {
    "Name": "Community Service 10",
    "Price": 100,
    "Address": "Philadelphia Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice10.com",
    "Type": "Events & Gatherings"
  },
  {
    "Name": "Community Service 11",
    "Price": 70,
    "Address": "Portland Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice11.com",
    "Type": "Community & Local News"
  },
  {
    "Name": "Community Service 12",
    "Price": 59.99,
    "Address": "Austin Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice12.com",
    "Type": "Community & Local News"
  },
  {
    "Name": "Community Service 13",
    "Price": 42.2,
    "Address": "San Diego Street 1",
    "Description": "Looking for a community service",
    "Contact": "contact@communityservice13.com",
    "Type": "Miscellaneous"
  },
  {
      "Name": "Community Service 14",
      "Price": 12.5,
      "Address": "Atlanta Street 1",
      "Description": "Looking for a community service",
      "Contact": "contact@communityservice14.com",
      "Type": "Miscellaneous"
    }
  ];
  
  
  function createHomeElement(home) {
    // create the anchor element
    let a = document.createElement("a");
    a.href = "community-service-ad.html?id=" + encodeURIComponent(home.Name);
  
    // create the div element with class 'home'
    let div = document.createElement("div");
    div.id = "homes";
  
    // create the image element with class 'jobimage'
    let img = document.createElement("img");
    img.src = "../images/jobs/community-service.jpg";
    img.alt = "";
    img.id = "jobimage"; // Change this line
    div.appendChild(img);
  
    // create the p element with the address
    let p2 = document.createElement("p");
    p2.id = "address";
    p2.innerHTML = "Location: " + home.Address;
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
  "activities": "Activities & Entertainment",
  "art": "Art & Creativity",
  "childcare": "Childcare & Babysitting",
  "education": "Education & Learning",
  "events": "Events & Gatherings",
  "community": "Community & Local News",
  "misc": "Miscellaneous"
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
  
  