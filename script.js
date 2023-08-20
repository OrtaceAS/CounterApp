const countEl = document.getElementById("counter")
const add = document.getElementById("add")
const subtract = document.getElementById("subtract")
const clear = document.getElementById("clear")
const setValue = document.getElementById("setValue")

let input = document.getElementById("setInput")


let count = 0

function changeCount(){
    countEl.textContent = count
}

add.addEventListener("click", function(){
    count += 1
    changeCount()
    console.log(count)
})

subtract.addEventListener("click", function(){
    count -= 1
    if(count<0)
    {
        count +=1
    }
    changeCount()
})

clear.addEventListener("click", function(){
    count = 0
    changeCount()
})

setValue.addEventListener("click", function(){
    count = +input.value
    console.log(count)
    changeCount()
})