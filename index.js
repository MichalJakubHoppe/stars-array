// Task:
// Write a function to display a galaxy of stars (at least 100) in the DOM. 
// Note: This requires very little code!

// Stretch goals:
// - 1. Ensure that the stars always fill each line
// - 2. Add different sizes of star 


const stars = new Array(30).fill("⭐").join("")
const galaxy = document.getElementById("galaxy")


for (let i = 0; i < stars.length; i ++) {
    galaxy.innerHTML += `<div class="shine">${stars}</div>`
}



