let homes = [
  {
    "Name": "Job 1",
    "Price": 50000,
    "Address": "New York",
    "Description": "A great job opportunity in the bustling city of New York.",
    "Contact": "contact@job1.com",
    "Type": "Business & Finance"
  },
  {
    "Name": "Job 2",
    "Price": 60000,
    "Address": "San Francisco",
    "Description": "A promising job opening in the tech hub of San Francisco.",
    "Contact": "contact@job2.com",
    "Type": "Business & Finance"
  },
  {
    "Name": "Job 3",
    "Price": 70000,
    "Address": "Los Angeles",
    "Description": "An exciting job offer in the entertainment capital of the world.",
    "Contact": "contact@job3.com",
    "Type": "Creative Arts"
  },
  {
    "Name": "Job 4",
    "Price": 80000,
    "Address": "Chicago",
    "Description": "An excellent job opportunity in the Windy City of Chicago.",
    "Contact": "contact@job4.com",
    "Type": "Creative Arts"
  },
  {
    "Name": "Job 5",
    "Price": 90000,
    "Address": "Boston",
    "Description": "A fantastic job offer in the historic city of Boston.",
    "Contact": "contact@job5.com",
    "Type": "Engineering & Design"
  },
  {
    "Name": "Job 6",
    "Price": 100000,
    "Address": "Seattle",
    "Description": "An amazing job opportunity in the Emerald City of Seattle.",
    "Contact": "contact@job6.com",
    "Type": "Engineering & Design"
  },
  {
    "Name": "Job 7",
    "Price": 60000,
    "Address": "Miami",
    "Description": "A wonderful job opportunity in the sunny city of Miami.",
    "Contact": "contact@job7.com",
    "Type": "Healthcare & Medical"
  },
  {
    "Name": "Job 8",
    "Price": 85000,
    "Address": "Denver",
    "Description": "A great job opening in the scenic city of Denver.",
    "Contact": "contact@job8.com",
    "Type": "Healthcare & Medical"
  },
  {
    "Name": "Job 9",
    "Price": 75000,
    "Address": "Dallas",
    "Description": "An exciting job offer in the vibrant city of Dallas.",
    "Contact": "contact@job9.com",
    "Type": "Sales & Marketing"
  },
  {
    "Name": "Job 10",
    "Price": 65000,
    "Address": "Philadelphia",
    "Description": "A promising job opening in the historic city of Philadelphia.",
    "Contact": "contact@job10.com",
    "Type": "Sales & Marketing"
  },
  {
    "Name": "Job 11",
    "Price": 90000,
    "Address": "Portland",
    "Description": "An amazing job opportunity in the beautiful city of Portland.",
    "Contact": "contact@job11.com",
    "Type": "Technology & IT"
  },
  {
    "Name": "Job 12",
    "Price": 80000,
    "Address": "Austin",
    "Description": "An excellent job opportunity in the lively city of Austin.",
    "Contact": "contact@job12.com",
    "Type": "Technology & IT"
  },
  {
    "Name": "Job 13",
    "Price": 95000,
    "Address": "San Diego",
    "Description": "A fantastic job offer in the sunny city of San Diego.",
    "Contact": "contact@job13.com",
    "Type": "Education & Training"
  },
  {
      "Name": "Job 14",
      "Price": 70000,
      "Address": "Atlanta",
      "Description": "An exciting job offer in the vibrant city of Atlanta.",
      "Contact": "contact@job14.com",
      "Type": "Education & Training"
    },
    {
      "Name": "Job 15",
      "Price": 55000,
      "Address": "Phoenix",
      "Description": "A great job opportunity in the hot and sunny city of Phoenix.",
      "Contact": "contact@job15.com",
      "Type": "Education & Training"
    },
    {
      "Name": "Job 16",
      "Price": 75000,
      "Address": "Minneapolis",
      "Description": "A promising job opening in the beautiful city of Minneapolis.",
      "Contact": "contact@job16.com",
      "Type": "Healthcare & Medical"
    }
  ];
  
  
  function createHomeElement(home) {
    // create the anchor element
    let a = document.createElement("a");
    a.href = "job.html?id=" + encodeURIComponent(home.Name);
  
    // create the div element with class 'home'
    let div = document.createElement("div");
    div.id = "homes";
  
    // create the image element with class 'jobimage'
    let img = document.createElement("img");
    img.src = "../images/jobs/Job1.jpg";
    img.alt = "";
    img.id = "jobimage"; // Change this line
    div.appendChild(img);
  
    // create the p element with the address
    let p2 = document.createElement("p");
    p2.id = "address";
    p2.innerHTML = home.Address + ": " + home.Price + "$";
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
  "business-finance": "Business & Finance",
  "creative-arts": "Creative Arts",
  "engineering-design": "Engineering & Design",
  "healthcare-medical": "Healthcare & Medical",
  "sales-marketing": "Sales & Marketing",
  "technology-it": "Technology & IT",
  "education": "Education & Training"
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
  