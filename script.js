const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
];

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", placeNumber);

const callNumber = document.querySelector("#number-call");

const nextCall = document.querySelector("#next-call");
nextCall.addEventListener("click", () => {
  callNumber.innerHTML = getCall();
});

function getCall() {
  let newCall = Math.floor(Math.random() * numbers.length + 1);
  if (newCall < 16) {
    return "B" + newCall;
  } else if (newCall >= 16 && newCall <= 30) {
    return "I" + newCall;
  } else if (newCall >= 31 && newCall <= 45) {
    return "N" + newCall;
  } else if (newCall >= 46 && newCall <= 60) {
    return "G" + newCall;
  } else if (newCall >= 61 && newCall <= 75) {
    return "O" + newCall;
  }
}

function placeNumber() {
  const bNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const bMarkers = document.querySelectorAll("#b-marker");
  for (let i = 0; i < bMarkers.length; i++) {
    bMarkers[i].innerHTML = Math.floor(Math.random() * bNumbers.length + 1);
  }

  const iNumbers = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  const iMarkers = document.querySelectorAll("#i-marker");
  for (let i = 0; i < iMarkers.length; i++) {
    iMarkers[i].innerHTML = Math.floor(Math.random() * iNumbers.length + 16);
  }

  const nNumbers = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

  const nMarkers = document.querySelectorAll("#n-marker");
  for (let i = 0; i < nMarkers.length; i++) {
    nMarkers[i].innerHTML = Math.floor(Math.random() * nNumbers.length + 31);
  }

  const gNumbers = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];

  const gMarkers = document.querySelectorAll("#g-marker");
  for (let i = 0; i < gMarkers.length; i++) {
    gMarkers[i].innerHTML = Math.floor(Math.random() * gNumbers.length + 46);
  }

  const oNumbers = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];

  const oMarkers = document.querySelectorAll("#o-marker");
  for (let i = 0; i < oMarkers.length; i++) {
    oMarkers[i].innerHTML = Math.floor(Math.random() * oNumbers.length + 61);
  }
}
