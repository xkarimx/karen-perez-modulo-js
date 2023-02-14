import { printCardDetails, estimateAsistence } from "./module/functions.js"

const cards = document.getElementById("div-cards")
const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("_id")

const dataFind = data.events.find(card => card._id == id)



printCardDetails(cards, dataFind)




