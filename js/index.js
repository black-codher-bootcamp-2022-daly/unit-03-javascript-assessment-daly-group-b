import { dates } from "./data.js";
const content = dates.map(function (value) {
  let datesModal = document.createElement("div");
  let modaldiv = document.createElement("div");
  datesModal.classList.add("timeline-item");
  modaldiv.classList.add("timeline-item");
  datesModal.innerHTML = `<div><h2 class="timeline-item-title">${value["title"]}
  </h2>
  <div><span class= "timeline-item-date">${value["date"]}</span></div>
  <div class = "timeline-item-summary">${value["summary"]}</div>
  <button class = "timeline-item-more-info" id="myBtn" >More Details</button></div>`;

  modaldiv.innerHTML = `<div class="modal">
<div class="modal-content" id="modal-container">
<span class="modal-close-button" id="modal-close-button"> X </span>
<div><span id= "modal-date">${value["date"]} </span></div>
  
  <h1 id="modal-title">${value["title"]} </h1>
 
  <img id="modal-image"src="${value["image"]}" width=100 height=100>
</img>
<p id="modal-full-description">${value["fullDescription"]}</p>
</div>


</div>`;

  let getDateModal = datesModal.getElementsByClassName(
    "timeline-item-more-info"
  )[0];
  let getModalElement = modaldiv.getElementsByClassName("modal")[0];
  let getModalCloseButton =
    modaldiv.getElementsByClassName("modal-close-button")[0];

  getDateModal.addEventListener("click", function () {
    //open the Modal
    document.querySelector(".timeline").append(getModalElement);
    //content.modal.style.display = "block";
    getModalElement.style.display = "block";
  });

  ///close modal
  getModalCloseButton.addEventListener("click", function () {
    console.log("Ive been clicked");
    document.querySelector(".timeline").append(getModalElement);
    //content.modal.style.display = "block";
    getModalElement.style.display = "none";
  });

  return datesModal;
});
const main = document.querySelector(".timeline");
content.modaldiv;

content.forEach((value) => {
  main.append(value);
});
