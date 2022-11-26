
// 2. Напишите скрипт, который меняет фон div-ов по клику на них

// 3. Напишите простую галерею на 2+ картинки с кнопками Вперед и Назад 
// (*она не должна работать идеально, это пока просто заготовка на будущее!*)


// 4. Воспользовавшись дебаггером, пройдите по шагам все практическое домашнее задание. 
// Если что-то не работает, попытайтесь понять, почему


const data = document.querySelector('.data');
const inputPage = document.getElementById("inputHi");
const btnPage = document.getElementById("btnHi");


function getInputValue() {

    console.log(inputPage.value);
    const userName = document.getElementById("inputHi").value;
    data.innerHTML = "Привет, " + userName + ", приятно познакомиться!"
    

}


const data2 = document.querySelector('.calcData');
const inputOne = document.getElementById("calcInput1");
const operation = document.getElementById("calc");
const inputTwo = document.getElementById("calcInput2");
const countBtn = document.getElementById("calcBtn");


function getCalcValuePlus() {
    const num1 = Number(document.getElementById("calcInput1").value);
    const num2 = Number(document.getElementById("calcInput2").value);
    const result = num1 + num2;
    data2.innerHTML = "Ответ: " + result;
}

function getCalcValueMinus() {
    const num1 = Number(document.getElementById("calcInput1").value);
    const num2 = Number(document.getElementById("calcInput2").value);
    const result = num1 - num2;
    data2.innerHTML = "Ответ: " + result;
}

function getCalcValueMult() {
    const num1 = Number(document.getElementById("calcInput1").value);
    const num2 = Number(document.getElementById("calcInput2").value);
    const result = num1 * num2;
    data2.innerHTML = "Ответ: " + result;
}

function getCalcValueDivis() {
    const num1 = Number(document.getElementById("calcInput1").value);
    const num2 = Number(document.getElementById("calcInput2").value);
    const result = num1 / num2;
    data2.innerHTML = "Ответ: " + result;
}



function changeColor ()
{
    let newColor = document.getElementById('divColor');
    newColor.style.backgroundColor = 'rgb(220, 171, 255)';
    setTimeout(() => newColor.style.background = "", 1500);
}

