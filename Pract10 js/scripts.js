//Функция суммирования для корзины
function Summ(firstsum) {
    this.value = firstsum;

    this.addInput = function() {
        this.value += +prompt('Введите число для суммирования');
    };

    this.showValue = function() {
        alert("Сумма = " + this.value);
    };
}
var adder = new Summ(0);
adder.addInput();
adder.addInput();
adder.addInput();
adder.showValue();

// Сокращение текста до трех точек
let socrText = document.getElementById("socr");
let socrbtn = document.getElementById("socrbtn");

socrbtn.addEventListener("click", () => {
    // Если длина строки больше 20, сокращаем
    socrText.textContent = truncate(socrText.textContent, 20);
});
//Функция
function truncate(str, n) {
    //Если длина строки больше заданной, обрезаем на 1 символ больше и вместо него ...
    if (str.length > n) {
        return str.slice(0, n) + "...";
    }
    //Иначе просто вернуть
    return str;
}


// Капча
let submitButton = document.getElementById("submit-button");
let userInput = document.getElementById("user-input");
let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-button");
let text = "";
let text_2 = "";
let answer = 0;
let j;


//Ф-я создания случайной суммы для капчи
let n1 = 0;
let n2 = 0;
//Ф-я случайного числа
const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const numberGenerator = () => {
    let generatedText = "";
    n1 = randomNumber(0,20);
    n2 = randomNumber(0,40);
    generatedText += n1.toString();
    generatedText += "+";
    generatedText += n2.toString();
    return generatedText;
};

//Ф-я создания букв
let alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
          '0','1','2','3','4','5','6','7','8','9');
const textGenerator = () => {
    let text = "";
    for (j=0;j<6;j++){
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
    var e = alpha[Math.floor(Math.random() * alpha.length)];
    }
    text = a + ' ' + b + ' '  + c + ' ' + d + ' ' + e;
    text_2 = text;
    return text;
};


function drawStringOnCanvas(string) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const textColor = "rgb(255,255,255)";
    const letterSpace = 100 / string.length;
    for (let i = 0; i < string.length; i++) {
        const xInitialSpace = 45;
        ctx.font = "20px Roboto";
        ctx.fillStyle = textColor;
        ctx.fillText(
            string[i],
            xInitialSpace + i * letterSpace, 40, 100);
    }
}

//Ф-я вывода в наше окно примера
function triggerFunction() {
    userInput.value = "";
    text = numberGenerator();
    console.log(text);
    drawStringOnCanvas(text);
}
//Ф-я вывода в окно символов
function triggerFunction_2() {
    userInput.value = "";
    text_2 = textGenerator();
    console.log(text_2);
    drawStringOnCanvas(text_2);
}


//Вызываем сначала пример
reloadButton.addEventListener("click", triggerFunction);
window.onload = () => triggerFunction();

//При нажатии подтверждения проверяем
submitButton.addEventListener("click", () => {
    answer = n1 + n2;
    text = answer.toString();
    if (userInput.value === text) {
        alert("Правильно");
        activeButton.removeAttribute('disabled');
    } 
    else {
        alert("Неправильно");
        triggerFunction_2();   
    }
});





