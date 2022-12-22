//Pract12
document.addEventListener('DOMContentLoaded', () => {
    //1) Меняем цвета ссылок

    //Получаем все элементы-ссылки
    let links=document.querySelectorAll('.link');
    //Массив откуда будем брать цвет
    let colorList=['red','greenyellow','deeppink','purple','deepskyblue','orange', 'gold'];

    // Для каждой ссылки внутри блока link ставим случайный цвет 
    links.forEach(link => {
        link.querySelector('a').style.color=colorList[Math.floor(Math.random()*colorList.length)];
    });



    // Создание списка
    let listCont = document.querySelector('.new_list');

    //Добавляем в контейнер наш список, пока пустой
    let list = document.createElement('ul');
    list.classList.add("new_ul");
    listCont.append(list);

    //При нажатии на кнопку начинаем ввод
    let new_list_btn = document.getElementById('new_list_create');

    new_list_btn.onclick = function () {
        while(true){
            let item=prompt("Добавьте элемент","");   
            if (!item) break;
    
            let listItem = document.createElement('li');
            listItem.innerHTML=item;
            listItem.classList.add("new_li");
            list.append(listItem);
        }
    }

    // Всплывающее уведомление
    let notification = document.querySelector('.notif_every_s');
    function showNotification(text){

        // Создаем наше уведомление 
        let new_notify = document.createElement('div');
        new_notify.className = 'new_not';
        new_notify.textContent=text;

        notification.append(new_notify);

        setTimeout(()=>{new_notify.remove()},1500);
    }
    setInterval(() => {showNotification("Новое уведомление")}, 2500);



    // Позиционирование картинки
    let area=document.querySelector(".area");
    let chicken=area.querySelector('img');

    //Задаем позоционирование
    chicken.style.top=Math.round(area.clientHeight/2 - chicken.offsetHeight/2) + "px";
    chicken.style.left=Math.round(area.clientWidth/2 - chicken.offsetWidth/2) + "px";

    //Получаем элементы для записи координат
    let clickX=document.querySelector('.clickX').querySelector('span');
    let clickY=document.querySelector('.clickY').querySelector('span');

    // При нажатии записываем
    area.onclick = function(click){
        clickX.innerHTML=click.pageX - area.offsetLeft;
        clickY.innerHTML=click.pageY - area.offsetTop;
    }



    // Закрытие уведомлений
    const variants = [
        'Новое уведомление',
        'Купите слона по скидке',
        'Подтвердите номер',
        'Выбирайте JS',
        'Ура, новый сайт',
        'Опять работа:(',
        'JS выберет вас',
        'Сессия близко...',
        'Уже декабрь:(',
    ];

    // Уведомления
    let num = document.getElementById('number');
    let counter = 0;
    function notification_plus(){
        counter += 1;
        num.innerHTML = counter;

        let new_li = document.createElement('li');
        new_li.classList.add("for_remove");

        let new_span = document.createElement('span');
        new_span.classList.add('icon');

        let new_i = document.createElement('i');
        new_i.classList.add('fa-solid');
        new_i.classList.add('fa-user');

        let new_span1 = document.createElement('span');
        new_span1.classList.add('text');
        new_span1.textContent = variants[Math.floor(Math.random() * variants.length)];

        //Создаем кнопку закрытия
        let closeTab = document.createElement('i');
        closeTab.className = 'fa-solid fa-xmark';
        closeTab.style=`
            position: absolute;
            right: -45px;
            top: -20px;
            cursor: pointer;
            color: blue;
        `;
        new_span1.append(closeTab);

        new_span1.onclick = function(event) {
            if (!event.target.classList.contains('fa-xmark')) return;
    
            let notif = event.target.closest('.for_remove');
            notif.remove();
    
            counter--;
            num.innerHTML = counter;
        };

        new_span.appendChild(new_i);

        new_li.appendChild(new_span);
        new_li.appendChild(new_span1);

        let out_ul = document.getElementById("app");
        out_ul.appendChild(new_li);
    }

    /*
    notify_box = document.getElementById('not_hover')
    notify_box.addEventListener('click', () => {
        clearInterval(notify_plus);
        setTimeout(function() {
            notify_plus = setInterval(notification_plus, 3000);
        }, 10000);
    });*/

    let notify_plus = setInterval(notification_plus, 3000);

});

