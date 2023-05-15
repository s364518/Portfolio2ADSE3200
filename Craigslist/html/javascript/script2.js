const categoryDropdown = document.getElementById('category');
const subCategory = document.getElementById('sub');
categoryDropdown.addEventListener('change', updatePriceLabel);

const jobOptions = `
<option value="" disabled selected>Select a Category</option>
                <option value="business-finance">Business & Finance</option>
                <option value="creative-arts">Creative Arts</option>
                <option value="engineering-design">Engineering & Design</option>
                <option value="healthcare-medical">Healthcare & Medical</option>
                <option value="sales-marketing">Sales & Marketing</option>
                <option value="technology-it">Technology & IT</option>
                <option value="education">Education & Training</option>
`;

const homeOptions = `
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

const forsaleOptions = `
<option value="" disabled selected>Select a Category</option>
                <option value="vehicles">Vehicles & Automotive Parts</option>
                <option value="electronics">Electronics & Technology</option>
                <option value="home-garden">Home & Garden</option>
                <option value="fashion">Fashion & Accessories</option>
                <option value="sports-outdoors">Sports & Outdoors</option>
                <option value="toys-collectibles">Toys & Collectibles</option>
                <option value="miscellaneous">Miscellaneous</option>
`;

const goodswantedOptions = `
<option value="" disabled selected>Select a Category</option>
                <option value="vehicles">Vehicles & Automotive Parts</option>
                <option value="electronics">Electronics & Technology</option>
                <option value="home-garden">Home & Garden</option>
                <option value="fashion">Fashion & Accessories</option>
                <option value="sports-outdoors">Sports & Outdoors</option>
                <option value="toys-collectibles">Toys & Collectibles</option>
                <option value="miscellaneous">Miscellaneous</option>
`;

const servicesOptions = `
<option value="" disabled selected>Select a Category</option>
                <option value="activities">Activities & Events</option>
                <option value="art">Artists & Creatives</option>
                <option value="childcare">Childcare & Parenting</option>
                <option value="classes">Classes & Workshops</option>
                <option value="community">Community & Local News</option>
                <option value="lost-found">Lost & Found</option>
                <option value="services">Services & Jobs</option>
`;

const communityserviceOptions = `
<option value="" disabled selected>Select a Category</option>
                <option value="activities">Activities & Entertainment</option>
                <option value="art">Art & Creativity</option>
                <option value="childcare">Childcare & Babysitting</option>
                <option value="education">Education & Learning</option>
                <option value="events">Events & Gatherings</option>
                <option value="community">Community & Local News</option>
                <option value="misc">Miscellaneous</option>
`;

const gigsOptions = `
<option value="" disabled selected>Select a Sub-Category</option>
                <option value="computer">Computer</option>
                <option value="creative">Creative</option>
                <option value="crew">Crew</option>
                <option value="domestic">Domestic</option>
                <option value="event">Event</option>
                <option value="labor">Labor</option>
                <option value="talent">Talent</option>
                <option value="writing">Writing</option>
`;

const discussionforumsOptions = `
<option value="" disabled selected>Select a Sub-Category</option>
                <option value="arts">Arts & Culture</option>
                <option value="autos">Automobiles</option>
                <option value="beauty">Beauty & Personal Care</option>
                <option value="food">Food & Cooking</option>
                <option value="gaming">Gaming & Technology</option>
                <option value="health">Health & Wellness</option>
                <option value="home">Home & Garden</option>
                <option value="pets">Pets & Animals</option>
`;

function updatePriceLabel() {
    const selectedCategory = categoryDropdown.value;
    const priceLabel = document.getElementById('price-label');
    const price = document.getElementById('price');
    const titleLabel = document.getElementById('title-label');
    const locationLabel = document.getElementById('location-label');
    const location = document.getElementById('location');
    const contactLabel = document.getElementById('contact-label');
    const contact = document.getElementById('contact');
    const subLabel = document.getElementById('sub-label');

    locationLabel.style.display = 'block';
    location.style.display = 'block';
    priceLabel.style.display = 'block';
    price.style.display = 'block';
    contactLabel.style.display = 'block';
    contact.style.display = 'block';
    subLabel.style.display = 'block';
    subCategory.style.display = 'block';

    if (selectedCategory === 'jobs') {
        subCategory.innerHTML = jobOptions;
        priceLabel.textContent = 'Salary:';
        titleLabel.textContent = 'Job Title:';
        locationLabel.textContent = 'Location:';
    } else if (selectedCategory === 'homes') {
        subCategory.innerHTML = homeOptions;
        locationLabel.textContent = 'Address:';
        priceLabel.textContent = 'Price:';
        titleLabel.textContent = 'Title';
    } else if (selectedCategory === 'community-service') {
        priceLabel.style.display = 'none';
        price.style.display = 'none';
    } else if (selectedCategory === 'resumes' || selectedCategory === 'discussion-forums') {
        locationLabel.style.display = 'none';
        location.style.display = 'none';
        priceLabel.style.display = 'none';
        price.style.display = 'none';
        if (selectedCategory === 'discussion-forums') {
            contact.style.display = 'none';
            contactLabel.style.display = 'none';
            subCategory.innerHTML = discussionforumsOptions;
        } else if (selectedCategory === 'resumes') {
            subCategory.style.display = 'none';
            subLabel.style.display = 'none';
        }
    } else {
        priceLabel.textContent = 'Price:';
        titleLabel.textContent = 'Title';
        locationLabel.textContent = 'Location:';
    }
    if (selectedCategory === 'for-sale') {
        subCategory.innerHTML = forsaleOptions;
    } else if (selectedCategory === 'goods-wanted') {
        subCategory.innerHTML = servicesOptions;
    } else if (selectedCategory === 'community-service') {
        subCategory.innerHTML = communityserviceOptions;
    } else if (selectedCategory === 'gigs') {
        subCategory.innerHTML = gigsOptions;
    }
}