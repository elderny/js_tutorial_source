/*
const getting_info = async () => {
    return result = await fetch("https://gorest.co.in/public/v1/users/100/posts")
        .then(res => res.json())
}
let some_var;
getting_info().then(res => some_var = res)
setTimeout(() => {
    console.log(some_var)
}, 1000);
const test_data = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
fetch("https://reqres.in/api/register", {
    method: "POST",
    body: JSON.stringify(test_data),
    headers: {
        "Content-Type": "application/json"
    }
}).then(res => res.json())
    .then(data => console.log(data))

let test = "this is test"
const json = {
    something: "nothing",
    array: [1, 24],
    testing: test
}
let stringJSON = JSON.stringify(json)
console.log(stringJSON);
let BackToJson = JSON.parse(stringJSON)
console.log(BackToJson.array)
*/


fetch("/js/random.txt")
    .then(res => res.text())
    .then(data => console.log(data))