$(document).ready(function () {
	var currentFloor = 2; // переменная со значением этажа
	var floorPath = $('.main-image path'); // каждый отдельный этаж в svg
	var counterUp = $('.button-up'); // кнопка увеличения этажа
	var counterDown = $('.button-down') // кнопка уменьшения этажа
	var counter = $('.main__count-floor')
// Функция при наведении мышью на этаж
	floorPath.on('mouseover', function () { // при наведении выполняется ф-ция, в которой:
		floorPath.removeClass('current-floor'); // удаляется активный класс у этажей
		currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
		counter.text(currentFloor); // записываем значение этажа в счетчик
	});

	counterUp.on('click', function () { // отслеживаем клик по кнопке вверх
		if (currentFloor < 18) { // если значение этажа не более 18, то
			currentFloor++; // увеличим на один этаж
		usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажем с 2 на 02
		counter.text(usCurrentFloor); //записываем значение этажа в счетчик
		floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
		$(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем такущий класс
		};
	});

	counterDown.on('click', function () { // отслеживаем клик по кнопке вниз
		if (currentFloor > 2) { // если значение этажа не менее 2, то
			currentFloor--; // уменьшим на один этаж
		usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажем с 2 на 02
		$('.main__count-floor').text(usCurrentFloor); //записываем значение этажа в счетчик
		floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
		$(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем такущий класс
		};
	});
});