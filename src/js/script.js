
document.addEventListener("DOMContentLoaded", () => {
    function ibg () {
        let allItems = document.querySelectorAll('.ibg'), // находим все контенеры с классом ibg
            itemsImage, // переменная для картинок
            src; // переменная для src
        for (let i = 0; i < allItems.length; i++) { // проходим по всем элементам и ...
            itemsImage = allItems[i].querySelector('img'); // находим в них картинку
            src = itemsImage.getAttribute('src'); // узнаём их src
            allItems[i].style.backgroundImage = `url(${src})`; // вставляем src в url background-image
        };
    };
    ibg ();


	function menuBurger () {
		let menu = document.querySelector('.menu'), // находим контейнер со всем
			butOpenMenu = menu.querySelector(".menu__burger_open"), // кнопку открытия
			butCloseMenu = menu.querySelector(".menu__burger_close"), // кнопку закрытия
			menuBackblack = menu.querySelector(".menu__backblack"); // фон

		butOpenMenu.addEventListener('click', () => { // ставим обработчик на открытие меню
            document.body.style.overflow = 'hidden'; // запретить body прокрутку
            menu.classList.add('menu_active'); // активировать меню
        });
        butCloseMenu.addEventListener('click', () => { // ставим обработчик на закрытие меню
            document.body.style.overflow = 'auto'; // разрешить body прокрутку
            menu.classList.remove('menu_active'); // закрыть меню
        });
        menuBackblack.addEventListener('click', () => { // ставим обработчик на закрытие меню
            document.body.style.overflow = 'auto'; // разрешить body прокрутку
            menu.classList.remove('menu_active'); // закрыть меню
        });
    }
	menuBurger ();

	
	function animScroll() {
        let allAnchorLinks = document.querySelectorAll('a[data-link-anchor]'); // находим все ссылки начинающиеся на # (Это точно якори)
        
		for (let i = 0; i < allAnchorLinks.length; i++) { // забускаем цикл по всем ссылкам
			allAnchorLinks[i].addEventListener('click', function(event) { // Ставим обработчик на все якори

				event.preventDefault(); // отрубаем действие по умолчанию
				let href = this.getAttribute('href'); // получем href ссылки на которую кликнули
				let elemntAnchor = document.querySelector(href); // находим элемент, на котором стоит этот якорь

				if (href == '#up') { //если в href ссылки добавить #up, то скролл дойдёт до начала
					scrollUp() // вызываем соответствующую функцию
				} else {
                    if (window.pageYOffset > elemntAnchor.offsetTop) { // если экран ниже элемента то...
                        scrollTop(elemntAnchor.offsetTop); // вызываем соответствующую функцию и - высоту fixed menu
                    } else if (window.pageYOffset < elemntAnchor.offsetTop) { //если экран выше элемента то...
                        scrollBottom(elemntAnchor.offsetTop); // вызываем соотвктствующую функцию и - высоту fixed menu
                    } else { // если экран находится в одной координате с элементом то...
                        window.scrollTo(0, elemntAnchor.offsetTop); // экран становтся в координату элемента и - высоту fixed menu
                    };
                };
			});
		};

		function scrollTop(elemntAnchor) { // функция вызывается если экран ниже элемента
			if (window.pageYOffset > elemntAnchor) { // если координата экрана больше координаты элемента то...
				window.scrollTo(0, window.pageYOffset - 50); // скролим вверх по 50px за раз
				setTimeout(scrollTop, 1, elemntAnchor); // ждём 1 милисекунду и повторяем функцию
			} else { // если мы дошли до нужной координаты , то оставляем скролл на корде элемента
				window.scrollTo(0, elemntAnchor);
			};
		};

		function scrollBottom(elemntAnchor) { // функция вызывается если экран выше элемента
			if (window.pageYOffset < elemntAnchor) { // если координата экрана меньше координаты элемента то...
				window.scrollTo(0, window.pageYOffset + 50); // скролим вниз по 50px за раз
				setTimeout(scrollBottom, 1, elemntAnchor); // ждём 1 милисекунду и повторяем функцию
			} else { // если мы дошли до нужной координаты , то оставляем скролл на корде элемента
				window.scrollTo(0, elemntAnchor);
			};
		};

		function scrollUp() { // функция скролит экран в координату 0 0 (для стрелочки up)
			if (window.pageYOffset > 0) {
				window.scrollTo(0, window.pageYOffset - 50)
				setTimeout(scrollUp, 1)
			} else {
				window.scrollTo(0, 0)
			}
		}
	};
	animScroll ();
	

	function activMenuZone() {
		// heightFixedMedu = headerRow.offsetHeight; // отслеживаем высоту fixed меню

		let headMenu = document.querySelector('.menu'),
			aHrefAll = headMenu.querySelectorAll('a[data-link-anchor]'), // находим все ссылки главного меню
			arrHref = [], // создаём массив для href всех ссылок
			zoneAllArr = []; // создаём массив для зон

		for (let i = 0; i < aHrefAll.length; i++) { // проходимся по каждой сслыки
			arrHref.push(aHrefAll[i].getAttribute('href')); // помещяем в массив href
			zoneAllArr.push(document.querySelector(arrHref[i])); // ниходим все зоны по хрефам ссылок
			// alert ((i + 1)+ '. ' + 'links: ' + arrHref[i] + "  " +  'zone: ' + zoneAllArr[i].getAttribute('id')) // проверить
		};
		
		window.addEventListener('scroll', function() { // при скролле...

			// heightFixedMedu = headerRow.offsetHeight; // обновляем высоту fixed меню
			// fullHeigth = window.pageYOffset + heightFixedMedu; // координата окна сверху +  высотра прекреплённого хедера
			// fullHeigheadMenuth = window.pageYOffset
			
			let fullHeigth = window.pageYOffset
			// console.log (fullHeigth)

			for (let i = 0; i < aHrefAll.length; i++) { // проходимся по каждой координатной области зон
			// если верхняя кордината экрана больше или равно верхней координаты какой либо зоны и если верхняя кордината экрана
			// меньше или равно нижней координаты зоны то... (если мы попали в оду из зон)
				if (fullHeigth >= zoneAllArr[i].offsetTop && fullHeigth <= zoneAllArr[i].offsetTop + zoneAllArr[i].offsetHeight) {

					// console.log('Мы сейчас в зоне - ' + zoneAllArr[i].getAttribute('id'))

					let linkAct = headMenu.querySelector(`a[href*="${zoneAllArr[i].getAttribute('id')}"]`); // находим якорь этой зоны
					// console.log ('Что сейчас за ссылка? - ' + linkAct.getAttribute('href')) // какая ссылка?
					let linkLastAct = headMenu.querySelector('.menu__link_active'); // находим последнюю активную зону в хедере
					if (linkLastAct == null) { // если изначально не активных то...
						linkAct.classList.add('menu__link_active'); // даём актив ссылки сейчасной зоны
					} else { // если есть активные, то...
						linkLastAct.classList.remove('menu__link_active'); // удаляем последний актив
						linkAct.classList.add('menu__link_active'); // даём актив ссылки сейчасной зоны
					};
				};
			};
		});
	};
	activMenuZone();








	// let allTrakLine = document.querySelectorAll('.trak-line') // нахожу все трек-лайны
	

	// for (let trak in allTrakLine) {
	// 	alert (trak)
	// 	// for (let persTrak in trak.querySelector('.trak-line__perc')) {
	// 	// 	alert(persTrak.textContent)
	// 	// }

	// }

	// for (let i = 0; i < allTrakLine.length; i++) {
	// 	// console.log(allTrakLine[i].querySelector('.trak-line__perc').textContent)
	// 	let widthDev = tranNu(allTrakLine[i].querySelector('.trak-line__perc').textContent)
	// 	// console.log("Ширина девайдера - " + widthDev)
	// 	allTrakLine[i].querySelector('.trak-line__barrier').style.width = `${widthDev}%`;
	// }

	function linePers() {
		let allTrakLine = document.querySelectorAll('.trak-line') // нахожу все трек-лайны

		if (allTrakLine.length > 0) {
			for (let i = 0; i < allTrakLine.length; i++) {

				// let widthDev = tranNu(allTrakLine[i].querySelector('.trak-line__perc').textContent)
				let widthDev = parseInt(allTrakLine[i].querySelector('.trak-line__perc').textContent)
				widthDev = (widthDev > 100) ? widthDev = 100: (widthDev < 0) ? widthDev = 0: widthDev = widthDev;
				widthDev = 100 - widthDev;
				// console.log(widthDev)
				allTrakLine[i].querySelector('.trak-line__barrier').style.width = `${widthDev}%`;
	
				allTrakLine[i].querySelector('.trak-line__color-line').style.animationName = 'percent_anim';
			}
	
			// function tranNu(pers) { // функция интепритирует данные (пример: вход-'1234px' выход-'1234)
			// 	let per = +(pers.match(/\d+\.\d+|\d+|-\d+\.\d+|-\d+/)); // переводим строку с px в число без px
			// 	per = (per > 100) ? per = 100: (per < 0) ? per = 0: per = per;
				
			// 	let iverPer = 100 - per
			// 	return iverPer
			// };
		}
	}
    // linePers();


	// let allPerc = document.querySelectorAll('.trak-line__perc')
	// let allLine = document.querySelectorAll('.trak-line__line')


	// for (let i = 0; i < allPerc.length; i++) {
	// 	let pers = allPerc[i].textContent
	// 	// alert(pers);
	// 	// alert(tranNu(pers));
		// tranNu(pers, i)
	// 	// allLine[i].firstElementChild.style.width = '300px';
	// }

	// function tranNu(pers,) { // функция интепритирует данные (пример: вход-'1234px' выход-'1234)
	// 	let per = +(pers.match(/\d+\.\d+|\d+|-\d+\.\d+|-\d+/)); // переводим строку с px в число без px
	// 	// if (per > 100) per = 100
	// 	// if (per < 0) per = 0
	// 	per = (per > 100) ? per = 100: (per < 0) ? per = 0: per = per;
		
	// 	// alert (per)
	// 	let iverPer = 100 - per
	// 	return iverPer
	// 	// allLine[index].firstElementChild.style.width = `${per}%`;
	// };





	/* 
		Как пользоваться:
		добавляем нужному элементу класс _anim-items и когда экран дойдёт до него ему будет выдан класс ._active-show

		!!! Добавить такую туку, что при достижении какого-то проделённого контейнера, нам надо врубать функцию 0_0;
	*/
	
	// let allAnimShowAtems = document.querySelectorAll('._anim-items');
	// if (allAnimShowAtems.length > 0) {
	// 	window.addEventListener("scroll", animShowOn);
	// 	function animShowOn() {
	// 		let scrollHeight = window.pageYOffset + document.documentElement.clientHeight
	// 		for (let i = 0; i < allAnimShowAtems.length; i++) {
	// 			let atem = allAnimShowAtems[i];
	// 			let atemsShow = { // объект с данными
	// 				height: atem.offsetHeight, // высота
	// 				cordTop: offset(atem).top, // кордината с верху
	// 			}
	// 			// console.log ('atem: ' + atem + " height: " + atemsShow.height + " cordTop: " + atemsShow.cordTop)
	// 			let animShowAtemHeight = (atemsShow.height / 4) + atemsShow.cordTop
				
	// 			if (atemsShow.height > window.innerHeight) {
	// 				// console.log ("высота большого элемента: " + atemsShow.height)
	// 				animShowAtemHeight = atemsShow.cordTop + (window.innerHeight / 4);
	// 				// console.log (animShowAtemHeight) // тут надо как-то так сделать, чтоб оно анимировалось относительно окна
	// 			}
	// 			// console.log ("Анимация сработает на: " + animShowAtemHeight + " а вы сейчас на: " + scrollHeight)
	// 			if (scrollHeight >= animShowAtemHeight) {
	// 				atem.classList.add("_active-show")
	// 				if (atem.classList.contains('skill__percent')) {
	// 					linePers();
	// 				}
	// 			}
				
	// 		}
			
	// 	}
	// 	function offset(el) {
	// 		const rect = el.getBoundingClientRect(),
	// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	// 		return {top: rect.top + scrollTop}
	// 	}
	// 	setTimeout(() => {
	// 		animShowOn ()
	// 	}, 400);
	// }

	function animShowContent() {
		let allAnimShowAtems = document.querySelectorAll('._anim-items');
		if (allAnimShowAtems.length > 0) {
			window.addEventListener("scroll", animShowOn);
			function animShowOn() {
				let scrollHeight = window.pageYOffset + document.documentElement.clientHeight
				for (let i = 0; i < allAnimShowAtems.length; i++) {
					let atem = allAnimShowAtems[i];
					let atemsShow = { // объект с данными
						height: atem.offsetHeight, // высота
						cordTop: offset(atem).top, // кордината с верху
					}
					// console.log ('atem: ' + atem + " height: " + atemsShow.height + " cordTop: " + atemsShow.cordTop)
					let animShowAtemHeight = (atemsShow.height / 4) + atemsShow.cordTop
					
					if (atemsShow.height > window.innerHeight) {
						// console.log ("высота большого элемента: " + atemsShow.height)
						animShowAtemHeight = atemsShow.cordTop + (window.innerHeight / 4);
						// console.log (animShowAtemHeight) // тут надо как-то так сделать, чтоб оно анимировалось относительно окна 
					}
					// console.log ("Анимация сработает на: " + animShowAtemHeight + " а вы сейчас на: " + scrollHeight)
					if (scrollHeight >= animShowAtemHeight) {
						atem.classList.add("_active-show");

						// Надо узнать на каком я сейчас элементе и если это тот,что мне нужен открытать функцию
						// console.log(atem.classList.contains('line-box'))
						// let k = 0
						// console.log(atem.tagName == 'DIV')
						if (atem.classList.contains('skill__percent')) {
							linePers();
						}
					}
				}
				
			}
			function offset(el) {
				const rect = el.getBoundingClientRect(),
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return {top: rect.top + scrollTop}
			}
			setTimeout(() => {
				animShowOn ()
			}, 400);
		}
	}
	animShowContent();


})