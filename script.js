// Get the elements
var hourElement = document.querySelector('.num-hour_num');
var minuteElement = document.querySelector('.num-min_num');
var secondElement = document.querySelector('.num-sec_num');
var ampmElement = document.querySelector('.am_pm');

// Function to update time
function updateTime() {
    var date = new Date(); // Get current date/time
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // Convert 24-hour format to 12-hour format and set AM/PM
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Update the elements
    hourElement.textContent = hours < 10 ? '0' + hours : hours;
    minuteElement.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondElement.textContent = seconds < 10 ? '0' + seconds : seconds;
    ampmElement.textContent = ampm;
}

// Update time every second
setInterval(updateTime, 1000);

// Call updateTime once at the beginning to avoid delay
updateTime();

// Get the elements
var sunIcon = document.querySelector('.fa-sun');
var moonIcon = document.querySelector('.fa-moon');
var sectionElement = document.querySelector('section'); // Assuming you want to change the mode of the section

// Add event listeners
sunIcon.addEventListener('click', function() {
    // Switch to light mode when sun icon is clicked
    sectionElement.classList.remove('dark');
});

moonIcon.addEventListener('click', function() {
    // Switch to dark mode when moon icon is clicked
    sectionElement.classList.add('dark');
});

