import { dates } from "./data.js";
const firstDiv = document.createElement("div");
firstDiv.classList.add("timeline-item");
const main = document.querySelector(".timeline");
const firstContent = `<div class = "casing"><h2 class = "timeline-item-title">Yeast</h2>
<span class = "timeline-item-date">2600 BC</span>
<p class = "timeline-item-summary">The Egyptians are the first recorded civilization to use yeast</p>
<button class = "timeline-item-more-info">More Items</button></div>

<div class = "casing"><h2 class = "timeline-item-title">Sugar</h2>
<span class = "timeline-item-date">1069 AD</span>
<p class = "timeline-item-summary">The first recorded use of sugar in England</p>
<button class = "timeline-item-more-info">More Items</button></div>

<div class ="casing"><h2 class = "timeline-item-title">Icing Sugar</h2>
<span class = "timeline-item-date">1494 AD</span>
<p class = "timeline-item-summary">Icing sugar was invented.</p>
<button class = "timeline-item-more-info">More Items</button></div>

<div class = "casing"><h2 class = "timeline-item-title">Soufflé</h2>
<span class = "timeline-item-date">1700 AD</span>
<p class = "timeline-item-summary">Soufflé appears in France</p>
<button class = "timeline-item-more-info">More Items</button></div>

<div class = "casing"><h2 class = "timeline-item-title">Milling</h2>
<span class = "timeline-item-date">1779 AD</span>
<p class = "timeline-item-summary">The first steam mill was erected in London</p>
<button class = "timeline-item-more-info">More Items</button></div>

<div class = "casing"><h2 class = "timeline-item-title">Baking Powder</h2>
<span class = "timeline-item-date">1843 AD</span>
<p class = "timeline-item-summary">The first modern version of baking powder was discovered and manufactured by British chemist Alfred Bird.</p>
<button class = "timeline-item-more-info">More Items</button></div>

<div class = "casing"><h2 class = "timeline-item-title">Synthetic Organic Dye</h2>
<span class = "timeline-item-date">1856 AD</span>
<p class = "timeline-item-summary">The first synthetic organic dye was discovered.</p>
<button class = "timeline-item-more-info">More Items</button></div>












`;
main.innerHTML = firstContent;
