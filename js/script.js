document.addEventListener("DOMContentLoaded", function() {
  
  // HTML elements
  var heading = document.querySelector("h1");
  var text = document.querySelector("p");
  
  // Load page content
  function loadFact(x) {
    heading.textContent = "Goose Fact " + window.location.hash;
    if (typeof x === "number") text.textContent = FACTS[x - 1];
    else text.textContent = FACTS[window.location.hash.substring(1) - 1];
  }
  window.addEventListener("hashchange", loadFact);
  
  // Randomize new fact
  function newFact() {
    window.location.hash = Math.ceil(Math.random() * FACTS.length);
  }
  document.addEventListener("click", newFact);
  document.addEventListener("keypress", newFact);
  
  // Page load
  if (!window.location.hash) newFact();
  else loadFact(window.location.hash.substring(1));
    
});
