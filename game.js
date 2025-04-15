let ran = Math.ceil(Math.random() * 100);
let btn = document.getElementById("start");
console.log(ran);
btn.onclick = function () {
  let i = 0;
  let name = prompt("Donner votre nom:");
  while (true) {
    if (name === null || name === "") break;
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
        let newItem = document.createElement("li");
        newItem.textContent = name + ": " + i;
        document.getElementsByClassName("navList")[0].append(newItem);
      ran = Math.ceil(Math.random() * 100);
      console.log(ran);

      alert("Conguration !\nYour score is: " + i);
      break;
    }
  }
};
