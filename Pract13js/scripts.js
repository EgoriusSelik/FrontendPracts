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
    let image = area.querySelector('img');

    //Задаем позоционирование
   image.style.top=Math.round(area.clientHeight/2 - image.offsetHeight/2) + "px";
   image.style.left=Math.round(area.clientWidth/2 - image.offsetWidth/2) + "px";

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




    // Pract 13

    //Задание 1, подтверждение перехода по ссылке
    let href_quest = document.getElementById("hr_question");

    //Событие при нажатии
    href_quest.onclick = function(event) {

        // Ф-я вызова подтверждения
        function handleLink(href) {
          let isLeaving = confirm(`Перейти по ссылке ${href}?`);
          if (!isLeaving) return false;
        }
        
        // Ищем элемент a
        let target = event.target.closest('a');
        
        // Если находим и если он в нашем контейнере, запускаем подтверждение
        if (target && href_quest.contains(target)) {
          return handleLink(target.getAttribute('href'));
        }
      };


    // Задание 2 Галерея с изменением размера
    let gallery_list = document.getElementById("gallery_list");

    // При нажатии на список
    gallery_list.onclick = function(event) {

        // Получаем элемент на который нажали
        let our_image = event.target.closest('img');
        if (!our_image) return;

        // Меняем местами ссылки на картинки у элементов
        buff_src = main_image.src;
        main_image.src = our_image.src;
        our_image.src = buff_src;
      }
    
    //Задание 3 выбор списка

    // Обрабатываем нажатие на элемент списка
    for_select.onclick = function(event) {
        if (event.target.tagName != "LI") return;
        
        // Если нажимаем с контролом, просто добавляем
        if (event.ctrlKey || event.metaKey) {
            event.target.classList.toggle('selected');
        } 
        // Если без него, убираем выделение у других
        else {
            let selected = for_select.querySelectorAll('.selected');
            for(let elem of selected) {
              elem.classList.remove('selected');
            }
            // Добавляем текущему выделение
            event.target.classList.add('selected');
        }
      } 
      // Убираем выделение стандартное
      for_select.onmousedown = function() {
        return false;
      };


    // Задание 4 слайдер
    let thumb = slider.querySelector('.thumb');

    // Отключаем встроенный drag-n-drop браузера, чтобы не было раздвоения
    thumb.ondragstart = function() {
        return false;
    };
    thumb.onmousedown = function(event) {
        // отменяем выделение браузера
        event.preventDefault();

        // Запоминаем расстояние от курсора до левого края, чтоб всегда держалось
        let shiftX = event.clientX - thumb.getBoundingClientRect().left;
        
        //Добавляем обработчики событий
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        // Ф-я движения
        function onMouseMove(event) {
        
            // Вычисляем новые координаты
            let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

            // Если курсор вышел из слайдера  оставить ползунок в его границах.
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = slider.offsetWidth - thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            // Задаем полученную позицию ползунку
            thumb.style.left = newLeft + 'px';
        }
        // Убираем мышь и удаляем наши обработчики
        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    };

    //Задание 5 корзина 
    var DragManager = new function() {
        var dragObject = {};
      
        var self = this;
            
        //Ф-я,получаем элемент
        function onMouseDown(e) {      
            // если клик правой кнопкой мыши, то он не запускает перенос
          if (e.which != 1) return;
          var elem = e.target.closest('.draggable');
          // не нашли, клик вне draggable-объекта
          if (!elem) return;
          // запомнить переносимый объект
          dragObject.elem = elem;
          // запомним, что элемент нажат на текущих координатах pageX/pageY
          dragObject.downX = e.pageX;
          dragObject.downY = e.pageY;
      
          return false;
        }
      
        function onMouseMove(e) {
          if (!dragObject.elem) return; // элемент не зажат
      
          if (!dragObject.avatar) {
      
            // начинаем перенос
            dragObject.avatar = createAvatar(e); // создать аватар
            if (!dragObject.avatar) {
              dragObject = {};
              return;
            }
            var coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;
      
            startDrag(e);
          }
      
          // отобразить перенос объекта при каждом движении мыши
          dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
          dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';
      
          return false;
        }
      
        function onMouseUp(e) {
          if (dragObject.avatar) { // если перенос идет
            finishDrag(e);
          }
      
          dragObject = {};
        }
      
        function finishDrag(e) {
          var dropElem = findDroppable(e);
      
          if (!dropElem) {
            self.onDragCancel(dragObject);
          } else {
            self.onDragEnd(dragObject, dropElem);
          }
        }
      
        function createAvatar(e) {
      
          var avatar = dragObject.elem;
         avatar.parentNode.insertBefore(avatar.cloneNode(true), avatar.nextSibling);

          // функция для отмены переноса
          avatar.rollback = function() {
            avatar.remove();
          };
      
          return avatar;
        }
      
        function startDrag(e) {
          var avatar = dragObject.avatar;
      
          // инициировать начало переноса
          document.body.appendChild(avatar);
          avatar.style.zIndex = 1000;
          avatar.style.position = 'absolute';
        }
      
        function findDroppable(event) {
          // спрячем переносимый элемент
          dragObject.avatar.hidden = true;
      
          // получить самый вложенный элемент под курсором мыши
          var elem = document.elementFromPoint(event.clientX, event.clientY);
      
          // показать переносимый элемент обратно
          dragObject.avatar.hidden = false;
      
          if (elem == null) {
            // такое возможно, если курсор мыши "вылетел" за границу окна
            return null;
          }
      
          return elem.closest('.droppable');
        }
      
        document.onmousemove = onMouseMove;
        document.onmouseup = onMouseUp;
        document.onmousedown = onMouseDown;
      
        this.onDragEnd = function(dragObject, dropElem) {};
        this.onDragCancel = function(dragObject) {};
      
      };
      
      let cart_count = document.getElementById('cart_count');
      let cart_c = "";
      let cart_str;
      let final_count = 0;
      
      function getCoords(elem) {
        var box = elem.getBoundingClientRect();
      
        return {
          top: box.top + scrollY,
          left: box.left + scrollX
        };
      }
      DragManager.onDragCancel = function(dragObject) {
        dragObject.avatar.rollback();
      };
      DragManager.onDragEnd = function(dragObject, dropElem) {
        cart_c = dragObject.elem.innerHTML;
        cart_str = cart_c.split(" ");
        final_count += Number(cart_str[cart_str.length - 1]);

        dragObject.elem.remove();

        cart_count.innerHTML = final_count;
      };


});

