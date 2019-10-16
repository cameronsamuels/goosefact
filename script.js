document.addEventListener("DOMContentLoaded", function() {
  
  // HTML elements
  var card = document.querySelector("main>div");
  var heading = document.querySelector("main>div>h1");
  var text = document.querySelector("main>div>p");
  
  // Load page content
  function loadFact(x) {
    heading.textContent = "Goose Fact " + window.location.hash;
    if (typeof x === "number") text.textContent = facts[x - 1];
    else text.textContent = facts[window.location.hash.substring(1) - 1];
  }
  
  // Initiate page update
  window.addEventListener("hashchange", loadFact);
  
  // Randomize new fact
  function newFact() {
    window.location.hash = Math.ceil(Math.random() * facts.length);
  }
  card.addEventListener("click", newFact);
  
  // Page load
  if (!window.location.hash) newFact();
  else loadFact(window.location.hash.substring(1));
    
});
