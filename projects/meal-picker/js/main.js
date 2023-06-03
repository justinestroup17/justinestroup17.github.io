// List of games
const list = [
    {
        name: "Raising Cane's",
        description: "Yummy.",
        category: "fastfood"
    },
    {
        name: "Chipotle",
        description: "Yummy.",
        category: "fastfood"
    },
    {
        name: "McDonald's",
        description: "Yummy.",
        category: "fastfood"
    },
    {
        name: "Panda Express",
        description: "Yummy.",
        category: "fastfood"
    },
    {
        name: "Taco Express",
        description: "Yummy.",
        category: "fastfood"
    },
    {
        name: "Freddy's",
        description: "Yummy.",
        category: "fastfood"
    },
    {
        name: "Taco Bell",
        description: "Yummy.",
        category: "fastfood"
    },
    {
        name: "Sonic",
        description: "Yummy.",
        category: "fastfood"
    },
    {
        name: "Chick-Fil-A",
        description: "Yummy.",
        category: "fastfood"
    },
    {
        name: "Wendy's",
        description: "Yummy.",
        category: "fastfood"
    }
];

// Get modal element
const modal = document.getElementById('simpleModal');

// Get open modal buttons
const modalBtn1 = document.getElementById('modalBtn1');
const modalBtn2 = document.getElementById('modalBtn2');
const modalBtn3 = document.getElementById('modalBtn3');

// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

// Get pick again button
const pickAgain = document.getElementById('pickAgain');

/*
const restaurantName = document.getElementById('restaurant'); */

// Get game description element
const description = document.getElementById('describe');

// Listen for open click
modalBtn1.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal);
modalBtn3.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for click outside of modal (close when clicking outside of modal)
window.addEventListener('click', clickOutside);

// Listen for pickAgain button to generate another random game
pickAgain.addEventListener('click', () =>  {
    closeModal();
    openModal();
});

// Function to open modal
function openModal() {
    modal.style.display = 'block';

    // Get random number
    const random = [Math.floor(Math.random() * 10)];

    // Get game name based on random number
    const place = list[random].name;
    restaurant.innerHTML  = `${place}`;

    // Get game image
    // Condensed name to use file name in img source
    const condensedName = place.toLowerCase().replace(/\s/g, "");
    document.getElementById("placePic").src=`img/${condensedName}.jpg`;

    // Get game description
    const message = list[random].description;
    description.innerHTML = `${message}`;

}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if outside click
function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}