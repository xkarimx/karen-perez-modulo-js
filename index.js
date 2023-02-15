import { printCards, printChecks, checkboxCategory, filterSearch } from "./asetts/scripts/module/functions.js"


const cards = document.getElementById("div-cards")
const check = document.getElementById("div-checkbox")
const search = document.getElementById("input-search")


let info;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then((data) => {
          info = data.events    
          printCards(info, cards)
          const categoryRepeat = info.map(eventmap => eventmap.category)
          const categorySet = new Set (categoryRepeat)
          const categorySetArray = [...categorySet]
          printChecks(categorySetArray, check)
        })
        .catch(err => console.log(err))

        check.addEventListener('change',(e)=>{
          let searchValue = search[0].value.toLowerCase()
          let arrayFilterSearch = filterSearch(searchValue, info)
          let checksAndSearchFilter = checkboxCategory(arrayFilterSearch)
          printCards(checksAndSearchFilter, cards)
        })
        search.addEventListener('keyup', (e)=>{
          let searchValue = search[0].value.toLowerCase()
          let arrayFilterSearch = filterSearch(searchValue, info)
          let checksAndSearchFilter = checkboxCategory(arrayFilterSearch)
          printCards(checksAndSearchFilter, cards)
        })