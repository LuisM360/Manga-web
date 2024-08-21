const dBtn = document.getElementById("decreaseBtn");
const rBtn = document.getElementById("resetBtn");
const iBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

iBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

dBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

rBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
