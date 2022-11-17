import { dates } from "./data.js";

//creating page header

const timelineHeading = document.createElement("header");
timelineHeading.innerText = "Maymer's Bakery Timeline";
document.body.appendChild(timelineHeading);

//creating another div
const firstDiv = document.createElement("div");
firstDiv.classList.add("timeline-item");
const project = document.querySelector(".timeline");

//adding the new html page content

const firstDivContent = `<div class = "container"><div class = "casing"><h2 class= "timeline-item-title"> Yeast </h2>
<span class = "timeline-item-date">2600 BC</span>
<p class = "timeline-item-summary">The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread as long ago as 2600 BC.</p>
<button class = "timeline-item-more-info" id= "moreButton" data-open = "learnmore" >more details </button></div>

<div class = "casing">
<h2 class= "timeline-item-title"> Sugar </h2>
<span class = "timeline-item-date">1069 AD</span>
<p class = "timeline-item-summary">Sugar was a luxury in Europe until the early 19th century. The first sugar was recorded in England in 1069.</p>
<button class = "timeline-item-more-info">more details </button></div>
</div>
<div class = "casing">
<h2 class= "timeline-item-title"> Icing sugar </h2>
<span class = "timeline-item-date">1494 AD</span>
<p class = "timeline-item-summary">Icing sugar was invented. It was originally used as a topping for marchpanes, an almond and sugar dessert.</p>
<button class = "timeline-item-more-info">learn more </button></div>
</div>

<div class = "casing"><h2 class= "timeline-item-title"> Soufflé </h2>
<span class = "timeline-item-date">1700s AD</span>
<p class = "timeline-item-summary">Soufflé appears in France</p>
<button class = "timeline-item-more-info">learn more </button></div>

<div class = "casing"><h2 class= "timeline-item-title"> Milling </h2>
<span class = "timeline-item-date">1779 AD</span>
<p class = "timeline-item-summary">The first steam mill was erected in London.</p><button class = "timeline-item-more-info">more details </button></div>

<div class = "casing">
<h2 class= "timeline-item-title"> Baking powder </h2>
<span class = "timeline-item-date">1843 AD</span>
<p class = "timeline-item-summary">The first modern version of baking powder was discovered and manufactured by British chemist Alfred Bird.</p>
<button class = "timeline-item-more-info">more details </button></div>

<div class = "casing"><h2 class= "timeline-item-title"> Synthetic organic dye </h2>
<span class = "timeline-item-date">1856 </span>
<p class = "timeline-item-summary">The first synthetic organic dye was discovered.</p></div>
</div>`;

//adding modals to page content

const createModal = `<div class ="modalContent"><header><button class = "closePage" data-close ="card1" > X </button><header>
<p> The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread as long ago as 2600 BC.</p>
<img src =""https://i1.wp.com/www.atthemummiesball.com/wp-content/uploads/2018/04/Relief-Depicting-the-Nurse-Tia.jpg?ssl=1">
</div>

`;

project.innerHTML = firstDivContent;
const openCards = document.querySelectorAll("[data-open]");
const closeCards = document.querySelectorAll("[data-close]");
const cardVisible = "card-visible";

/*for (const card of openCards) {
  card.addEventListener("click", function () {
    const modalCard = this.dataset.open;
    document.getElementById("moreButton").classList.add(cardVisible);
  });
}
*/
document.getElementById("moreButton").onclick = function () {
  showMoreButton();
};
function showMoreButton() {
  document.getElementById("moreButton").innerHTML = createModal;
}
