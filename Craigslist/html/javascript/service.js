const homes = [
  {
    "Name": "Service 1",
    "Price": 99.99,
    "Address": "New York Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service1.com",
    "Rating": 3.9,
    "Type": "Activities & Events"
  },
  {
    "Name": "Service 2",
    "Price": 15.99,
    "Address": "San Francisco Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service2.com",
    "Rating": 4.5,
    "Type": "Activities & Events"
  },
  {
    "Name": "Service 3",
    "Price": 49.99,
    "Address": "Los Angeles Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service3.com",
    "Rating": 4.3,
    "Type": "Artists & Creatives"
  },
  {
    "Name": "Service 4",
    "Price": 55,
    "Address": "Chicago Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service4.com",
    "Rating": 2.9,
    "Type": "Artists & Creatives"
  },
  {
    "Name": "Service 5",
    "Price": 63,
    "Address": "Boston Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service5.com",
    "Rating": 3.4,
    "Type": "Childcare & Parenting"
  },
  {
    "Name": "Service 6",
    "Price": 18.4,
    "Address": "Seattle Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service6.com",
    "Rating": 5.0,
    "Type": "Childcare & Parenting"
  },
  {
    "Name": "Service 7",
    "Price": 15,
    "Address": "Miami Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service7.com",
    "Rating": 4.1,
    "Type": "Classes & Workshops"
  },
  {
    "Name": "Service 8",
    "Price": 20,
    "Address": "Denver Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service8.com",
    "Rating": 2.2,
    "Type": "Classes & Workshops"
  },
  {
    "Name": "Service 9",
    "Price": 22,
    "Address": "Dallas Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service9.com",
    "Rating": 3.7,
    "Type": "Community & Local News"
  },
  {
    "Name": "Service 10",
    "Price": 100,
    "Address": "Philadelphia Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service10.com",
    "Rating": 3.3,
    "Type": "Community & Local News"
  },
  {
    "Name": "Service 11",
    "Price": 70,
    "Address": "Portland Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service11.com",
    "Rating": 4.4,
    "Type": "Lost & Found"
  },
  {
    "Name": "Service 12",
    "Price": 59.99,
    "Address": "Austin Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service12.com",
    "Rating": 2.2,
    "Type": "Lost & Found"
  },
  {
    "Name": "Service 13",
    "Price": 42.2,
    "Address": "San Diego Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service13.com",
    "Rating": 4.8,
    "Type": "Services & Jobs"
  },
  {
    "Name": "Service 14",
    "Price": 12.5,
    "Address": "Atlanta Street 1",
    "Description": "I can make the website you want to build",
    "Contact": "contact@service14.com",
    "Rating": 4.9,
    "Type": "Services & Jobs"
    }
  ];
  
  
  function createHomeElement(home) {
    // create the anchor element
    let a = document.createElement("a");
    a.href = "service-ad.html?id=" + encodeURIComponent(home.Name);
  
    // create the div element with class 'home'
    let div = document.createElement("div");
    div.id = "homes";
  
    // create the image element with class 'jobimage'
    let img = document.createElement("img");
    img.src = "../images/jobs/service.jpg";
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
  "activities": "Activities & Events",
  "art": "Artists & Creatives",
  "childcare": "Childcare & Parenting",
  "classes": "Classes & Workshops",
  "community": "Community & Local News",
  "lost-found": "Lost & Found",
  "services": "Services & Jobs"
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
  