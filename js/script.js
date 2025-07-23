// Nav menu hamburger
const hamburger = document.querySelector("#toggle-btn");

hamburger.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("expand");
});


//Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });