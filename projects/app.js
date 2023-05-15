const yearElement = document.getElementById('year');
copyrightYear(); // Automatically updates copyright year
// Get year from today's date
function copyrightYear() {
    const todaysDate = new Date();
    const year = todaysDate.getFullYear();
    yearElement.innerHTML = year;
}