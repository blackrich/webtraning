let val = 0;
const images = ["./src/login.png", "./src/logout.png", "./src/person.png", "./src/dog.jpg", "./src/logo.png"];
window.addEventListener('load', function () { _init(); });

function _init() {
  _previmagefunc(images.length - 1);
  _mainimagefunc(0);
  _nextimagefunc(1);
}

function increase() {
  let result = document.getElementById("result");
  _previmagefunc(val);
  val++;
  if (val >= images.length) val = 0;
  _mainimagefunc(val);
  let tmp = val + 1;
  if (tmp >= images.length) tmp = 0;
  _nextimagefunc(tmp);
}

function decrease() {
  let result = document.getElementById("result");
  _nextimagefunc(val);
  val--;
  if (val < 0) val = images.length - 1;
  _mainimagefunc(val);
  let tmp = val - 1;
  if (tmp < 0) tmp = images.length - 1;
  _previmagefunc(tmp);
}


function _previmagefunc(i) {
  let imgoutputmain = document.getElementById("img-output-prev");
  imgoutputmain.src = images[i];
}
function _mainimagefunc(i) {
  let imgoutputmain = document.getElementById("img-output-main");
  imgoutputmain.src = images[i];
}
function _nextimagefunc(i) {
  let imgoutputmain = document.getElementById("img-output-next");
  imgoutputmain.src = images[i];
}


function tmp(){
  
}