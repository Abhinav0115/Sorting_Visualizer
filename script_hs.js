const container = document.querySelector(".data-container");
console.log("working top");

// Function to generate the array of bars
function generatebars(num = 20) {
  for (var i = 0; i < num; i++) {
    // Return a value from 1 to 100 (both inclusive)
    var value = Math.ceil(Math.random() * 100);

    // Creating element div
    var bar = document.createElement("div");

    // Adding class 'block' to div
    bar.classList.add("bar");

    // Adding style to div
    bar.style.height = `${value * 3}px`;
    bar.style.transform = `translate(${i * 30}px)`;

    // Creating label element for displaying
    // size of particular block
    var barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerText = value;

    // Appending created elements to index.html
    bar.appendChild(barLabel);
    container.appendChild(bar);
  }
}

// Function to generate the indexes
var count_container = document.getElementById("count");
function generate_idx() {
  for (var i = 0; i < 20; i++) {
    // Creating element div
    var array_ele2 = document.createElement("div");

    // Adding class 'block2' to div
    array_ele2.classList.add("block2");

    // Adding style to div
    array_ele2.style.height = `${20}px`;
    array_ele2.style.transform = `translate(${i * 30}px)`;

    // Giving indexes
    var barLabel2 = document.createElement("label");
    barLabel2.classList.add("block_id3");
    barLabel2.innerText = i;

    // Appending created elements to index.html
    array_ele2.appendChild(barLabel2);
    count_container.appendChild(array_ele2);
  }
}

// Asynchronous Heapify function
async function Heapify(n, i) {
  var bars = document.querySelectorAll(".bar");
  var largest = i; // Initialize largest as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (
    l < n &&
    Number(bars[l].childNodes[0].innerHTML) >
      Number(bars[largest].childNodes[0].innerHTML)
  )
    largest = l;

  // If right child is larger than largest so far
  if (
    r < n &&
    Number(bars[r].childNodes[0].innerHTML) >
      Number(bars[largest].childNodes[0].innerHTML)
  )
    largest = r;

  // If largest is not root
  if (largest != i) {
    var temp1 = bars[i].style.height;
    var temp2 = bars[i].childNodes[0].innerText;
    bars[i].style.height = bars[largest].style.height;
    bars[largest].style.height = temp1;
    bars[i].childNodes[0].innerText = bars[largest].childNodes[0].innerText;
    bars[largest].childNodes[0].innerText = temp2;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 250)
    );

    // Recursively Hapify the affected sub-tree
    await Heapify(n, largest);
  }
}

// Asynchronous HeapSort function
async function HeapSort(n) {
  var bars = document.querySelectorAll(".bar");

  // Build heap (rearrange array)
  for (var i = n / 2 - 1; i >= 0; i--) {
    await Heapify(n, i);
  }

  // One by one extract an element from heap
  for (var i = n - 1; i > 0; i--) {
    // Move current root to end
    var temp1 = bars[i].style.height;
    var temp2 = bars[i].childNodes[0].innerText;
    bars[i].style.height = bars[0].style.height;
    bars[0].style.height = temp1;
    bars[i].childNodes[0].innerText = bars[0].childNodes[0].innerText;
    bars[0].childNodes[0].innerText = temp2;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 250)
    );

    // Call max Heapify on the reduced heap
    await Heapify(i, 0);
  }
 // To enable the button "Generate New Array" after final(sorted)
 document.getElementById("Button1").disabled = false;
 document.getElementById("Button1").style.backgroundColor = "#6f459e";

 // To enable the button "Bubble Sort" after final(sorted)
 document.getElementById("Button2").disabled = false;
 document.getElementById("Button2").style.backgroundColor = "#6f459e";
}

// Calling generatearray function
generatebars();

function generate() {
  window.location.reload();
}

function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

  // To disable the button "Bubble Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
// Calling generate_idx function
generate_idx();
console.log("Working");

// Calling HeapSort function

//function to reset
function reset() {
  generate();
}
