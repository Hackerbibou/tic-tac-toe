let player1 = 'X'
let player2 = 'O'
let gameboard = [];
let moves = 0;


let box1 = document.querySelector('.box1')
let box1V = false
let solution = document.querySelector('#solution')

box1.addEventListener('click', function(){
    if(box1V === false)
    {if(moves % 2 === 0) {
        box1.innerText = 'X'
        box1.style.backgroundColor='orange'
       
    }else {
        box1.innerText = 'O'
        box1.style.backgroundColor='purple'
     
    }
    box1V = true
    moves += 1}
    solution.innerText = checker()
})


let box2 = document.querySelector('.box2')
let box2V = false
box2.addEventListener('click', function(){
    if(box2V === false)
    {if(moves % 2 === 0) {
        box2.innerText = 'X'
        box2.style.backgroundColor='orange'
   
    }else {
        box2.innerText = 'O'
        box2.style.backgroundColor='purple'
    }
    box2V = true
    moves += 1}
    solution.innerText = checker()
})

let box3 = document.querySelector('.box3')
let box3V = false
box3.addEventListener('click', function(){
    if(box3V === false)
    {if(moves % 2 === 0) {
        box3.innerText = 'X'
        box3.style.backgroundColor='orange'
    }else {
        box3.innerText = 'O'
        box3.style.backgroundColor='purple'
    }
    box3V = true
    moves += 1}
    solution.innerText = checker()
})

let box4 = document.querySelector('.box4')
let box4V = false
box4.addEventListener('click', function(){
    if(box4V === false)
    {if(moves % 2 === 0) {
        box4.innerText = 'X'
        box4.style.backgroundColor='orange'
    }else {
        box4.innerText = 'O'
        box4.style.backgroundColor='purple'
    }
    box4V = true
    moves += 1}
    solution.innerText = checker()
})

let box5 = document.querySelector('.box5')
let box5V = false
box5.addEventListener('click', function(){
    if(box5V === false)
    {if(moves % 2 === 0) {
        box5.innerText = 'X'
        box5.style.backgroundColor='orange'
    }else {
        box5.innerText = 'O'
        box5.style.backgroundColor='purple'
    }
    box5V = true
    moves += 1}
    solution.innerText = checker()
})

let box6 = document.querySelector('.box6')
let box6V = false
box6.addEventListener('click', function(){
    if(box6V === false)
    {if(moves % 2 === 0) {
        box6.innerText = 'X'
        box6.style.backgroundColor='orange'
    }else {
        box6.innerText = 'O'
        box6.style.backgroundColor='purple'
    }
    box6V = true
    moves += 1}
    solution.innerText = checker()
})

let box7 = document.querySelector('.box7')
let box7V = false
box7.addEventListener('click', function(){
    if(box7V === false)
    {if(moves % 2 === 0) {
        box7.innerText = 'X'
        box7.style.backgroundColor='orange'
    }else {
        box7.innerText = 'O'
        box7.style.backgroundColor='purple'
    }
    box7V = true
    moves += 1}
    solution.innerText = checker()
})

let box8 = document.querySelector('.box8')
let box8V = false
box8.addEventListener('click', function(){
    if(box8V === false)
    {if(moves % 2 === 0) {
        box8.innerText = 'X'
        box8.style.backgroundColor='orange'
    }else {
        box8.innerText = 'O'
        box8.style.backgroundColor='purple'
    }
    box8V = true
    moves += 1}
    solution.innerText = checker()
})

let box9 = document.querySelector('.box9')
let box9V = false
box9.addEventListener('click', function(){
    if(box9V === false)
    {if(moves % 2 === 0) {
        box9.innerText = 'X'
        box9.style.backgroundColor='orange'
    }else {
        box9.innerText = 'O'
        box9.style.backgroundColor='purple'
    }
    box9V = true
    moves += 1}
    solution.innerText = checker()
})

function checker() {
    if(box1.innerText === box5.innerText && box9.innerText === box5.innerText) {
        if(box1.innerText === player1) {return 'player1 Won'}
        else {
            return 'player2 Won'
        }
    }
    if(box3.innerText === box5.innerText && box7.innerText === box5.innerText) {
        if(box3.innerText === player1) {return 'player1 Won'}
        else {
            return 'player2 Won'
        }
    }
    
    if(box1.innerText === box4.innerText && box4.innerText === box7.innerText) {
        if(box1.innerText === player1) {return 'player1 Won'}
        else {
            return 'player2 Won'
        }
    }
    
    
    if(box2.innerText === box5.innerText && box5.innerText === box8.innerText) {
        if(box2.innerText === player1) {return 'player1 Won'}
        else {
            return 'player2 Won'
        }
    }
    
    
    if(box3.innerText === box6.innerText && box9.innerText === box6.innerText) {
            if(box3.innerText === player1) {return 'player1 Won'}
            else {
                return 'player2 Won'
            }
        }
    
    
        if(box1.innerText === box2.innerText && box2.innerText === box3.innerText) {
            if(box1.innerText === player1) {return 'player1 Won'}
            else {
                return 'player2 Won'
            }
        }
    
    if(box3.innerText === box5.innerText && box5.innerText === box7.innerText) {
        if(box3.innerText === player1) {return 'player1 Won'}
        else {
            return 'player2 Won'
        }
    }
    if(box4.innerText === box5.innerText && box5.innerText === box6.innerText) {
        if(box4.innerText === player1) {return 'player1 Won'}
        else {
            return 'player2 Won'
        }
    }
        if(box7.innerText === box8.innerText && box8.innerText === box9.innerText) {
            if(box7.innerText === player1){return 'player1 Won'}
            else {
                return 'player2 Won'
            }
        }

    return 'Nobody Won, keep playing'
    }

    let button = document.getElementById('restardBtn')
    button.addEventListener('click', function() {
        window.location.reload()
    })