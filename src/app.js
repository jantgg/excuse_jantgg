/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let item1 = who[Math.floor(Math.random() * 4)];
  let item2 = action[Math.floor(Math.random() * 4)];
  let item3 = what[Math.floor(Math.random() * 3)];
  let item4 = when[Math.floor(Math.random() * 5)];
  let excuse = item1 + " " + item2 + " " + item3 + " " + item4 + ".";

  document.querySelector("#greeting").innerHTML = excuse;
  console.log("Hello World");
};
