let btn = document.getElementById("start");
let score = document.createElement("span");
score.textContent = localStorage.s;
document.getElementsByClassName("score_container")[0].append(score);
btn.onclick = function () {
  let ran = Math.ceil(Math.random() * 100);
  let i = 0;
  while (true) {
    let val = prompt("Give a number between 1 - 100:");
    if (val === null || val === "" || isNaN(parseInt(+val))) break;
    i++;
    if (val < ran) {
      alert("Too low");
      if(ran - val <= 5)
        alert("Hint: the number is around ∫(a = √10, b= 0) ​ ​x dx")
      if(ran - val > 5 && ran - val <= 10)
        alert("Hint: f(x)= x², your number is aound f'(5)")
      if(ran - val > 20)
        alert("You are very far idiot !")
    } 
    else if (val > ran) {
      alert("Too High");
      if(val - ran <= 5)
        alert("Hint: the number is around ∫(a = √10, b= 0) ​ ​x dx")
      if(val - ran > 5 && val - ran <= 10)
        alert("Hint: f(x)= x², your number is aound f'(5)")
      if(val - ran > 20)
        alert("You are very far idiot !")
    } 
    else {
      if(i < 7) {
        document.getElementById("reaction").src = "img/cat_like.png";
        document.getElementsByTagName("h1")[0].textContent =
          "Thank you brother I am very happy now!";
      }
      else {
        document.getElementById("reaction").src = "img/larry.png";
        document.getElementsByTagName("h1")[0].textContent =
        "Are you serious about your results? Did a chicken peck at your keyboard?";  
      }
      btn.textContent = "start again";
      score.textContent = i;
      localStorage.s = i;
      ran = Math.ceil(Math.random() * 100);
      alert("Conguration !\nYour score is: " + i);
      break;
    }
  }
};
