let btn = document.getElementById("start");
let score = document.createElement("span");
score.textContent = localStorage.s;
document.getElementsByClassName("score_container")[0].append(score);
btn.onclick = function () {
  let ran = Math.ceil(Math.random() * 100);
  let i = 0;
  while (true) {
    let val = prompt("Donner un nombre entre 1 - 100:");
    if (val === null || val === "") break;
    i++;
    if (val < ran) alert("Trop bas");
    else if (val > ran) alert("Trop Haut");
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
