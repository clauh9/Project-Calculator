const container = document.querySelector(".container");
let display_var = "";

const buttons = Array.from(document.querySelectorAll("button"));
const display = document.querySelector(".display");
const opp = ["+", "*", "/", "-"]; //list of operations
let num1 = 0;
let num2 = 0;
let current_opp = "";

function add(n1, n2) {
	return n1 + n2;
}
function sub(n1, n2) {
	return n1 - n2;
}
function mul(n1, n2) {
	return n1 * n2;
}
function div(n1, n2) {
	if (n2 === 0) {
		alert("Dont devide by 0!");
		display.textContent = "";
		reset();
		return;
	}
	return n1 / n2;
}

function reset() {
	num1 = 0;
	num2 = 0;
	current_opp = "";
	display_var = "";
}

function operate(op, n1, n2) {
	display.textContent = "";
	display.textContent = eval(op)(n1, n2);
	reset();
}

buttons.forEach((button) => {
	button.addEventListener("click", function () {
		display_var += button.value;
		display.textContent = display_var;

		//clear
		if (button.value === "C") {
			display.textContent = "0";
			reset();
		}

		//backspace
		if (button.value === "<") {
			display_var = display_var.slice(0, -2);
			console.log(display_var);
			display.textContent = display_var;
		}

		//if its an opperation
		if (opp.indexOf(button.value) !== -1) {
			num1 = parseFloat(display_var.slice(0, -1));
			current_opp = button.className;
			display_var = "";
		}
		//return value of opperation
		if (button.value === "=") {
			num2 = parseFloat(display_var.slice(0, -1));
			operate(current_opp, num1, num2);
		}
	});
});
