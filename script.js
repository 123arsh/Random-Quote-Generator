const quoteElement = document.getElementById('quote');
const add = document.getElementById('add')
const containers = document.getElementById('container02')
const submit = document.getElementById('button02')
const refresh = document.getElementById('refresh')

const quotes = [
    "Code is like humor; when you have to explain it, it's bad. - Cory House",
"The best error message is the one that never shows up. - Thomas Fuchs",
"Code never lies, comments sometimes do. - Ron Jeffries",
"Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
"Code is read much more than it is written. - Guido van Rossum",
"The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
"Code is a language that humans use to instruct computers to do things. - Guido van Rossum",
"Code is where human ingenuity meets the cold, hard logic of machines. - Erik Dietrich",
"Writing code is like solving puzzles, but you're also the one creating the puzzles. - Emily Pitts",
"Good code is its own best documentation. - Steve McConnell",
"The computer programmer is a creator of universes for which he alone is responsible. - Joseph Weizenbaum",
"The art of programming is the skill of controlling complexity. - Marijn Haverbeke",
"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - Martin Golding",
] 
function reload() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}
reload()

//default value of inputContainer
containers.style.opacity = '0'

//opacity Up and Down Function
const opacityUp = () =>{
    containers.style.opacity = '1'
}
opacityUp()
const opacityDown = () =>{
    containers.style.opacity = '0'
}
opacityDown()

//Quote add Function in Array
add.addEventListener('click',()=>{
    containers.style.opacity = '1'
    quotes.push(input.value)
})
submit.addEventListener('click',()=>{
    containers.style.opacity = '0'
    input.value = ''
})