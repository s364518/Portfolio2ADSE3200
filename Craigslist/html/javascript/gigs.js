const homes = [
  {
    "Name": "Gig 1",
    "Price": 99.99,
    "Address": "New York Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig1.com",
    "Type": "Computer"
  },
  {
    "Name": "Gig 2",
    "Price": 15.99,
    "Address": "San Francisco Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig2.com",
    "Type": "Computer"
  },
  {
    "Name": "Gig 3",
    "Price": 49.99,
    "Address": "Los Angeles Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig3.com",
    "Type": "Creative"
  },
  {
    "Name": "Gig 4",
    "Price": 55,
    "Address": "Chicago Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig4.com",
    "Type": "Creative"
  },
  {
    "Name": "Gig 5",
    "Price": 63,
    "Address": "Boston Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig5.com",
    "Type": "Crew"
  },
  {
    "Name": "Gig 6",
    "Price": 18.4,
    "Address": "Seattle Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig6.com",
    "Type": "Crew"
  },
  {
    "Name": "Gig 7",
    "Price": 15,
    "Address": "Miami Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig7.com",
    "Type": "Domestic"
  },
  {
    "Name": "Gig 8",
    "Price": 20,
    "Address": "Denver Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig8.com",
    "Type": "Domestic"
  },
  {
    "Name": "Gig 9",
    "Price": 22,
    "Address": "Dallas Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig9.com",
    "Type": "Event"
  },
  {
    "Name": "Gig 10",
    "Price": 100,
    "Address": "Philadelphia Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig10.com",
    "Type": "Event"
  },
  {
    "Name": "Gig 11",
    "Price": 70,
    "Address": "Portland Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig11.com",
    "Type": "Labor"
  },
  {
    "Name": "Gig 12",
    "Price": 59.99,
    "Address": "Austin Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig12.com",
    "Type": "Labor"
  },
  {
    "Name": "Gig 13",
    "Price": 42.2,
    "Address": "San Diego Street 1",
    "Description": "Looking for participants for a focus group",
    "Contact": "contact@gig13.com",
    "Type": "Talent"
  },
  {
      "Name": "Gig 14",
      "Price": 12.5,
      "Address": "Atlanta Street 1",
      "Description": "Looking for participants for a focus group",
      "Contact": "contact@gig14.com",
      "Type": "Talent"
    },
    {
        "Name": "Gig 15",
        "Price": 12.5,
        "Address": "Atlanta Street 1",
        "Description": "Looking for participants for a focus group",
        "Contact": "contact@gig15.com",
        "Type": "Writing"
      },
      {
        "Name": "Gig 16",
        "Price": 12.5,
        "Address": "Atlanta Street 1",
        "Description": "Looking for participants for a focus group",
        "Contact": "contact@gig16.com",
        "Type": "Writing"
      }
  ];
  
  
  function createHomeElement(home) {
    // create the anchor element
    let a = document.createElement("a");
    a.href = "gigs-ad.html?id=" + encodeURIComponent(home.Name);
  
    // create the div element with class 'home'
    let div = document.createElement("div");
    div.id = "homes";
  
    // create the image element with class 'jobimage'
    let img = document.createElement("img");
    img.src = "../images/jobs/gig.jpg";
    img.alt = "";
    img.id = "jobimage"; // Change this line
    div.appendChild(img);
  
    // create the p element with the address
    let p2 = document.createElement("p");
    p2.id = "address";
    p2.innerHTML = "Pay: " + home.Price + "$";
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
  "computer": "Computer",
  "creative": "Creative",
  "crew": "Crew",
  "domestic": "Domestic",
  "event": "Event",
  "labor": "Labor",
  "talent": "Talent",
  "writing": "Writing"
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
  