import { printCardsUp, printChecks, checkboxCategory, filterSearch } from "./module/functions"

const cards = document.getElementById("div-cards")
let info = data.events

const check = document.getElementById("div-checkbox")
const categoryRepeat = info.map(eventmap => eventmap.category)
const categorySet = new Set (categoryRepeat)
const categorySetArray = [...categorySet]

const search = document.getElementById("input-search")



printCardsUp(info, cards)


printChecks(categorySetArray)

 
check.addEventListener('change',(e)=>{
  let searchValue = search[0].value.toLowerCase()
  let arrayFilterSearch = filterSearch(searchValue, info)
  let checksAndSearchFilter = checkboxCategory(arrayFilterSearch)
  printCardsUp(checksAndSearchFilter, cards)
})


search.addEventListener('keyup', (e)=>{
  let searchValue = search[0].value.toLowerCase()
  let arrayFilterSearch = filterSearch(searchValue, info)
  let checksAndSearchFilter = checkboxCategory(arrayFilterSearch)
  printCardsUp(checksAndSearchFilter, cards)
})
