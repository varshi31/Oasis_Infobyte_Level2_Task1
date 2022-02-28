function getH() {
	return document.getElementById("val").innerText;
}
function printH(num) {
	document.getElementById("val").innerText = num;
}
function getO() {
	return document.getElementById("output").innerText;
}
function printO(num) {
	if (num == "") {
		document.getElementById("output").innerText = num;
	}
	else {
		document.getElementById("output").innerText = getFormattedNumber(num);
	}
}
function getFormattedNumber(num) {
	if (num == "-") {
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num) {
	return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function () {
		if (this.id == "clear") {
			printH("");
			printO("");
		}
		else if (this.id == "backspace") {
			var o = reverseNumberFormat(getO()).toString();
			if (o) {
				o = o.substr(0, o.length - 1);
				printO(o);
			}
		}
		else {
			var o = getO();
			var h= getH();
			if (o == "" && h != "") {
				if (isNaN(h[h.length - 1])) {
					h = h.substr(0, h.length - 1);
				}
			}
			if (o != "" || h != "") {
				o = o == "" ? o : reverseNumberFormat(o);
				h= h + o;
				if (this.id == "=") {
					var res = eval(h);
					printO(res);
					printH("");
				}
				else {
					h = h + this.id;
					printH(h);
					printO("");
				}
			}
		}

	});
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click', function () {
		var o = reverseNumberFormat(getO());
		if (o != NaN) {
			o = o + this.id;
			printO(o);
		}
	});
}