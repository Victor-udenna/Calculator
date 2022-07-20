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
Btn.addEventListener('click', function (e) {
    const target = e.target;
    if (target.matches('.calculator_key')) {
       disPlay.append(e.target.innerText) 
    }
    
})



// Theme
let backgroundColor = document.querySelector('.container')
let Header = document.querySelector('header');
let inPut = document.querySelector('#calculator_display');
let keyContainer = document.querySelector('#keys_container');
let theme_btncontainer = document.querySelector('.theme_btn_container');
let out_put = document.querySelector('#display-input');
let themeContainer = document.querySelector('.theme_btn_container');
// BUTTON VARIABLE
let btn_0 = document.querySelector('.zero');
let btn_1 = document.querySelector('.one');
let btn_2 = document.querySelector('.two');
let btn_3 = document.querySelector('.three');
let btn_4 = document.querySelector('.four');
let btn_5 = document.querySelector('.five');
let btn_6 = document.querySelector('.six');
let btn_7 = document.querySelector('.seven');
let btn_8 = document.querySelector('.eight');
let btn_9 = document.querySelector('.nine');
let btn_plus = document.querySelector('.plus');
let btn_minus = document.querySelector('.minus');
let btn_divide = document.querySelector('.divide');
let btn_times = document.querySelector('.times');
let btn_clear = document.querySelector('.clear');
let btn_dot = document.querySelector('.dot');
let btn_backspace = document.querySelector('.backspace');
let btn_openbracket = document.querySelector('.open-bracket');
let btn_closebracket = document.querySelector('.close-bracket');
// ......


// LIGHT THEME
let lightThemeBtn = document.getElementById('light_Theme');

function light_Themefnc() {
    backgroundColor.style.backgroundColor = 'gray';
    Header.style.backgroundColor = '#f2f2f4';
    Header.style.color = '#000';
    theme_btncontainer.style.backgroundColor = "";
    inPut.style.backgroundColor = '#f2f2f4';
    inPut.style.borderColor = '#f2f2f4';
    keyContainer.style.backgroundColor = '#fff';
    out_put.style.color = '#000';
    themeContainer.style.backgroundColor = '#5ebee0';
    themeContainer.style.color = 'white';
    // Buttons
    btn_0.style.color = "#000";
    btn_0.style.backgroundColor = '#fff';
    btn_1.style.color = "#000";
    btn_1.style.backgroundColor = '#fff';
    btn_2.style.color = "#000";
    btn_2.style.backgroundColor = '#fff';
    btn_3.style.color = "#000";
    btn_3.style.backgroundColor = '#fff';
    btn_4.style.color = "#000";
    btn_4.style.backgroundColor = '#fff';
    btn_5.style.color = "#000";
    btn_5.style.backgroundColor = '#fff';
    btn_6.style.color = "#000";
    btn_6.style.backgroundColor = '#fff';
    btn_7.style.color = "#000";
    btn_7.style.backgroundColor = '#fff';
    btn_8.style.color = "#000";
    btn_8.style.backgroundColor = '#fff';
    btn_9.style.color = "#000";
    btn_9.style.backgroundColor = '#fff';
    btn_backspace.style.color = "#000";
    btn_backspace.style.backgroundColor = '#fff';
    btn_minus.style.color = "#000";
    btn_minus.style.backgroundColor = '#fff';
    btn_divide.style.color = "#000";
    btn_divide.style.backgroundColor = '#fff';
    btn_times.style.color = "#000";
    btn_times.style.backgroundColor = '#fff';
    btn_plus.style.color = "#000";
    btn_plus.style.backgroundColor = '#fff';
    btn_closebracket.style.color = "#000";
    btn_closebracket.style.backgroundColor = '#fff';
    btn_openbracket.style.color = "#000";
    btn_openbracket.style.backgroundColor = '#fff';
    btn_dot.style.color = "#000";
    btn_dot.style.backgroundColor = '#fff';
    btn_clear.style.color = "#ba3939";
    btn_clear.style.backgroundColor = '#fff';


}

lightThemeBtn.addEventListener('click', light_Themefnc);

let darkThemeBtn = document.querySelector('#dark_Theme');

function darktheme_function() {
    backgroundColor.style.backgroundColor = 'whitesmoke';
    Header.style.backgroundColor = '#10243c';
    Header.style.color = '#fff';
    theme_btncontainer.style.backgroundColor = "";
    inPut.style.backgroundColor = '#10243c';
    inPut.style.borderColor = '#20c4fc';
    keyContainer.style.backgroundColor = '#102444';
    out_put.style.color = '#fff';
    themeContainer.style.backgroundColor = '#ffffff7e';
    themeContainer.style.color = 'white';
    // Buttons
    btn_0.style.color = "#fff";
    btn_0.style.backgroundColor = '#102444';
    btn_1.style.color = "#fff";
    btn_1.style.backgroundColor = '#102444';
    btn_2.style.color = "#fff";
    btn_2.style.backgroundColor = '#102444';
    btn_3.style.color = "#fff";
    btn_3.style.backgroundColor = '#102444';
    btn_4.style.color = "#fff";
    btn_4.style.backgroundColor = '#102444';
    btn_5.style.color = "#fff";
    btn_5.style.backgroundColor = '#102444';
    btn_6.style.color = "#fff";
    btn_6.style.backgroundColor = '#102444';
    btn_7.style.color = "#fff";
    btn_7.style.backgroundColor = '#102444';
    btn_8.style.color = "#fff";
    btn_8.style.backgroundColor = '#102444';
    btn_9.style.color = "#fff";
    btn_9.style.backgroundColor = '#102444';
    btn_backspace.style.color = "#fff";
    btn_backspace.style.backgroundColor = '#102444';
    btn_minus.style.color = "#fff";
    btn_minus.style.backgroundColor = '#102444';
    btn_divide.style.color = "#fff";
    btn_divide.style.backgroundColor = '#102444';
    btn_times.style.color = "#fff";
    btn_times.style.backgroundColor = '#102444';
    btn_plus.style.color = "#fff";
    btn_plus.style.backgroundColor = '#102444';
    btn_closebracket.style.color = "#fff";
    btn_closebracket.style.backgroundColor = '#102444';
    btn_openbracket.style.color = "#fff";
    btn_openbracket.style.backgroundColor = '#102444';
    btn_dot.style.color = "#fff";
    btn_dot.style.backgroundColor = '#102444';
    btn_clear.style.color = "#ba3939";
    btn_clear.style.backgroundColor = '#102444';
    
}


darkThemeBtn.addEventListener('click', darktheme_function);