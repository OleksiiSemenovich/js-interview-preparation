const inputs = document.querySelectorAll(".fields input");
const filterValues = {
  blur: 1
};

const clickHandler = (event) => {
  for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    input.value = 0;
    
    // const eventChange = document.createEvent("HTMLEvents");
    // eventChange.initEvent("кто то обкакался", true, false);
    // input.dispatchEvent(eventChange);


  }
};

document.querySelector("#reset").addEventListener("click", clickHandler);

document.querySelector(".fields").addEventListener("change", (event) => {
  const filterName = event.target.name;
  const filterValue = event.target.value;

});

// document.querySelector(".fields").onchange = function (event) {
//   debugger;
// };

function changeStyles(filterName = "blur", filterValue = "10") {
  // меняем стили в картинке
}

function updateOutput(filterName = "blur", filterValue = "10") {
  
}


const getSum = (arg1, arg2) => {
  return arg1 + arg2;
};



const changeText = (text) => {
  document.querySelector("#text").textContent = text;
};

changeText("Text");
changeText("Shop");
changeText("Photo");




















document.querySelector("#text").textContent = "Text";
sendToPrinter("Text");






document.querySelector("#text").textContent = "Shop";
sendToUSB("Shop");