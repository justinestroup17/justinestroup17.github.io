// List of games
const list = [
    "Call of Duty Black Ops",
    "Cook, Serve, Delicious!",
    "Cooking Simulator",
    "Fallout 3",
    "Left 4 Dead",
    "Portal",
    "Rocksmith",
    "Rollercoaster Tycoon",
    "Stardew Valley",
    "The Sims 4"
];

// Get modal element
const modal = document.getElementById('simpleModal');

// Get open modal button
const modalBtn = document.getElementById('modalBtn');

// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for click outside of modal (close when clicking outside of modal)
window.addEventListener('click', clickOutside);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
    const game = list[Math.floor(Math.random() * 10)];
    message.innerHTML  = `${game}`;

    // Condensed name to use file name in img source
    const condensedName = game.toLowerCase().replace(/\s/g, "");
    console.log(condensedName);

    document.getElementById("gamepic").src=`img/${condensedName}.jpg`;
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
const message = document.getElementById('videogame');
