/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

// Tjek at DOM er indlæst

// get the click on the div and fire off animaition
document.getElementById("zoom").onclick = function() {
    console.log('nogen klikker på mig');
  addAnimation();
};

/* now the background will move */
function addAnimation() {
  // moveIt is a css class
  // toggle skifter fra en tilstand og tilbage igen 
  document.getElementById("zoom").classList.toggle("moveIt");
}


