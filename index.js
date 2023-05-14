// let input = document.getElementById("inputBox");
// let buttons = document.querySelectorAll("button");

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       string = eval(string);
//       input.value = string;
//     } else if (e.target.innerHTML == "AC") {
//       string = "";
//       input.value = string;
//     } else if (e.target.innerHTML == "DE") {
//       string = string.substring(0, string.length - 1);
//       input.value = string;
//     } else {
//       string += e.target.innerHTML;
//       input.value = string;
//     }
//   });
// });

// let input = document.getElementById("inputBox");
// let buttons = document.querySelectorAll("button");

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML === "=") {
//       try {
//         string = new Function("return " + string)();
//         input.value = string;
//       } catch (error) {
//         input.value = "Error";
//       }
//     } else if (e.target.innerHTML === "AC") {
//       string = "";
//       input.value = string;
//     } else if (e.target.innerHTML === "DE") {
//       string = string.substring(0, string.length - 1);
//       input.value = string;
//     } else {
//       string += e.target.innerHTML;
//       input.value = string;
//     }
//   });
// });

let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      try {
        string = new Function("return " + string)();
        input.value = string;
      } catch (error) {
        input.value = "Error";
      }
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DE") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }

    adjustFontSize(); // Call the function to adjust font size after each button click
  });
});

function adjustFontSize() {
  const fontSize = 40; // Initial font size in pixels
  const maxLength = 10; // Maximum number of characters before resizing

  if (string.length > maxLength) {
    const ratio = maxLength / string.length;
    const newSize = Math.floor(fontSize * ratio);
    input.style.fontSize = newSize + "px";
  } else {
    input.style.fontSize = fontSize + "px";
  }
}
