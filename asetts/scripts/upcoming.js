import { printCardsUp, printChecks, checkboxCategory, filterSearch } from "./module/functions.js"

const cards = document.getElementById("div-cards")
const check = document.getElementById("div-checkbox")
const search = document.getElementById("input-search")


let info;
let date;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then((data) => {
          info = data.events
          date = data.currentDate
          let filterDate = info.filter(dates => dates.date > data.currentDate)
          printCardsUp(filterDate, cards, date)
          const categoryRepeat = filterDate.map(eventmap => eventmap.category)
          const categorySet = new Set (categoryRepeat)
          const categorySetArray = [...categorySet]
          printChecks(categorySetArray, check)
        })
        .catch(err => console.log(err))
  
check.addEventListener('change',(e)=>{
  let searchValue = search[0].value.toLowerCase()
  let arrayFilterSearch = filterSearch(searchValue, info)
  let checksAndSearchFilter = checkboxCategory(arrayFilterSearch)
  printCardsUp(checksAndSearchFilter, cards, date)
})

search.addEventListener('keyup', (e)=>{
  let searchValue = search[0].value.toLowerCase()
  let arrayFilterSearch = filterSearch(searchValue, info)
  let checksAndSearchFilter = checkboxCategory(arrayFilterSearch)
  printCardsUp(checksAndSearchFilter, cards, date)
})
