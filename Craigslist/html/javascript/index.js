const regionSelect = document.getElementById("region");
const countrySelect = document.getElementById("country");

// define the countries for North America
const naCountries = [
  { value: "usa", label: "USA" },
  { value: "canada", label: "Canada" },
  { value: "mexico", label: "Mexico" },
];

const saCountries = [
    { value: "argentina", label: "Argentina" },
    { value: "bolivia", label: "Bolivia" },
    { value: "brazil", label: "Brazil" },
    { value: "canada", label: "Canada" },
    { value: "chile", label: "Chile" },
    { value: "colombia", label: "Colombia" },
    { value: "costa-rica", label: "Costa Rica" },
    { value: "dominican-republic", label: "Dominican Republic" },
    { value: "ecuador", label: "Ecuador" },
    { value: "el-salvador", label: "El Salvador" },
    { value: "guatemala", label: "Guatemala" },
    { value: "mexico", label: "Mexico" },
    { value: "nicaragua", label: "Nicaragua" },
    { value: "panama", label: "Panama" },
    { value: "peru", label: "Peru" },
    { value: "puerto-rico", label: "Puerto Rico" },
    { value: "united-states", label: "United States" },
    { value: "uruguay", label: "Uruguay" },
    { value: "us-virgin-islands", label: "US Virgin Islands" },
    { value: "venezuela", label: "Venezuela" },
  ];

  const africaCountries = [
    { value: "egypt", label: "Egypt" },
    { value: "ethiopia", label: "Ethiopia" },
    { value: "ghana", label: "Ghana" },
    { value: "kenya", label: "Kenya" },
    { value: "morocco", label: "Morocco" },
    { value: "south-africa", label: "South Africa" },
    { value: "tunisia", label: "Tunisia" },
  ];
  
  const asiaCountries = [
    { value: "bangladesh", label: "Bangladesh" },
    { value: "china", label: "China" },
    { value: "hong-kong", label: "Hong Kong" },
    { value: "india", label: "India" },
    { value: "indonesia", label: "Indonesia" },
    { value: "iran", label: "Iran" },
    { value: "iraq", label: "Iraq" },
    { value: "israel", label: "Israel" },
    { value: "japan", label: "Japan" },
    { value: "kuwait", label: "Kuwait" },
    { value: "lebanon", label: "Lebanon" },
    { value: "malaysia", label: "Malaysia" },
    { value: "pakistan", label: "Pakistan" },
    { value: "philippines", label: "Philippines" },
    { value: "russia", label: "Russia" },
    { value: "singapore", label: "Singapore" },
    { value: "south-korea", label: "South Korea" },
    { value: "taiwan", label: "Taiwan" },
    { value: "thailand", label: "Thailand" },
    { value: "turkey", label: "Turkey" },
    { value: "uae", label: "United Arab Emirates" },
    { value: "vietnam", label: "Vietnam" },
    { value: "west-bank", label: "West Bank" },
  ];
  
  const europeCountries = [
    { value: "austria", label: "Austria" },
    { value: "belgium", label: "Belgium" },
    { value: "bulgaria", label: "Bulgaria" },
    { value: "croatia", label: "Croatia" },
    { value: "czech-republic", label: "Czech Republic" },
    { value: "denmark", label: "Denmark" },
    { value: "finland", label: "Finland" },
    { value: "france", label: "France" },
    { value: "germany", label: "Germany" },
    { value: "greece", label: "Greece" },
    { value: "hungary", label: "Hungary" },
    { value: "iceland", label: "Iceland" },
    { value: "ireland", label: "Ireland" },
    { value: "italy", label: "Italy" },
    { value: "luxembourg", label: "Luxembourg" },
    { value: "netherlands", label: "Netherlands" },
    { value: "norway", label: "Norway" },
    { value: "poland", label: "Poland" },
    { value: "portugal", label: "Portugal" },
    { value: "romania", label: "Romania" },
    { value: "russia", label: "Russia" },
    { value: "spain", label: "Spain" },
    { value: "sweden", label: "Sweden" },
    { value: "switzerland", label: "Switzerland" },
    { value: "turkey", label: "Turkey" },
    { value: "ukraine", label: "Ukraine" },
    { value: "united-kingdom", label: "United Kingdom" },
  ];
  
  const meCountries = [
    { value: "israel", label: "Israel" },
    { value: "kuwait", label: "Kuwait" },
    { value: "lebanon", label: "Lebanon" },
    { value: "turkey", label: "Turkey" },
    { value: "uae", label: "United Arab Emirates" },
    { value: "west-bank", label: "West Bank" },
  ];  

  const oceaniaCountries = [
    { value: "australia", label: "Australia" },
    { value: "guam", label: "Guam" },
    { value: "new-zealand", label: "New Zealand" },
    { value: "philippines", label: "Philippines" }
  ];

  const test = [
    { value: "australia", label: "Australia" },
    { value: "guam", label: "Guam" },
    { value: "new-zealand", label: "New Zealand" },
    { value: "philippines", label: "Philippines" }
  ];

// function to populate the country select with the given options
function populateCountrySelect(options) {
  // remove all existing options
  countrySelect.innerHTML = "";
  
  // add the new options
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    countrySelect.appendChild(optionElement);
  });
}

// when the region select changes, update the country options
regionSelect.addEventListener("change", (event) => {
  const regionValue = event.target.value;
  
  if (regionValue === "na") {
    populateCountrySelect(naCountries);
  } else if (regionValue === "sa") {
    populateCountrySelect(saCountries);
  } else if (regionValue === "africa") {
    populateCountrySelect(africaCountries);
  } else if (regionValue === "asia") {
    populateCountrySelect(asiaCountries);
  } else if (regionValue === "europe") {
    populateCountrySelect(europeCountries);
  } else if (regionValue === "me") {
    populateCountrySelect(meCountries);
  } else if (regionValue === "oceania") {
    populateCountrySelect(oceaniaCountries);
  }
  // if another region is selected, clear the country select
  else {
    countrySelect.innerHTML = "";
  }
});