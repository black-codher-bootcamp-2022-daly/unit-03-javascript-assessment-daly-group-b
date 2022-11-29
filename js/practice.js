

/*
import { dates } from "./data.js";
const content = dates.map(function (value) {
  let datesModal = document.createElement("div");
  datesModal.classList.add("timeline-item");

  datesModal.innerHtml = `<h1 class="timeline-item-title">(value.title)
</h1>
<span class= "timeline-item-date>(value[date])</span>
<div class = "timeline-item-summary">(value["summary"])</div
<button class = "timeline-item-more-info"></button>`;
  return dateModal;
});




import { dates } from "./data.js";
const content = dates.map(function (value) {
  let datesModal = document.createElement("div");
  datesModal.classList.add("timeline-item");

  datesModal.innerHtml = `<h1 class="timeline-item-title">(dates.title)
</h1>
<span class= "timeline-item-date>(dates[date])</span>
<div class = "timeline-item-summary">(dates["summary"])</div
<button class = "timeline-item-more-info"></button>`;
  return value;
});
const main = document.querySelector(".timeline");

content.forEach((value) => {
  main.append(content);
});
main.innerHTML = content;