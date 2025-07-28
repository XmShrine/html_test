function turnWeb(webName) {
	window.location.href = webName;
}
function charNumContest() {
	var data = document.getElementById("char-num-input").value;
	alert("已经输入"+data.length+"个字符 (包含标点符号)");
}