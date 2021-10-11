import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready


  let CardsNotActive = document.querySelectorAll('.card:not(.active)')
  

  setTimeout(function () {
   for(let i = 0; i < CardsNotActive.length; i++){
    CardsNotActive[i].style.display = 'none'
   }
  }, 3000);
});
