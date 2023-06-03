// List of games
const list = [
    {
        name: "Call of Duty Black Ops",
        description: "Former Marine Captain and CIA operative Alex Mason, upon interrogation by an unknown party, recounts his violent experiences with the Bay of Pigs, a radical Soviet conspiracy, and the Vietnam war."
    },
    {
        name: "Cook, Serve, Delicious! 2!!",
        description: "After the SherriSoda Tower managers are found guilty of financial fraud, you're forced to close your restaurant and start all over in Teragon Tower while also working as a chef-for-hire in the tower's other themed restaurants."
    },
    {
        name: "Cooking Simulator",
        description: "Experience the world of restaurant cooking in a highly polished, realistic kitchen. Use ovens, gas stands, pots, pans, bowls and plates, everything you need. Prepare dozens of lifelike ingredients - from vegetables through fish to steaks and poultry - to cook over 60 real dishes, or anything you like."
    },
    {
        name: "Fallout 3",
        description: "Centuries following nuclear war, a teen leaves the safety of an underground vault in order to find their father, who left in hopes of creating a water purifier."
    },
    {
        name: "Left 4 Dead",
        description: "A multi player co-op in post-apocalyptic Pennsylvania, where four immune survivors, Francis, Bill, Zoey, and Louis fight through hordes of zombies and Special Infected as they make their way to extraction zones."
    },
    {
        name: "Portal 2",
        description: "Many years after \"Portal\", Chell reawakens at Aperture Science and tries to stop GLaDOS once again with the help of Wheatley, who has his own plans for the historical facility."
    },
    {
        name: "Rocksmith",
        description: "Introducing the next stage in the evolution of the music game. Rocksmith, the first and only game where you can plug into any real guitar. Featuring gameplay that automatically adjusts to your personal ability and innovative game design that makes playing music visually intuitive, Rocksmith will engage experienced musicians as well as those who have never picked up a guitar in their life."
    },
    {
        name: "Rollercoaster Tycoon",
        description: "Complete a series of preset scenarios by successfully building and maintaining amusement parks through business ownership as a theme park entrepreneur in RollerCoaster Tycoon."
    },
    {
        name: "Stardew Valley",
        description: "You will inherit an old farm from your grandfather. Start by clearing your farm and start farming. Stardew Valley also has a fishing system, down mines, and many other festivals."
    },
    {
        name: "The Sims 4",
        description: "The Sims 4 is the ultimate life simulation game—create unique characters, build dream homes, and let chaos unfold."
    }
];

// Get modal element
const modal = document.getElementById('simpleModal');

// Get open modal button
const modalBtn = document.getElementById('modalBtn');

// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

// Get pick again button
const pickAgain = document.getElementById('pickAgain');

// Get game name element
const gameName = document.getElementById('videogame');

// Get game description element
const description = document.getElementById('describe');

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for click outside of modal (close when clicking outside of modal)
window.addEventListener('click', clickOutside);

// Listen for pickAgain button to close
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
    const game = list[random].name;
    gameName.innerHTML  = `${game}`;

    // Get game image
    // Condensed name to use file name in img source
    const condensedName = game.toLowerCase().replace(/\s/g, "");
    document.getElementById("gamepic").src=`img/${condensedName}.jpg`;

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