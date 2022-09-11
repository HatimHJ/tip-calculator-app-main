/*
 * handle tip amount event
 * handle click on go button
 */
tips.forEach((el) => {
	el.classList.remove("picked");
	el.onclick = (e) => {
		tips.forEach((ele) => ele.classList.remove("picked"));
		el.classList.add("picked");
		tip = el.classList.contains("picked") && el;
	};
});

/*
 * event submit
 * handle click on go button
 */
go.onclick = () => {
	const billValue = checkInput(bill, true);
	const tipValue = checkInput(tip, true);
	const personValue = checkInput(person, false, personError);

	if (
		billValue != undefined &&
		personValue != undefined &&
		tipValue != undefined
	) {
		const arr = calc(billValue, personValue, tipValue);
		[totaltip.innerHTML, perPerson.innerHTML] = arr;
	}
};

/*
 * event input focus
 * clear inputs values on focus
 */
bill.addEventListener("focus", (e) => {
	e.target.value = "";
});
person.addEventListener("focus", (e) => {
	e.target.value = "";
});
