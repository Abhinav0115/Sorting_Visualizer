const container = document.querySelector(".data-container");

// function to generate bars
function generatebars(num = 20) {
  //for loop to generate 20 bars
  for (let i = 0; i < num; i += 1) {
    // To generate random values from 1 to 100
    const value = Math.floor(Math.random() * 100) + 1;

    // To create element "div"
    const bar = document.createElement("div");

    // To add class "bar" to "div"
    bar.classList.add("bar");

    // Provide height to the bar
    bar.style.height = `${value * 3 + 15}px`;

    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;

    // To create element "label"
    const barLabel = document.createElement("label");

    // To add class "bar_id" to "label"
    barLabel.classList.add("bar_id");

    // Assign value to "label"
    barLabel.innerHTML = value;

    // Append "Label" to "div"
    bar.appendChild(barLabel);

    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}

// asynchronous function to perform "Bubble Sort"
async function BubbleSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
  // Assign 0 to min_idx
  // var min_idx = 0;
  for (var i = 0; i < bars.length - 1; i += 1) {
    // Assign i to min_idx
    // min_idx = i;

    // Provide darkblue color to the ith bar
    // bars[i].style.backgroundColor = "darkblue";
    for (var j = 0; j < bars.length - i - 1; j += 1) {
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "darkblue";
      bars[j + 1].style.backgroundColor = "red";

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      // To store the integer value of jth bar to var1
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);

      // To store the integer value of (min_idx)th bar to var2
      var val2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

      // Compare val1 & val2
      if (val1 < val2) {
        var temp1 = bars[j].style.height;
        var temp2 = bars[j].childNodes[0].innerText;
        bars[j].style.height = bars[j + 1].style.height;
        bars[j + 1].style.height = temp1;
        bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
        bars[j + 1].childNodes[0].innerText = temp2;
        bars[j + 1].style.backgroundColor = " rgb(24, 190, 255)";
        bars[j].style.backgroundColor = " rgb(24, 190, 255)";
      } else {
        // Provide skydarkblue color to the jth bar
        bars[j].style.backgroundColor = " rgb(24, 190, 255)";
        bars[j + 1].style.backgroundColor = " rgb(24, 190, 255)";
      }
      if (j == bars.length - i - 2) {
        bars[j + 1].style.backgroundColor = " #58FF58";
      }
    }
  }

  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  // To enable the button "Bubble Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
}

// Call "generatebars" function
generatebars();

// function to generate new random array
function generate() {
  window.location.reload();
}

// function to disable the button
function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

  // To disable the button "Bubble Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}

//function to reset
function reset() {
  generate();
}
