export function printCards (e, container){
    if(e.length === 0){
      container.innerHTML = `<div><p>Event not found</p>
        <img src="https://static.thenounproject.com/png/3653194-200.png" class="img-fluid" style="width: 10rem; height: 10rem;" alt="event"></div>`
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
  container.innerHTML = card
  } 
    }

export function printCardsUp (e, container){
    if(e.length === 0){
        container.innerHTML = `<div><p>Event not found</p>
        <img src="https://static.thenounproject.com/png/3653194-200.png" class="img-fluid" style="width: 10rem; height: 10rem;" alt="event"></div>`
    } else {
        let card = " "
      for(let infoEvent of e) {
          if (infoEvent.date > data.currentDate)
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
    container.innerHTML = card
    }
    }

export function printCardsPast (e, container){
        if(e.length === 0){
          container.innerHTML = `<div><p>Event not found</p>
          <img src="https://static.thenounproject.com/png/3653194-200.png" class="img-fluid" style="width: 10rem; height: 10rem;" alt="event"></div>`
        } else {
        let card = " "
      for(let infoEvent of e) {
          if (infoEvent.date < data.currentDate)
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
          container.innerHTML = card
        }
      }

export function printCardDetails (container, data){
    container.innerHTML = `<div class="card mb-3 card-detail m-sm-3">
        <div class="row gap-3">
          <div class="col-md-4">
            <img src="${data.image}" class="img-fluid rounded-start p-3"  style="max-width: 300px; alt="...">
          </div>
          <div class="col-md-8" style="width: 30rem;">
            <div class="card-body m-0 style="width: 15rem;"">
              <h1 class="card-title text-center">${data.name}</h1>
              <p class="card-text text-center">${data.description}</p>
              <p class="card-text ms-4"><small class="text-muted">Date: ${data.date}</small></p>
              <p class="card-text ms-4"><small class="text-muted">Category: ${data.category}</small></p>
              <p class="card-text ms-4"><small class="text-muted">Place: ${data.place}</small></p>
              <p class="card-text ms-4"><small class="text-muted">Capacity: ${data.capacity}</small></p>
              <p class="card-text ms-4"><small class="text-muted">Asistence: ${estimateAsistence(data)}</small></p>
              <p class="card-text ms-4"><small class="text-muted">$${data.price}</small></p>
            </div>
          </div>
        </div>
        </div>`
}

export function printChecks(list, containerchecks){
    for(let checks of list) {
        containerchecks.innerHTML += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" value="${checks}" id="${checks}">
        <label class="form-check-label" for="${checks}">${checks}</label>
      </div>`
    }
    }

export function checkboxCategory (e){
    const checkeds = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(check => check.value)
        if(checkeds.length === 0){
            return (e)
    }
            return e.filter(filtered => checkeds.includes(filtered.category))
    }

export function filterSearch(search, e){
    let arrayFilter = e.filter(searchFilter => searchFilter.name.toLowerCase().includes(search))
        return arrayFilter
    }
    

export function estimateAsistence(item) {
    let muestra = '';
        if (item.assistance) {
            muestra = item.assistance;
        } else if (item.estimate) {
            muestra = item.estimate;
        }
        return muestra;
    }