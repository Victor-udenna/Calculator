// // 0
// let btn_0 = document.querySelector('.zero')

// function disPlay_0() {
//   return console.log(btn_0.innerText)
// }
// btn_0.addEventListener('click', disPlay_0)
// // 1
// let btn_1 = document.querySelector('.one')
// function disPlay_1() {
//   return console.log(btn_1.innerText)
// }

// btn_1.addEventListener('click', disPlay_1)
// // 2
// let btn_2 = document.querySelector('.two')
// function disPlay_2() {
//   return console.log(btn_2.innerText)
// }
// btn_2.addEventListener('click', disPlay_2)
// // 3
// let btn_3 = document.querySelector('.three')
// function disPlay_3() {
//   return console.log(btn_3.innerText)
// }
// btn_3.addEventListener('click', disPlay_3)
// // 4
// let btn_4 = document.querySelector('.four')
// function disPlay_4() {
//   return console.log(btn_4.innerText)
// }
// btn_4.addEventListener('click', disPlay_4)
// // 5
// let btn_5 = document.querySelector('.five')
// function disPlay_5() {
//   return console.log(btn_5.innerText)
// }
// btn_5.addEventListener('click', disPlay_5)
// // 6
// let btn_6 = document.querySelector('.six')
// function disPlay_6() {
//   return console.log(btn_6.innerText)
// }
// btn_6.addEventListener('click', disPlay_6)
// // 7
// let btn_7 = document.querySelector('.seven')
// function disPlay_7() {
//   return console.log(btn_7.innerText)
// }
// btn_7.addEventListener('click', disPlay_7)
// // 8
// let btn_8 = document.querySelector('.eight')
// function disPlay_8() {
//   return console.log(btn_8.innerText)
// }
// btn_8.addEventListener('click', disPlay_8)
// // 9
// let btn_9 = document.querySelector('.nine')
// function disPlay_9() {
//   return console.log(btn_9.innerText)
// }
// btn_9.addEventListener('click', disPlay_9)
// // dot
// let btn_dot = document.querySelector('#dot')
// function disPlay_dot() {
//   return console.log(btn_dot.innerText)
// }
// btn_dot.addEventListener('click', disPlay_dot)
// // Plus
// let btn_plus = document.querySelector('.add')
// function disPlay_plus() {
//   return console.log(btn_plus.innerText)
// }
// btn_plus.addEventListener('click', disPlay_plus)
// // subtract
// let btn_subtract = document.querySelector('.subtract')
// function disPlay_subtract() {
//   return console.log(btn_subtract.innerText)
// }
// btn_subtract.addEventListener('click', disPlay_subtract)
// // multiply
// let btn_times = document.querySelector('.times')
// function disPlay_times() {
//   return console.log(btn_times.innerText)
// }
// btn_times.addEventListener('click', disPlay_times)
// // divide
// let btn_divide = document.querySelector('.divide')
// function disPlay_divide() {
//   return console.log(btn_divide.innerText)
// }
// btn_divide.addEventListener('click', disPlay_divide)


// document.querySelector('.five').addEventListener('click', function (e) {
//     const target = e.target;
//     if (target.matches('button')) {
//         target.style.backgroundColor = 'green'
//         console.log(5);
//     }
// })
// console.log(112);

let disPlay = document.getElementById('display-input');


let Btn = document.querySelector('#keys_container');
// console.log(Btn);
Btn.addEventListener('click', function (e) {
    const target = e.target;
    if (target.matches('.calculator_key')) {
       disPlay.append(e.target.innerHTML) 
    }
    
})