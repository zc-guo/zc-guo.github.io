function setBackgroundColor() {
    const now = new Date();
    const currentHour = now.getHours();

    // Define your linear gradient for different times of the day
    let gradient;

    if (currentHour >= 5 && currentHour < 8){
        gradient = 'linear-gradient(to bottom right, #99ccff 0%, #ffffcc 100%)'; // Morning
    } else if (currentHour >= 8 && currentHour < 12) {
        gradient = 'linear-gradient(to bottom right, #ffffcc 0%, #66ccff 100%)'; // Morning
    } else if (currentHour >= 12 && currentHour < 17) {
        gradient = 'linear-gradient(to bottom right, #66ccff 0%, #ffcc66 100%)'; // Afternoon
    } else if (currentHour >= 17 && currentHour < 20) {
        gradient = 'linear-gradient(to bottom right, #ffcc66 0%, #cc99ff 100%)'; // Afternoon
    } else {
        gradient = 'linear-gradient(to bottom right, #cc99ff 0%, #99ccff 100%)'; // Evening/Night
    }

    document.body.style.background = gradient;
}

// Call the function when the page loads and every minute (if you want to update it)
setBackgroundColor();
// setInterval(setBackgroundColor, 60000); // 60000 milliseconds = 1 minute
