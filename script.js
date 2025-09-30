// Get all needed DOM elements
const form = document.getElementById('checkInForm');
const nameInput = document.getElementById('attendeeName');
const teamSelect = document.getElementById('teamSelect');

// Track attendance
let count = 0;
const max = 50;

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = nameInput.value;
    const team = teamSelect.value;
    const teamName = teamSelect.selectedOptions[0].text;


    console.log(name, teamName);

    // Increment count 
    count++;
    console.log("Total Check-Ins: " + count);

    // Update progress bar
    const percent = Math.round(count / max) * 100 + "%";
    console.log(`Progress: ${percent}`);

    // Update team count
    const teamCounter = document.getElementById(team + "Count");
    teamCounter.innerText = parseInt(teamCounter.textContent) + 1;

    // Show welcome message
    const message = `🎉 Welcome, ${name} from ${teamName}!`;
    console.log(message);

    form.reset(); // Reset form fields
});