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

const firstDivContent = `<div class = "container">

<div class = "casing"><h2 class= "timeline-item-title"> Yeast </h2>
<span class = "timeline-item-date">2600 BC</span>
<p class = "timeline-item-summary">The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread as long ago as 2600 BC.</p>
<button class = "timeline-item-more-info" id= "moreButton" data-open = "learnmore" >more details </button></div>

<div class = "casing">
<h2 class= "timeline-item-title"> Sugar </h2>
<span class = "timeline-item-date">1069 AD</span>
<p class = "timeline-item-summary">Sugar was a luxury in Europe until the early 19th century. The first sugar was recorded in England in 1069.</p>
<button class = "timeline-item-more-info" id= "moreButton1" >more details </button></div>
</div>
<div class = "casing">
<h2 class= "timeline-item-title"> Icing sugar </h2>
<span class = "timeline-item-date">1494 AD</span>
<p class = "timeline-item-summary">Icing sugar was invented. It was originally used as a topping for marchpanes, an almond and sugar dessert.</p>
<button class = "timeline-item-more-info" id= "moreButton2">learn more </button></div>

</div>
<div class = "casing"><h2 class= "timeline-item-title"> Soufflé </h2>
<span class = "timeline-item-date">1700s AD</span>
<p class = "timeline-item-summary">Soufflé appears in France</p>
<button class = "timeline-item-more-info" id= "moreButton3" >learn more </button></div>

<div class = "casing"><h2 class= "timeline-item-title"> Milling </h2>
<span class = "timeline-item-date">1779 AD</span>
<p class = "timeline-item-summary">The first steam mill was erected in London.</p><button class = "timeline-item-more-info" id= "moreButton4" >more details </button></div>

<div class = "casing">
<h2 class= "timeline-item-title"> Baking powder </h2>
<span class = "timeline-item-date">1843 AD</span>
<p class = "timeline-item-summary">The first modern version of baking powder was discovered and manufactured by British chemist Alfred Bird.</p>
<button class = "timeline-item-more-info" id= "moreButton5" >more details </button></div>

<div class = "casing"><h2 class= "timeline-item-title"> Synthetic organic dye </h2>
<span class = "timeline-item-date">1856 </span>
<p class = "timeline-item-summary">The first synthetic organic dye was discovered.</p>
<button class = "timeline-item-more-info" id= "moreButton6" >more details </button></div>`;

//adding modals to page content

const createModal = `<div class ="modalContent"><header><button class = "closePage" id = "closeModal" data-close ="card1" > X </button><header>
<p> The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread as long ago as 2600 BC.</p>
<img src ="https://i1.wp.com/www.atthemummiesball.com/wp-content/uploads/2018/04/Relief-Depicting-the-Nurse-Tia.jpg?ssl=1" width ="100" height ="100">
</div>
`;
const createModal1 = `<div class ="modalContent"><header><button class = "closePage" id = "closeModal1" data-close ="card1" > X </button><header>
<p> The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread as long ago as 2600 BC.</p>
<img src = "https://erajournal.co.uk/wp-content/uploads/2021/01/sugar-FI.png" width ="100" height ="100">
</div>
`;

const createModal2 = `<div class ="modalContent"><header><button class = "closePage" id = "closeModal2" data-close ="card1" > X </button><header>
<p> The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread as long ago as 2600 BC.</p>
<img src = "https://www.biggerbolderbaking.com/wp-content/uploads/2016/09/IMG_7428.jpg" width ="100" height ="100">
</div>
`;
const createModal3 = `<div class ="modalContent"><header><button class = "closePage" id = "closeModal3" data-close ="card1" > X </button><header>
<p> The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread as long ago as 2600 BC.</p>
<img src ="https://www.seasonsandsuppers.ca/wp-content/uploads/2013/02/souffle1200.jpg" width ="100" height ="100">
</div>
`;
const createModal4 = `<div class ="modalContent"><header><button class = "closePage" id = "closeModal4"data-close ="card1" > X </button><header>
<p> The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread as long ago as 2600 BC.</p>
<img src ="https://www.conserve-energy-future.com/wp-content/uploads/2021/07/wheat-and-flour.webp" width ="100" height ="100">
</div>`;
const createModal5 = `<div class ="modalContent"><header><button class = "closePage" id = "closeModal5" data-close ="card1" > X </button><header>
<p> The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread as long ago as 2600 BC.</p>
<img src ="https://homecookworld.com/wp-content/uploads/2021/05/Can-I-use-baking-powder-instead-of-baking-soda-780x520.jpg?ezimgfmt=ng%3Awebp%2Fngcb94%2Frs%3Adevice%2Frscb94-1" width ="100" height ="100">
</div>`;
const createModal6 = `<div class ="modalContent"><header><button class = "closePage" id = "closeModal6" data-close ="card1" > X </button><header>
<p> The Egyptians were also pioneers in baking as the first recorded civilization to use yeast in their bread as long ago as 2600 BC.</p>
<img src ="https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw13ab30a5/images/project/WLPROJ-9083/RoMaCa_43176%2001.jpg?sw=800&sh=800"width ="100" height ="100">
</div>`;

project.innerHTML = firstDivContent;
//yeast
document.getElementById("moreButton").onclick = function () {
  showMoreButton();
};
function showMoreButton() {
  document.getElementById("moreButton").innerHTML = createModal;
}
//sugar
document.getElementById("moreButton1").onclick = function () {
  showMoreButton1();
};
function showMoreButton1() {
  document.getElementById("moreButton1").innerHTML = createModal1;
}
//icing sugar
document.getElementById("moreButton2").onclick = function () {
  showMoreButton2();
};
function showMoreButton2() {
  document.getElementById("moreButton2").innerHTML = createModal2;
}
//souffle
document.getElementById("moreButton3").onclick = function () {
  showMoreButton3();
};
function showMoreButton3() {
  document.getElementById("moreButton3").innerHTML = createModal3;
}
//Milling
document.getElementById("moreButton4").onclick = function () {
  showMoreButton4();
};
function showMoreButton4() {
  document.getElementById("moreButton4").innerHTML = createModal4;
}
//Baking powder
document.getElementById("moreButton5").onclick = function () {
  showMoreButton5();
};
function showMoreButton5() {
  document.getElementById("moreButton5").innerHTML = createModal5;
}

//synthetic dye
document.getElementById("moreButton6").onclick = function () {
  showMoreButton6();
};
function showMoreButton6() {
  document.getElementById("moreButton6").innerHTML = createModal6;
}
//Making the X button work

const xButton = document.getElementById("closeModal");
xButton.remove();
