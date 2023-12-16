var timer = 60;
var score = 0;
var hitrn = 0;

const button = document
  .querySelector("#reloadval")
  .addEventListener("click", function () {
    window.location.reload();
  });

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i < 103; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h4>Time Up!! Your Score is ${score}</h4>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickednum = Number(dets.target.textContent);
  if (clickednum === hitrn) {
    increaseScore();
    getNewHit();
    makeBubble();
  }
});

getNewHit();
runTimer();
makeBubble();
