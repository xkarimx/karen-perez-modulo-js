const cards = document.getElementById("div-cards")
let info = data.events
let card = " "

for (let infoEvent of info){
card += `<div class="card mb-3 p-2 cover"  style="width: 18rem;">
<img src=${infoEvent.image} class="card-img-top h-50" alt="event">
<div class="card-body ">
  <h5 class="card-title h-25">${infoEvent.name}</h5>
    <p class="card-text h-50">${infoEvent.description}</p>
  <div class="d-flex justify-content-evenly align-items-center">  
    <p class="m-0">${infoEvent.price}</p>
    <a href="./details.html" class="btn btn-outline-danger">Details</a>
  </div>
</div>
</div>`
}
cards.innerHTML = card