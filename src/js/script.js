
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

	let burgName = 'menu__burger', // введите имя класс бургера
		listName = 'menu__bar', // введите имя класс ul меню

	

		burger = document.querySelector(`.${burgName}`), // находим оболочку бyргера
		list = document.querySelector(`.${listName}`); // находим ul c навигацией

		// close = document.querySelector(`.${burger_close}`); // отдельный крест
	let navMenu = document.querySelector('.menu');

	let closeBut = document.querySelector('.burger_close');
		// maxWidthMob = 700; // при каком складываем в бургер???

	function menuBurger () {
		
		burger.addEventListener('click', () => { // ставим обработчик на бургер

			// backBlack.style.display = 'block'; // врубаем чёрный бэграунд
			document.body.style.overflow = 'hidden';
			// burger.classList.toggle(`${burgName}_active`) // при нажатии на бургер появляется крестик (актив)
			// list.classList.toggle(`${listName}_active`) // и листу ul даётся класс актив
			navMenu.classList.add('menu_active');
			// if (burger.classList.contains(`${burgName}_active`)) { // если нажали на меню то...
			// 	document.body.style.overflow = 'hidden'; // запрещяем прокрутку body
			// 	backBlack.style.display = 'block'; // врубаем чёрный бэграунд
			// } else { // если меню не активно то...
			// 	document.body.style.overflow = 'auto'; // разрешаем прокрутку меню
			// 	backBlack.style.display = 'none'; // вырубаем чёрный фон
			// };
		});

		closeBut.addEventListener('click', function() {
			// backBlack.style.display = 'none'; // вырубаем чёрный фон
			navMenu.classList.remove('menu_active');
			// list.classList.remove(`${listName}_active`) // и листу ul даётся класс актив
			document.body.style.overflow = 'auto';
		})
	}
		// если экран резко переходит в моб, то мы врубаем свойства...
		// window.addEventListener('resize', function() { // следим за именением экрана
		// 	if (document.documentElement.clientWidth > maxWidthMob) { // если он меньше того, когда появляется бургер...
		// 		document.body.style.overflow = 'auto'; // разрешаем прокрутку

		// 		backBlack.style.display = 'none'; // вырубаем чёрный бэк
		// 	}
		// 	// если пользователь переходит из десктопа в моб при вклёчённом бургере 
		// 	else if (burger.classList.contains(`${burgName}_active`)) { // если бургер активен...
		// 		document.body.style.overflow = 'hidden'; // запрещяем прокрутку

		// 		backBlack.style.display = 'block'; // врубаем бэг
		// 	}
		// 	else { // ели чёт не то, то нечё не делаем
		// 		return false
		// 	}
		// }) 
	
	menuBurger ();



	let backBlack = document.querySelector('.backblack') // находим чёрный бэграунд

	function bacBlac() {	
		backBlack.addEventListener('click', function() { // даём обработчик на него
			// burger.classList.remove(`${burgName}_active`);  // при нажатии дожны убераться все окна что мешают...
			// list.classList.remove(`${listName}_active`); // Надо сделать, но в следующем проекте...
			document.body.style.overflow = 'auto';
			// backBlack.style.display = 'none';
			// backBlack.style.display = 'none';
			navMenu.classList.remove('menu_active');

		});
	};
	bacBlac();




	let allPerc = document.querySelectorAll('.trak-line__perc')
	let allLine = document.querySelectorAll('.trak-line__line')



	for (let i = 0; i < allPerc.length; i++) {
		let pers = allPerc[i].textContent
		// alert(pers);
		// alert(tranNu(pers));
		tranNu(pers, i)
		// allLine[i].firstElementChild.style.width = '300px';
	}

	function tranNu(pers, index) { // функция интепритирует данные (пример: вход-'1234px' выход-'1234)
		let per = +(pers.match(/\d+\.\d+|\d+|-\d+\.\d+|-\d+/)); // переводим строку с px в число без px
		if (per > 100) per = 100
		if (per < 0) per = 0
		allLine[index].firstElementChild.style.width = `${per}%`;
	};


})