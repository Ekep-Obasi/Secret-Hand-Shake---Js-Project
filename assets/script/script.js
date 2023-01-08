alert("okay");
const secretGreeting = {
  wink: 1,
  doubleWink: 10,
  closeYourEyes: 100,
  Jump: 1000,
  reverseOrder: 10000,
};

function binaryToDecimal(n) {
  return n.toString(2);
}

function binaryPartition(n) {
  let arr = n.split("");
  let pow = arr.length;
  const partition = [];
  for (let i = 0; i < arr.length; i++) {
    partition.push(arr[i] * Math.pow(10, pow - 1));
    pow--;
  }
  return partition.filter((el) => el !== 0).sort();
}

function getKeyByValue(object, value) {
  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      if (object[prop] === value) return prop;
    }
  }
}

function reverseIfNeedBe(n) {
  n.forEach((el, index) => {
    if (el === "reverseOrder") {
      n.splice(index, 1);
      return n.reverse();
    } else if (el === "undefined") {
      n.splice(index, 1);
    }
  });
  return n;
}

function secretHandShake(n) {
  let number = binaryToDecimal(n);
  let arr = binaryPartition(number);
  let result = [];
  arr.forEach((greet) => {
    for (let i = 0; i < arr.length; i++) {
      if (greet == arr[i]) {
        result.push(getKeyByValue(secretGreeting, greet));
      }
    }
  });
  return reverseIfNeedBe(result);
}

const form = document.querySelector(".form");
const value = document.querySelector(".input").value;
const displayArea = document.querySelector(".display-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayArea.innerHTML = secretHandShake(value);
});


