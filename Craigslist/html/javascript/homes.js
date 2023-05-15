const homes = [
  {
      "Name": "Home 1",
      "Price": 100000,
      "Address": "Wall Street 1",
      "Description": "Nice home in friendly neighborhood",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Apts / Housing"
  },
  {
      "Name": "Home 2",
      "Price": 15000,
      "Address": "Broadway 10",
      "Description": "Cozy apartment in bustling area",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Apts / Housing"
  },
  {
      "Name": "Home 3",
      "Price": 20000,
      "Address": "5th Avenue 20",
      "Description": "Spacious living in a prime location",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Apts / Housing"
  },
  {
      "Name": "Home 4",
      "Price": 30000,
      "Address": "Central Park West 100",
      "Description": "Charming residence near the park",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Housing Swap"
  },
  {
      "Name": "Home 5",
      "Price": 40000,
      "Address": "Madison Avenue 500",
      "Description": "Elegant townhouse in an upscale area",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Housing Swap"
  },
  {
      "Name": "Home 6",
      "Price": 50000,
      "Address": "Park Avenue 1000",
      "Description": "Luxury living in an exclusive neighborhood",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Housing Swap"
  },
  {
      "Name": "Home 7",
      "Price": 60000,
      "Address": "Lexington Avenue 1500",
      "Description": "Modern condo with great amenities",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Housing Swap"
  },
  {
      "Name": "Home 8",
      "Price": 70000,
      "Address": "Fifth Avenue 2000",
      "Description": "Stylish apartment in a sought-after area",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Housing Wanted"
  },
  {
      "Name": "Home 9",
      "Price": 80000,
      "Address": "Seventh Avenue 2500",
      "Description": "Beautiful loft with city views",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Housing Wanted"
  },
  {
      "Name": "Home 10",
      "Price": 90000,
      "Address": "Columbus Circle 3000",
      "Description": "Contemporary home near shopping and dining",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Office / Commercial"
  },
  {
      "Name": "Home 11",
      "Price": 100000,
      "Address": "Bryant Park 3500",
      "Description": "Sophisticated living close to the park",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Office / Commercial"
  },
  {
      "Name": "Home 12",
      "Price": 150000,
      "Address": "Times Square 4000",
      "Description": "Vibrant city living in the heart of Times Square",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Parking / Storage"
      },
      {
      "Name": "Home 13",
      "Price": 200000,
      "Address": "Empire State Building 4500",
      "Description": "Breathtaking views from a high-rise near the Empire State Building",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Parking / Storage"
      },
      {
      "Name": "Home 14",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Parking / Storage"
      },
      {
      "Name": "Home 14",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Real Estate for Sale"
      },
      {
      "Name": "Home 15",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Real Estate for Sale"
      },
      {
      "Name": "Home 16",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Real Estate for Sale"
      },
      {
      "Name": "Home 17",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Real Estate for Sale"
      },
      {
      "Name": "Home 18",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Rooms / Shared"
      },
      {
      "Name": "Home 19",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Rooms / Shared"
      },
      {
      "Name": "Home 20",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Rooms / Shared"
      },
      {
      "Name": "Home 21",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Rooms Wanted"
      },
      {
      "Name": "Home 22",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Rooms Wanted"
      },
      {
      "Name": "Home 23",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Sublets / Temporary"
      },
      {
      "Name": "Home 24",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Sublets / Temporary"
      },
      {
      "Name": "Home 25",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Vacation Rentals"
      },
      {
      "Name": "Home 26",
      "Price": 250000,
      "Address": "Statue of Liberty 5000",
      "Description": "Iconic waterfront property with stunning views of the Statue of Liberty",
      "Contact": "Phone: 123454321, Email: realtor@gmail.com",
      "SqrFeet": 2000,
      "Type": "Vacation Rentals"
      }
  ];
  
  
  function createHomeElement(home) {
    // create the anchor element
    let a = document.createElement("a");
    a.href = "home.html?id=" + encodeURIComponent(home.Name);
  
    // create the div element with class 'home'
    let div = document.createElement("div");
    div.id = "homes";
  
    // create the image element with class 'jobimage'
    let img = document.createElement("img");
    img.src = "../images/jobs/house.jpg";
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
  