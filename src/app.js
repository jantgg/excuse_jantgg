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

  let item1 = who[Math.floor(Math.random() * who.length)];
  let item2 = action[Math.floor(Math.random() * action.length)];
  let item3 = what[Math.floor(Math.random() * what.length)];
  let item4 = when[Math.floor(Math.random() * when.length)];
  let excuse = item1 + " " + item2 + " " + item3 + " " + item4 + ".";

  document.querySelector("#greeting").innerHTML = excuse;
  console.log("Hello World");
};
