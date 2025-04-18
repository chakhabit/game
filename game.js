let btn = document.getElementById("start");
let score = document.createElement("span");
score.textContent = localStorage.s;
document.getElementsByClassName("score_container")[0].append(score);
btn.addEventListener("click", (_) => {
  let ran = Math.ceil(Math.random() * 100);
  let i = 0;
  while (true) {
    let val = prompt("Give a number between 1 - 100:");
    if (val === null || val === "" || isNaN(parseInt(+val))) break;
    i++;
    if (val < ran) {
      if (ran - val === 5)
        alert(
          "Little low\nHint: the number is around ∫(a = √10, b= 0) ​ ​x dx"
        );
      else if (ran - val < 5) alert("Low but very close");
      else if (ran - val > 5 && ran - val <= 10)
        alert("Little low\nHint: f(x)= x², your number is aound f'(5)");
      else if (ran - val > 10 && ran - val <= 20)
        alert("You are very low idiot !");
      else if (ran - val > 20) alert("You are very low idiot !");
    } else if (val > ran) {
      if (val - ran === 5)
        alert(
          "Little high\nHint: the number is around ∫(a = √10, b= 0) ​ ​x dx"
        );
      else if (val - ran < 5) alert("high but very close");
      else if (val - ran > 5 && val - ran <= 10)
        alert("Little high\nHint: f(x)= x², your number is aound f'(5)");
      else if (val - ran > 10 && val - ran <= 20)
        alert("You are very high idiot !");
      else if (val - ran > 20) alert("You are very high idiot !");
    } else {
      if (i < 7) {
        document.getElementById("reaction").src = "assets/img/cat_like.png";
        document.getElementsByTagName("h1")[0].textContent =
          "Thank you brother I am very happy now!";
      } else {
        document.getElementById("reaction").src = "assets/img/larry.png";
        document.getElementsByTagName("h1")[0].textContent =
          "Are you serious about your results? Did a chicken peck at your keyboard?";
        const larryVoice = document.createElement("audio");
        larryVoice.src = "assets/larry_voice.mp3";
        larryVoice.play();
      }
      btn.textContent = "start again";
      score.textContent = i;
      localStorage.s = i;
      alert("Conguration !\nYour score is: " + i);
      break;
    }
  }
});
