/*
localStorage.clear()
console.log(localStorage.getItem("item"))
console.log(localStorage.key(0))
const jsonn = {
    main: [
        { first: "JSON", array: [1, 2, 4] }
    ]
}
localStorage.setItem("item", JSON.stringify(jsonn))
let incoming = JSON.parse(localStorage.getItem("item"))
let New_value = { first: "Elderny", array: [46, 663, 23] }
incoming.main.push(New_value)
localStorage.setItem("item", JSON.stringify(incoming))
*/