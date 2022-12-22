// Практика 11

//Массив с товарами
let mas = [];
let items = document.querySelectorAll('.elem');

for(i = 0; i < items.length; i++)
    mas.push(items[i]);

let replace = document.getElementById('replace');
let rem = document.getElementById('remove');

let buff;
let f = 0;
replace.onclick = function() {
    if (f == 0){
        f = 1;

        alert(mas[2].innerHTML + " -> " + mas[4].innerHTML);
        buff = mas[2].innerHTML;
        mas[2].innerHTML = mas[4].innerHTML;
        mas[4].innerHTML = buff;
    }
    else{
        f = 0;

        alert(mas[1].innerHTML + " -> " + mas[3].innerHTML);
        buff = mas[1].innerHTML;
        mas[1].innerHTML = mas[3].innerHTML;
        mas[3].innerHTML = buff;
    }
};
let f1 = 0;
rem.onclick = function() {
    if (f1 == 0){
        f1 = 1;
        mas[0].style.display = "none";
    }
    else{
        f1 = 0;
        mas[0].style.display = "block";
    }
}


//Выбор элементов
let filt = [];
let a = document.querySelectorAll('.filt_elm');
for(i = 0; i < a.length; i++)
    filt.push(a[i].innerHTML);
filt = filt.map(item => Number(item));


let filting = document.getElementById('filting');
filting.onclick = function () {
    let min = Number(prompt("Введите нижнюю границу", "0"));
    let max = Number(prompt("Введите Верхнюю границу", "1000"));

    alert("Выбраны числа в диапазоне [" + min + "," + max + "]");

    let new_filt = filt.filter((a) => {
        if (a >= min && a <= max) return true;
        return false;
    });

    let f = document.getElementsByClassName('new_f')
    for(j = 0 ; j < filt.length; j ++){
        f[j].innerHTML = "";
    }
    for(j = 0 ; j < new_filt.length; j ++){
        f[j].innerHTML = new_filt[j];
    }
}


// Сортировка массива
function compareCountsUp(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
function compareCountsDown(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}
sort.onclick = function () {
    let s = prompt("Как сортировать", "По возрастанию");

    if(s == "По возрастанию")
        filt.sort(compareCountsUp);
    if(s == "По убыванию")
        filt.sort(compareCountsDown);

    let f1 = document.getElementsByClassName('new_f');
    for(j = 0 ; j < filt.length; j ++)
        f1[j].innerHTML = filt[j];  
}


// Уведомления
let num = document.getElementById('number');
let counter = 4;
function notification_plus(){
    counter += 1;
    num.innerHTML = counter;

    let new_li = document.createElement('li');

    let new_span = document.createElement('span');
    new_span.classList.add('icon');

    let new_i = document.createElement('i');
    new_i.classList.add('fa-solid');
    new_i.classList.add('fa-user');

    let new_span1 = document.createElement('span');
    new_span1.classList.add('text');
    new_span1.textContent = "Новое уведомление";

    new_span.appendChild(new_i);

    new_li.appendChild(new_span);
    new_li.appendChild(new_span1);

    let out_ul = document.getElementById("app");
    out_ul.appendChild(new_li);
}

notify_box = document.getElementById('not_hover')
notify_box.addEventListener('click', () => {
    clearInterval(notify_plus);
    setTimeout(function() {
        notify_plus = setInterval(notification_plus, 3000);
    }, 10000);
});

let notify_plus = setInterval(notification_plus, 3000);




