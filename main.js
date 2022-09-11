const bill = document.querySelector("#bill");
const person = document.querySelector("#person");
const totaltip = document.querySelector(".total-tip .value");
const perPerson = document.querySelector(".person-tip .value");
const tips = [...document.querySelectorAll(".tip")];
let tip = document.querySelector(".picked");
const go = document.querySelector("#calculate");
const resetbtn = document.querySelector("#reset");
const personError = document.querySelector(".person-wrapper .error");

function reset() {
	bill.value = "";
	person.value = "";
	totaltip.innerHTML = "0.00";
	perPerson.innerHTML = "0.00";

	tips.forEach((el) => el.classList.remove("picked"));
}

resetbtn.onclick = () => {
	reset();
};
