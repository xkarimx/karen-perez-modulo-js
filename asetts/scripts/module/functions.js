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
      