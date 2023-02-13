const cards = document.getElementById("div-cards")
const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("_id")

const dataFind = data.events.find(card => card._id == id)




function estimateAsistence(item) {
  let muestra = '';
  if (item.assistance) {
      muestra = item.assistance;
  } else if (item.estimate) {
      muestra = item.estimate;
  }
  return muestra;
}

function printCardsDetails (item){
item.innerHTML = `<div class="card mb-3 card-detail m-sm-3">
<div class="row gap-3">
  <div class="col-md-4">
    <img src="${dataFind.image}" class="img-fluid rounded-start p-3"  style="max-width: 300px; alt="...">
  </div>
  <div class="col-md-8" style="width: 30rem;">
    <div class="card-body m-0 style="width: 15rem;"">
      <h1 class="card-title text-center">${dataFind.name}</h1>
      <p class="card-text text-center">${dataFind.description}</p>
      <p class="card-text ms-4"><small class="text-muted">${dataFind.date}</small></p>
      <p class="card-text ms-4"><small class="text-muted">${dataFind.category}</small></p>
      <p class="card-text ms-4"><small class="text-muted">${dataFind.place}</small></p>
      <p class="card-text ms-4"><small class="text-muted">${dataFind.capacity}</small></p>
      <p class="card-text ms-4"><small class="text-muted">${estimateAsistence(dataFind)}</small></p>
      <p class="card-text ms-4"><small class="text-muted">$${dataFind.price}</small></p>
    </div>
  </div>
</div>
</div>`
}


printCardsDetails(cards)




