let homes = [
  {
    "Name": "Resume 1",
    "Price": 99.99,
    "Address": "Wall Street 1"
  },
  {
    "Name": "Resume 2",
    "Price": 15.99,
    "Address": "Broadway 10"
  },
  {
    "Name": "Resume 3",
    "Price": 49.99,
    "Address": "5th Avenue 20"
  },
  {
    "Name": "Resume 4",
    "Price": 55,
    "Address": "Central Park West 100"
  },
  {
    "Name": "Resume 5",
    "Price": 63,
    "Address": "Madison Avenue 500"
  },
  {
    "Name": "Resume 6",
    "Price": 18.4,
    "Address": "Park Avenue 1000"
  },
  {
    "Name": "Resume 7",
    "Price": 15,
    "Address": "Lexington Avenue 1500"
  },
  {
    "Name": "Resume 8",
    "Price": 20,
    "Address": "Fifth Avenue 2000"
  },
  {
    "Name": "Resume 9",
    "Price": 22,
    "Address": "Seventh Avenue 2500"
  },
  {
    "Name": "Resume 10",
    "Price": 100,
    "Address": "Columbus Circle 3000"
  },
  {
    "Name": "Resume 11",
    "Price": 70,
    "Address": "Bryant Park 3500"
  },
  {
    "Name": "Resume 12",
    "Price": 59.99,
    "Address": "Times Square 4000"
  },
  {
    "Name": "Resume 13",
    "Price": 42.2,
    "Address": "Empire State Building 4500"
  },
  {
    "Name": "Resume 14",
    "Price": 12.5,
    "Address": "Statue of Liberty 5000"
  }
];


function createHomeElement(home) {
  // create the anchor element
  let a = document.createElement("a");
  a.href = "resume.html?id=" + encodeURIComponent(home.Name);

  // create the div element with class 'home'
  let div = document.createElement("div");
  div.id = "homes";

  // create the image element with class 'jobimage'
  let img = document.createElement("img");
  img.src = "../images/jobs/resume.jpg";
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

  homes.forEach(home => {
    let homeElement = createHomeElement(home);
    categories.appendChild(homeElement);
  });
}

displayHomes(homes);



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
