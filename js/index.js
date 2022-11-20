import { dates } from "./data.js";

const timelineHeading = document.createElement("header");
timelineHeading.innerText = "Maymer's Bakery Timeline";
document.body.appendChild(timelineHeading);

//CREATING A DIV FOR THE HTML//
const firstDiv = document.createElement("div");
firstDiv.classList.add("timeline-item");
const project = document.querySelector(".timeline");
/*document.appendChild(firstDiv);*/

const main = document.querySelector(".timeline");

const firstDivContent = `<div class = 'timeline-items'>
<div class='cover'><h2 class = "timeline-item-title">Yeast</h2>
<span class = "timeline-item-date">2600 BC</span>
<p class ="timeline-item-summary">The Egyptians are the first recorded civilization to use yeast</p>

<button class = "timeline-item-more-info" id ='moreButton' data-open = 'moredetails'> More Details</button>
<div id = "modal-container" class = "modal">
<div class = modal-content><span class = "closeBtn">&times;</span>
<span id = "modal-date">2600 BC</span>
<h2 id = "modal-title">Yeast</h2>
<img id = "modal-image"src = "https://i1.wp.com/www.atthemummiesball.com/wp-content/uploads/2018/04/Relief-Depicting-the-Nurse-Tia.jpg?ssl=1", width = "150" height = "100">
<p id = "modal-full-description">The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread as long ago as 2600 BC.</p>
</div></div>
</div>

<div class='cover'><section><h2 class = "timeline-item-title">Sugar</h2>
<span class = "timeline-item-date">1069 AD</span>
<p class ="timeline-item-summary">The first recorded use of sugar in England</p><button class = "timeline-item-more-info">More Details</button></div>

<div class='cover'><h2 class = "timeline-item-title">Icing sugar</h2>
<span class = "timeline-item-date">1494 AD</span>
<p class ="timeline-item-summary">Icing sugar was invented</p><button class = "timeline-item-more-info">More Details</button></div>

<div class='cover'><h2 class = "timeline-item-title">Soufflé</h2>
<span class = "timeline-item-date">1700s AD</span>
<p class ="timeline-item-summary">Soufflé appears in France</p><button class = "timeline-item-more-info">More Details</button></div>

<div class='cover'><h2 class = "timeline-item-title">Milling</h2>
<span class = "timeline-item-date">1779 AD</span>
<p class ="timeline-item-summary">The first steam mill was erected in London</p><button class = "timeline-item-more-info">More Details</button></div>

<div class='cover'><h2 class = "timeline-item-title">Baking powder</h2>
<span class = "timeline-item-date">1843 AD</span>
<p class ="timeline-item-summary">The first modern version of baking powder was discovered and manufactured by British chemist Alfred Bird</p><button class = "timeline-item-more-info">More Details</button></div>

<div class='cover'><h2 class = "timeline-item-title">Synthetic organic dye</h2>
<span class = "timeline-item-date">1856 AD</span>
<p class ="timeline-item-summary">The first synthetic organic dye was discovered</p><button class = "timeline-item-more-info">More Details</button></div></div>`;

//adding modals to page content//

//const btn = document.querySelector("timeline-item-more-info");
//const modal = `<div></div>

//function openModal(){
//const date = '2600 BC';
//const title = 'Yeast';
//const fullDescription = "The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread32 as long ago as 2600 BC.";

//return date + title + fullDiescription;//

const createModal = `<div class = "modalContent"><header><button class ="closePage" data-close ="card1"> X </button><header>
    <p>The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread as long ago as 2600 BC.</p>
    <img src = "https://i1.wp.com/www.atthemummiesball.com/wp-content/uploads/2018/04/Relief-Depicting-the-Nurse-Tia.jpg?ssl=1" width="100" height =100"></div>`;

project.innerHTML = firstDivContent;
//const openCards = document.querySelectorAll("[data-open]");
//const closeCards = document.querySelectorAll("[data-close]");
//const cardVisible = "card-visible";//

/*for (const card of openCards) {
  card.addEventListener("click", function () {
    const modalCard = this.dataset.open;
    document.getElementById("moreButton").classList.add(cardVisible);
  });
}
*/

/*document.getElementById("moreButton").onclick = function () {
    showMoreButton();
  };
  function showMoreButton() {
    document.getElementById("moreButton").innerHTML = createModal;
  }*/

//list for open click//

var moreButton = document.getElementById('moreButton');
var closeBtn;

moreButton.addEventListener('click', openModal);

//function to open modal//
function openModal(){
    modal.style.display ="block"
}



main.innerHTML = firstDivContent;
