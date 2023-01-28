let text = document.getElementById("text");

let option = document.getElementById("option");
let timerclass = document.querySelectorAll(".time-interval");
let timerselect = document.querySelectorAll(".timeselect");
let time = document.getElementById("timechoose");
let starttest = document.getElementById("start");
let textarea = document.getElementById("typing");
let maincontainer = document.getElementById("main-container");
let result = document.getElementById("result");
let againtest = document.getElementById("again");
let wordPerMinute = document.getElementById("wpm");
let Accuracy = document.getElementById("accuracy");
let netPerMin = document.getElementById("npm");


starttest.disabled = true;
textarea.disabled = true;

//========================================= this is for for choose level of test and and comapre paragraph and input text===========================================

let array = [
  `the polite answer obediently bring kookily stop break in a discontented birth the polite answer obediently bring kookily stop break in a discontented birth the polite answer obediently bring kookily stop break in a discontented birth`,
  `the direct payment carelessly die because some animal cheerfully try over a powerful stage which became a dependable sincere need. the direct payment carelessly die because some animal cheerfully try over a powerful stage which, became a dependable, sincere need. the direct payment carelessly die because some animal cheerfully try over a powerful stage which, became a dependable sincere need.`,
  `The cheerful business, interestingly go because some milk boldly see by a positive soup which, became a obedient, approachable approval. The cheerful business interestingly go because some milk boldly "see" by a positive soup which, became a obedient, approachable approval. The cheerful business interestingly go because some milk boldly see by a positive soup which, became a obedient, approachable approval.`,
];

const quoteArr = array[0].split("");

quoteArr.forEach((char, index) => {
  const newSpan = document.createElement("span");
  newSpan.innerText = char;
  text.append(newSpan);
});

option.addEventListener("change", () => {
  console.log(option.value);

  if (option.value == "Low") {
    text.innerText = "";
    const quoteArr = array[0].split("");

    quoteArr.forEach((char, index) => {
      const newSpan = document.createElement("span");
      newSpan.innerText = char;
      text.append(newSpan);
    });
  } else if (option.value == "Medium") {
    text.innerText = "";

    const quoteArr = array[1].split("");

    quoteArr.forEach((char, index) => {
      const newSpan = document.createElement("span");
      newSpan.innerText = char;
      text.append(newSpan);
    });
  } else if (option.value == "Hard") {
    text.innerText = "";

    const quoteArr = array[2].split("");

    quoteArr.forEach((char, index) => {
      const newSpan = document.createElement("span");
      newSpan.innerText = char;
      text.append(newSpan);
    });
  }
});
////=====================End===================================================================

// ==================================this is for choose time============================================
function getchoosetime() {
  let timeChoose;

  for (let i = 0; i < timerselect.length; i++) {
    if (timerselect[i].checked) {
      starttest.disabled = false;

      timeChoose = timerselect[i].id;
    }
  }
  return timeChoose;
}

for (let j = 0; j < timerselect.length; j++) {
  timerselect[j].addEventListener("click", () => {
    let timechoosen = getchoosetime();
    if (timechoosen == "sec15") {
      time.innerText = 15;
      // let timetaken=15/60;
    } else if (timechoosen == "sec30") {
      time.innerText = 30;
    } else if (timechoosen == "min1") {
      time.innerText = 60;
    } else if (timechoosen == "min2") {
      time.innerText = 120;
    }
  });
}

//======================================================end===================================================================

// ===================================for focus textbox in click start and time starting========================

{
  start.addEventListener("click", () => {
    startTime = new Date();
    textarea.disabled = false;
    textarea.focus();
    let stop = setInterval(() => {
      time.innerText--;
      if (time.innerText == 0) {
        endTime = new Date();
        let accuracy = calculateWordAccuracy(textarea.value, text.innerText);
        let wpm = wordCal(startTime, endTime);
        let npm = npmCalculating(startTime, endTime);

        wordPerMinute.innerText = wpm;
        Accuracy.innerText = accuracy;
        netPerMin.innerText = npm;

        setTimeout(() => {
          maincontainer.style.display = "none";
          result.style.display = "block";
        }, 500);
        time.innerText = "Test complete";
        clearInterval(stop);
      }
    }, 1000);
  });
}
//============================================================== end===================================================

//=========================================== for compare word in paratext and input text===========

textarea.addEventListener("input", () => {
  const quoteArr = document.querySelectorAll("span");
  const inputArr = textarea.value.split("");

  let isCorrect = false;
  quoteArr.forEach((charSpan, index) => {
    const inputChar = inputArr[index];

    if (inputChar == null) {
      charSpan.classList.remove("correct");
      charSpan.classList.remove("incorrect");
      isCorrect = false;
    } else if (inputChar === charSpan.innerText) {
      charSpan.classList.add("correct");

      isCorrect = true;
    } else {
      isCorrect = false;

      charSpan.classList.add("incorrect");
    }
  });
  if (isCorrect) {
    textarea.value = null;
  }
});

againtest.addEventListener("click", () => {
  window.location.href = "index.html";
});

//===================================== for calculating wpm============================

function wordCal(startTime, endTime) {
  const words = textarea.value.split(" ");
  let wordCount = words.length;
  let timeTaken = (endTime - startTime) / 1000;
  let wpm = Math.round((wordCount / timeTaken) * 60);
  if (textarea.value == "") {
    return 0;
  } else {
    return wpm;
  }
}

//========================================================= End====================
// ================================================for calculating npm===============================
function npmCalculating(startTime, endTime) {
  const words = textarea.value.split("");
  let wordCount = words.length;
  let timeTaken = (endTime - startTime) / 1000;
  let npm = Math.round((wordCount / timeTaken) * 60);
  if (textarea.value == "") {
    return 0;
  } else {
    return npm;
  }
}

//========================================================= End====================

//======================================================== calculate Accurecy====================================

function calculateWordAccuracy(typedText, correctText) {
  typedText = typedText.toLowerCase();
  correctText = correctText.toLowerCase();

  let typedWords = typedText.split(" ");
  let correctWords = correctText.split(" ");

  let totalWords = typedWords.length;
  let correctWordsCount = 0;
  for (let i = 0; i < totalWords; i++) {
    if (typedWords[i] === correctWords[i]) {
      correctWordsCount++;
    }
  }
  return Math.round((correctWordsCount / totalWords) * 100) + "%";
}
