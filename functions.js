/*
 *	#1
 * calculate function
 * return total tip amount & tip for every person
 * param the bill, number of persons & the tip percentage
 */
function calc(bill, person, tip) {
	const totalTip = (bill * tip) / 100;
	const tipPerPerson = totalTip / person;
	return [totalTip.toFixed(2), tipPerPerson.toFixed(2)];
}
/*
 *	#2
 * check input type and number
 * return input numeric value
 * param input as text, withZero flag if true allow 0 to be returned
 * *****NEED MODIFING*****
 */
function checkInput(input, withZero = true, span = null) {
	let value = null;
	if (input.nodeName == "BUTTON") {
		value = checkButton(input);
	} else {
		value = input.value;
		if (isNaN(value)) {
			err(input, "nan");
			return;
		} else {
			pass(input);
		}
		if (withZero) {
			pass(input);
		} else {
			if (value == 0) {
				err(input, "zero", span);
				return;
			} else {
				pass(input, span);
			}
		}
	}
	return value;
}
/*
 * #3
 * get button value
 * return the button value as number
 */
function checkButton(input) {
	return Number(input.innerText);
}
/*
 * #4
 * error handler
 * handle diffrent error type
 */
function err(input, type, span = null) {
	switch (type) {
		case "nan":
			input.style.border = "1px solid orange";
			break;
		case "zero":
			input.style.border = "1px solid #ff7675";
			if (span !== null) {
				span.style.visibility = "visible";
			}
			break;

		default:
			console.log("something went wrong...");
			break;
	}
}
/*
 *	#5
 * passing  submit validtion
 * reset input style to default
 */
function pass(input, span = null) {
	if (span !== null) {
		span.style.visibility = "hidden";
	}
	input.style.border = "none";
	// input.value = "";
}
