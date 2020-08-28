let btn1 = $('.j-button1');
let btn3 = $('.j-button2');
let btn7 = $('.j-button3');
let btnR = $('.j-reset');

let progressBar  = $('.progress-bar');
let progressWidth = $('.progress').width();
let progresNow = 0;

const add1 = progressWidth * 0.01;
const add3 = progressWidth * 0.03;
const add7 = progressWidth * 0.07;
const reset = progressWidth = 0;

btn1.click(function(event) {
	/* Act on the event */
	progresNow += add1;
	progressBar.width(progresNow);
});

btn3.click(function(event) {
	/* Act on the event */
	progresNow += add3;
	progressBar.width(progresNow);
});

btn7.click(function(event) {
	/* Act on the event */
	progresNow += add7;
	progressBar.width(progresNow);
});

btnR.click(function(event) {
	/* Act on the event */
	progresNow = reset;
	progressBar.width(progresNow);
});
