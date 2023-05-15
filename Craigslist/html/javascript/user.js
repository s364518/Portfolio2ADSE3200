let homes = [
    {
      "Name": "Job 1",
      "Price": 50000,
      "Address": "New York",
      "Description": "A great job opportunity in the bustling city of New York.",
      "Contact": "contact@job1.com",
      "Main": "Jobs",
      "Type": "Business & Finance"
    },
    {
      "Name": "Job 2",
      "Price": 60000,
      "Address": "San Francisco",
      "Description": "A promising job opening in the tech hub of San Francisco.",
      "Contact": "contact@job2.com",
      "Main": "Jobs",
      "Type": "Business & Finance"
    },
    {
      "Name": "Job 3",
      "Price": 70000,
      "Address": "Los Angeles",
      "Description": "An exciting job offer in the entertainment capital of the world.",
      "Contact": "contact@job3.com",
      "Main": "Jobs",
      "Type": "Creative Arts"
    },
    {
      "Name": "Job 4",
      "Price": 80000,
      "Address": "Chicago",
      "Description": "An excellent job opportunity in the Windy City of Chicago.",
      "Contact": "contact@job4.com",
      "Main": "Jobs",
      "Type": "Creative Arts"
    },
    {
      "Name": "Home 1",
      "Price": 100000,
      "Address": "Wall Street 1",
      "Description": "Nice home in friendly neighborhood",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Main": "Homes",
      "Type": "Apts / Housing"
  },
  {
      "Name": "Home 2",
      "Price": 15000,
      "Address": "Broadway 10",
      "Description": "Cozy apartment in bustling area",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Main": "Homes",
      "Type": "Apts / Housing"
  },
  {
      "Name": "Home 3",
      "Price": 20000,
      "Address": "5th Avenue 20",
      "Description": "Spacious living in a prime location",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Main": "Homes",
      "Type": "Housing Swap"
  },
];
  
const jobSubCategoryOptions = `
  <option value="" disabled selected>Select a Sub-Category</option>
  <option value="all">View All</option>
  <option value="business-finance">Business & Finance</option>
  <option value="creative-arts">Creative Arts</option>
  <option value="engineering-design">Engineering & Design</option>
  <option value="healthcare-medical">Healthcare & Medical</option>
  <option value="sales-marketing">Sales & Marketing</option>
  <option value="technology-it">Technology & IT</option>
  <option value="education">Education & Training</option>
`;

const homeSubCategoryOptions = `
  <option value="" disabled selected>Select a Sub-Category</option>
  <option value="all">View All</option>
  <option value="apts-housing">Apts / Housing</option>
  <option value="housing-swap">Housing Swap</option>
  <option value="housing-wanted">Housing Wanted</option>
  <option value="office-commercial">Office / Commercial</option>
  <option value="parking-storage">Parking / Storage</option>
  <option value="real-estate-for-sale">Real Estate for Sale</option>
  <option value="rooms-shared">Rooms / Shared</option>
  <option value="rooms-wanted">Rooms Wanted</option>
  <option value="sublets-temporary">Sublets / Temporary</option>
  <option value="vacation-rentals">Vacation Rentals</option>
`;

const subToType = {
  "all": null,
  "business-finance": "Business & Finance",
  "creative-arts": "Creative Arts",
  "engineering-design": "Engineering & Design",
  "healthcare-medical": "Healthcare & Medical",
  "sales-marketing": "Sales & Marketing",
  "technology-it": "Technology & IT",
  "education": "Education & Training",
  "apts-housing": "Apts / Housing",
  "housing-swap": "Housing Swap",
  "housing-wanted": "Housing Wanted",
  "office-commercial": "Office / Commercial",
  "parking-storage": "Parking / Storage",
  "real-estate-for-sale": "Real Estate for Sale",
  "rooms-shared": "Rooms / Shared",
  "rooms-wanted": "Rooms Wanted",
  "sublets-temporary": "Sublets / Temporary",
  "vacation-rentals": "Vacation Rentals"
};

const categoryDropdown = document.querySelector("#category")
const subDropdown = document.querySelector("#sub");

  function createHomeElement(home) {
    // create the anchor element
    let a = document.createElement("a");
    a.href = "job.html?id=" + encodeURIComponent(home.Name);
  
    // create the div element with class 'home'
    let div = document.createElement("div");
    div.id = "homes";
  
    // create the image element with class 'jobimage'
    let img = document.createElement("img");
    if (home.Main === 'Homes') {
      img.src = "../images/jobs/house.jpg";
    } else if (home.Main) {
      img.src = "../images/jobs/Job1.jpg";
    }
    // img.src = "../images/jobs/Job1.jpg";
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
  
  categoryDropdown.addEventListener('change', function() {
    if (categoryDropdown.value === 'jobs') {
      // if it is, set the options of the sub-category dropdown to the job sub-category options
      subDropdown.innerHTML = jobSubCategoryOptions;
    } else if (categoryDropdown.value === 'homes') {
      subDropdown.innerHTML = homeSubCategoryOptions;
    } else {
      // otherwise, clear the options of the sub-category dropdown
      subDropdown.innerHTML = '<option value="" disabled selected>Select a Sub-Category</option>';
    }
  
    let filteredHomes = [];
    if (categoryDropdown.value === "all" || categoryDropdown.value === null || categoryDropdown.value === "") {
      filteredHomes = homes;
    } else {
      filteredHomes = homes.filter(home => home.Main === categoryDropdown.options[categoryDropdown.selectedIndex].text);
    }
  
    if (categoryDropdown.value === "all") {
      subDropdown.innerHTML = '<option value="" disabled selected>Select a Sub-Category</option>';
      subDropdown.value = "all";
    }
  
    displayHomes(filteredHomes);
  });
  
  subDropdown.addEventListener("change", function() {
    const selectedValue = subDropdown.value;
    let filteredHomes = [];
    
    if (categoryDropdown.value === "all") {
      if (selectedValue === "" || selectedValue === "all") {
        filteredHomes = homes;
      } else if (selectedValue in subToType) {
        const type = subToType[selectedValue];
        filteredHomes = homes.filter(home => home.Type === type);
      }
    } else {
      if (selectedValue === "all" || selectedValue === null || selectedValue === "") {
        filteredHomes = homes.filter(home => home.Main === categoryDropdown.options[categoryDropdown.selectedIndex].text);
      } else if (selectedValue in subToType) {
        const type = subToType[selectedValue];
        filteredHomes = homes.filter(home => home.Main === categoryDropdown.options[categoryDropdown.selectedIndex].text && home.Type === type);
      }
    }
    
    displayHomes(filteredHomes);
  });
  
  displayHomes(homes);
  