var pnts = 0;
var flag = 0;
const c = [];
document.getElementById("pointsholder").innerHTML = pnts;
function changeVal(input) {
  var doc = document.getElementById(input.id);

  doc.addEventListener("change", () => {
    if (c.includes(input.id) === false) {
      pnts = pnts + 10;
      c.push(input.id);
    }

    document.getElementById("pointsholder").innerHTML = pnts;
  });
}
function showmenu() {
  if (flag == 0) {
    document.getElementById("menu").style.display = "block";
    flag = 1;
  } else {
    document.getElementById("menu").style.display = "none";
    flag = 0;
  }
}
var flag2 = 0;
function showscore() {
  var checkInput = document.getElementById("submit");
  if (checkInput.value) {
    document.getElementById("score").style.width = "100%";
    document.getElementById("score").style.height = "100%";
    document.getElementById("resultpage").style.scale = "1";
    document.getElementById("final").style.scale = "1";
    document.getElementById("results").style.scale = "1";
    setTimeout(() => {
      document.getElementById("score").style.backgroundColor =
        "rgba(0, 0, 0, 0.65)";
    }, 750);
    document.getElementById("final").innerHTML = pnts;
  }
}
function closeres() {
  setTimeout(() => {
    document.getElementById("score").style.width = "0";
    document.getElementById("score").style.height = "0";
    document.getElementById("resultpage").style.scale = "0";
    document.getElementById("results").style.scale = "0";
    document.getElementById("final").style.scale = "0";
  }, 750);
  document.getElementById("score").style.backgroundColor = "transparent";
}
