//your JS code here. If required.
const input = document.querySelector("input");
input.addEventListener("blur",()=>{
	input.value=input.value.toUpperCase();
})