import "./styles.css";

// create a container to hold the buttons
const buttonContainer = document.createElement("div");
buttonContainer.id = "btnContainer";
document.getElementById("app").appendChild(buttonContainer);

// create the buttons and put them in the container
const yesButton = document.createElement("button");
const noButton = document.createElement("button");
yesButton.innerText = "Yes";
yesButton.id = "btnYes";
noButton.innerText = "No";
noButton.id = "btnNo";
buttonContainer.appendChild(noButton);
buttonContainer.appendChild(yesButton);
buttonContainer.className = "container";

// create a container for the message
const message = document.createElement("p");
buttonContainer.appendChild(message);

// handle the click events from both buttons with one handler for each button
yesButton.addEventListener("click", event => {
  // console.log(event.target.innerText);
  message.innerText = "you said yes";
  console.log("--currentTarget: " + event.currentTarget.id);
});

noButton.addEventListener("click", event => {
  // console.log(event.target.innerText);
  message.innerText = "you said no";
  console.log("--currentTarget: " + event.currentTarget.id);
});

// handle the click events from both buttons in one function
// buttonContainer.addEventListener("click", event => {
//   console.log("target: " + event.target.id);
//   console.log("++currentTarget: " + event.currentTarget.id);

//   const whichButton = event.target.id;
//   console.log("whichButton: " + whichButton);

//   if (whichButton === "btnYes") {
//     // buttonContainer.style['background-color'] = 'yellow';

//     // buttonContainer.className ='yes';
//     buttonContainer.classList.add('yes');
//     buttonContainer.classList.remove('no');
//   } else if (whichButton === "btnNo") {
//     // buttonContainer.className ='no';
//     buttonContainer.classList.add('no');
//     buttonContainer.classList.remove('yes');
//   }
// });
// buttonContainer.onclick = handler();
buttonContainer.onclick = event => {
  event.preventDefault();
  handler();
  return undefined;
};

const handler = () => {
  console.log("this is the handler");
};
