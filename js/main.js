// Для записи на различные интенсивы, где модальное окно статично.

/*$(document).ready(function() {
 	var modal = $('.popup'),
 					overlay = $('.overlay'),
 					link = $('button[data-popup="true"]'),
 					close = $('.close-btn');

 	close.click(function() {
 		modal.toggleClass('popup_active');
 		overlay.hide();
 	});
 	link.on('click', function () {
 		console.log(modal);
 		overlay.show();
 		modal.toggleClass('popup_active');
 	});
 });
*/
// Для лендингов с товарами, где модальное окно динамичное.

$(document).ready(function() {
 	var modal = $('.popup'),
 					overlay = $('.overlay'),
 					link = $('button[data-popup="true"]'),
 					close = $('.close-btn'),
 					fruitName = $('.fruit-name');

 	close.click(function() {
 		modal.toggleClass('popup_active');
 		overlay.hide();
 	});
 	link.on('click', function () {
 		fruitName.text($(this).attr('data-fruit'));
 		overlay.show();
 		modal.toggleClass('popup_active');
 	});
 });













