function renderData(){


data.forEach((card) => {
 const cardContainer = document.createElement("div");
 cardContainer.className = "card"
 cardContainer.innerHTML = `<div class="card">
 <div class="top">
 <div class="left">
     <span class="budge ${card.status.ToLowerCase}">${card.status}</span>
      <span class="case-number">${card.caseNumber} </span>
 </div>
 <div class="right">${card.date} </div>
 </div>
 <div class="bottom">
   <div class="from-location"> ${card.fromLocation} </div>
   <div class="to-location"> ${card.toLocation} </div>
   <div class="price"> ${card.fare}</div>
 </div>
</div>`
});
}