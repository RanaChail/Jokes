let jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "What did one wall say to the other wall? I'll meet you at the corner!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why was the math book sad? Because it had too many problems!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why don't crabs donate? Because they're shellfish!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why don't eggs tell jokes? Because they might crack up!",
  "What do you call a snowman with a six-pack? An abdominal snowman!",
  "What's the best time to go to the dentist? Tooth-hurty!",
  "What do you get when you cross a snowman and a vampire? Frostbite!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What did one hat say to the other hat? You stay here, I'll go on ahead!",
  "What's a frog's favorite drink? Croak-a-Cola!",
  "What did the big flower say to the little flower? Hi, bud!",
  "Why don't crabs give to charity? Because they're shellfish!",
  "Why don't eggs tell jokes? They might crack up!",
  "What do you call a fish with no eyes? Fsh!",
  "What do you get if you cross a snowCertainly!",
];

let jokecopy = [...jokes];
let random, index;

const joke = () => {
  //Random joke generate function
  if (jokecopy[0] == undefined) {
    jokecopy = [...jokes];
  }
  index = Math.floor(Math.random() * jokecopy.length);
  random = jokecopy[index];
  jokecopy.splice(index, 1);
  return random;
};

//Now displaying part
let clickyes = () => {
  document.getElementById("display").innerHTML = joke();
  document.getElementById("yes").play();
};
let clickno = () => {
  document.getElementById("display").innerHTML = `Ok! No joke for you`;
  document.getElementById("no").play();
};

document.getElementById("yesbtn").addEventListener("click", clickyes);
document.getElementById("nobtn").addEventListener("click", clickno);
