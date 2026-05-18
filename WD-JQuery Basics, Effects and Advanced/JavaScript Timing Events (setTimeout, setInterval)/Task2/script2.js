function updateClock() {
    const now = new Date();
    
    // Extract hours, minutes, and seconds
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    // Format the string
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Update the HTML element
    document.getElementById('clock').textContent = timeString;
}

// Update the clock immediately on load
updateClock();

// Run updateClock every 1 second (1000ms)
setInterval(updateClock, 1000);
