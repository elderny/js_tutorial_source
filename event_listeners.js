/*
const Name = document.getElementById("name")
const Email = document.getElementById("email")
const Password = document.getElementById("password")

formId.addEventListener("submit", () => {
    // e.preventDefault()
    if (Name.value.length < 2) return
    else if (Email.value.length < 10) return
    else if (Password.value.length < 2) return
    console.log(`Name is: ${Name.value}, Email is ${Email.value}, Password is ${Password.value}`)
})

const NameFun = () => {
    console.log(Name.value)
}
const NamePrinter = () => console.log(Name.value)
Name.addEventListener("change", NameFun)
Name.addEventListener("input", NameFun)
Name.addEventListener("click", NameFun)
Name.addEventListener("mouseenter", NameFun)
Name.addEventListener("focusin", () => console.log("FOCUSED"))
Name.addEventListener("focusout", () => console.log("User left the website"))
Name.addEventListener("copy", () => console.log("copy"))
Name.addEventListener("paste", () => console.log("paste"))
Name.addEventListener("", () => console.log("paste"))
setInterval(() => {
    console.log(Name.value)
    clearInterval()
}, 1000);

setTimeout(() => {
    console.log(Name.value)
}, 2000);
*/

const runFun = (e) => {
    console.log(e)
}