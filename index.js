const cards = document.getElementById("div-cards");
const eventsCard = document.getElementsByClassName("card");
const info = data.events


function printCards (e){
  if(e.length === 0){
    cards.innerHTML = `<div><p>Event not found</p>
      <img src="https://static.thenounproject.com/png/3653194-200.png" class="img-fluid" style="width: 20rem; height: 15rem;" alt="event"></div>`
  } else {
  let card = ""
for (let infoEvent of e) {
  card += `<div class="card mb-3 p-2 cover"  style="width: 18rem;">
<img src=${infoEvent.image} class="card-img-top h-50" alt="event">
<div class="card-body ">
  <h5 class="card-title h-50">${infoEvent.name}</h5>
  <div class="d-flex justify-content-evenly align-items-center">  
    <p class="m-0">$${infoEvent.price}</p>
    <a href="./details.html?_id=${infoEvent._id}&name=${infoEvent.name}" class="btn btn-outline-danger">Details</a>
  </div>
</div>
</div>`
}
cards.innerHTML = card
}
    
}

printCards(info)




const check = document.getElementById("div-checkbox")


const categoryRepeat = info.map(eventmap => eventmap.category)
const categorySet = new Set (categoryRepeat)
const categorySetArray = [...categorySet]

function printChecks(list){
for(let checks of categorySetArray) {
    check.innerHTML += `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" value="${checks}" id="${checks}">
    <label class="form-check-label" for="${checks}">${checks}</label>
  </div>`
}
}
printChecks(categorySetArray)


check.addEventListener("change", (e) =>{
  let aux = checkboxCategory(info)
  printCards(aux)
})


function checkboxCategory (e){
  const checkeds = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(check => check.value)
    if(checkeds.length === 0){
      return (e)
    }
    return e.filter(filtered => checkeds.includes(filtered.category))
}



const search = document.getElementById("input-search");

search.addEventListener("keyup", (e) => {
    if (e.target.matches("#input-search")) {
      document.querySelectorAll(".cover").forEach((box) => {
        box.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ?box.classList.remove("filter")
          :box.classList.add("filter");
      });
    }
});



search.addEventListener("submit" , (e) => {
  e.preventDefault();
});



