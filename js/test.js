$('.go-right').click(function () {
	localStorage.removeItem("brief-color");


	javascript:window.location.assign("../brief.html");
	localStorage.setItem('brief-color', "blue");

});

// $('.go-btn').click(function () {
// 	localStorage.removeItem("brief-color");
// 	javascript:window.location.assign("file:///D:/progects/deerada/brief.html");
// 	localStorage.setItem('brief-color', "green");
//
// });

if(localStorage.getItem('brief-color') === 'blue') {
	$("head").append('<style type="text/css"></style>');
	var newStyleElement = $("head").children(':last');
	newStyleElement.html('.brief-color {background:blue;}');
	// localStorage.removeItem("brief-color")
}
else if(localStorage.getItem('brief-color') === 'green') {
	$("head").append('<style type="text/css"></style>');
	var newStyleElement = $("head").children(':last');
	newStyleElement.html('.brief-color {background:#b29eca;}');
	// localStorage.removeItem("brief-color")
}
