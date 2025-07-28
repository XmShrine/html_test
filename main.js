function goto(webName) {
	window.location.href = webName;
}
function RGBTransferGenerate() {
	let R = document.getElementById("R-input").value;
	let G = document.getElementById("G-input").value;
	let B = document.getElementById("B-input").value;
	document.getElementById("color-block").style.backgroundColor = "rgb("+R+","+G+","+B+")";
}