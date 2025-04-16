let btn = document.getElementById("start");
let score = document.createElement("span");
score.textContent = localStorage.s;
document.getElementsByClassName("score_container")[0].append(score);
btn.onclick = function () {
  let ran = Math.ceil(Math.random() * 100);
  let i = 0;
  while (true) {
    let val = prompt("Give a number between 1 - 100:");
    if (val === null || val === "") break;
    i++;
    if (val < ran) alert("Too low");
    else if (val > ran) alert("Too High");
    else {
      document.getElementById("reaction").src = "img/cat_like.png";
      btn.textContent = "start again";
      document.getElementsByTagName("h1")[0].textContent =
        "Thank you brother I am very happy now!";
      score.textContent = i;
      localStorage.s = i;
      ran = Math.ceil(Math.random() * 100);
      alert("Conguration !\nYour score is: " + i);
      break;
    }
  }
};
