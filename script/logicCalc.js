"use strict";

const calc = document.getElementById("calc");
const display = document.getElementById("display");

calc.onclick = (event) => {
    console.log("Target CLICK: " + event.target.id);
    changeBtn(event.target.id);
};

let changeBtn = (btnID) => {
    switch (btnID) {
        //группа чисел
        case "num0":
        case "num1":
        case "num2":
        case "num3":
        case "num4":
        case "num5":
        case "num6":
        case "num7":
        case "num8":
        case "num9":
            printNum(btnID);
            break;
        //бакспейс
        case "clear":
            backSpase();
            break;
        //плюс\минус
        case "numMark":
            numMark();
            break;
        //десятичная точка
        case "dot":
            dotPoint();
            break;
         // очистка последнего ввода
        case "c":
            displayClear();
            break;
    }
};
//печать чисел
let printNum = (btnID) => {
    let numDec = btnID.substr(3);
    console.log("printNUM: " + numDec);

    if (displayOverflow()){
        console.log(displayOverflow());
        display.innerText += numDec;
    }
};
//стирание последней цифры
let backSpase = () => {
    display.innerText = display.innerText.slice(0, -1);
};
//проверка на максимально количество символов на дисплее
let displayOverflow = () => {
    return display.innerHTML.length <= 10;
};
//знак числа
let numMark = () => {
    let textStr = display.innerText;
    if (textStr.slice(0, 1) === "-") {
        console.log("numMark -");
        display.innerText = textStr.slice(1);
    } else {
        console.log("numMark +");
        display.innerText = textStr.padStart(textStr.length + 1, "-");
    }
};
//десятичная точка
let dotPoint = () => {
    let texStr = display.innerText;

    if (!(texStr.indexOf(".") >= 0) && (displayOverflow())) {
        display.innerText += ".";
    }
};

// очистка
let displayClear = () => {
    display.innerText = "";
};