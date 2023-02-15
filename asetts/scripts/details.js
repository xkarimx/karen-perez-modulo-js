import { printCardDetails } from "./module/functions.js"

const cards = document.getElementById("div-cards")


let info;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then((data) => {
        info = data.events 
        const queryString = location.search
        const params = new URLSearchParams(queryString)
        const id = params.get("_id")
        const dataFind = data.events.find(card => card._id == id)
        printCardDetails(cards, dataFind)
        })
        .catch(err => console.log(err))



