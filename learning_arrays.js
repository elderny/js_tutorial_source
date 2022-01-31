/*
let randomArray = [20, 50, 0, 73, 525, 424]
let another_array = [...randomArray]
another_array.push(52)
console.log(another_array)

for (i = 0; i < randomArray.length; i++) {
    if(randomArray[i] == 0)randomArray[i]=10
    console.log(randomArray[i])
}
randomArray.forEach((e, i, a) => {
    if (e == 0) a[i] = 10;
    if (e == 525) a.push(500)
    if (e == 525) a.splice(i, 1)
})
randomArray.sort((a, b) => a - b)
let new_array = randomArray.map(x => {
    if (x == 0) return 10
    return x
})
console.log(randomArray)

let value = 10
console.log(randomArray)
randomArray.push(value)
console.log(randomArray)
randomArray.splice(0, 1)
randomArray.splice(1, 1)
randomArray.sort((a, b) => a - b)
randomArray.reverse()
let filteredArray = randomArray.filter(number => number < 100)
let total_sum = 0;
randomArray.map(number => total_sum += number)
console.log(total_sum)
console.log(filteredArray)
randomArray.splice(1, 2)
randomArray.pop()
console.log(randomArray)
*/