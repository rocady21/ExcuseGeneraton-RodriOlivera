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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateExcuse() {
  const whoPosition = getRandomIntInclusive(0, who.length - 1);
  const actionPosition = getRandomIntInclusive(0, action.length - 1);
  const whatPosition = getRandomIntInclusive(0, what.length - 1);
  const whenPosition = getRandomIntInclusive(0, when.length - 1);

  return (
    who[whoPosition] +
    " " +
    action[actionPosition] +
    " " +
    what[whatPosition] +
    "" +
    when[whenPosition]
  );
}

function onload() {
  const Excuse = generateExcuse();
  const excuseDocument = document?.getElementById("Excuse");

  return (excuseDocument.innerHTML = Excuse);
}

onload();
