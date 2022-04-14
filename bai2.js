var images = [];
var index = 1;
var sohinh = 9;
for (var i = 1; i <= sohinh; i++) {
    images[i] = new Image();
    images[i].src = "" + i + ".jpg";
}

function first() {
    index = 1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    sttanh();
}

function prev() {
    index--;
    if (index <= 0) index = 9;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    sttanh();
}

function next() {
    index++;
    if (index >= images.length) index = 1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    sttanh();
}

function last() {
    index = 9;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    sttanh();
}

function sttanh() {
    document.querySelector("#stt").innerHTML = index + "/9";
}
var myTime;

function start() {
    myTime = setInterval(next, 500);
}

function stop() {
    clearInterval(myTime);
}