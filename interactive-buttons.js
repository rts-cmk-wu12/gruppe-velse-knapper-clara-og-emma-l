const buttonBackgroundChange = document.querySelector('#button-background-change');
const buttonAlert = document.querySelector('#button-alert');
const buttonImage = document.querySelector('#button-image');
const image = document.querySelector('.image');
const buttonText = document.querySelector('#button-text');
const buttonReset = document.querySelector('#button-reset');
const buttonFontSize = document.querySelector('#button-font-size');
const buttonOrder = document.querySelector('#button-order');
const buttonBackgroundColor = document.querySelector('#button-background-color');
const buttonChangeSize = document.querySelector('#button-change-size');
const buttonFlex = document.querySelector('#button-flex');
const buttonMarginTop = document.querySelector('#button-margin-top');
const buttonTransform = document.querySelector('#button-transform');
const container = document.querySelector('#container');
const buttonsContainer = document.querySelector('.buttons');
const allButtons = buttonsContainer.children;
const body = document.body;

// = bruges til at assigne en værdi.
// når jeg sætter punktum angiver jeg, at det, der kommer efter . tilhører det, der står foran.
// her: document's queryselector

buttonBackgroundChange.addEventListener('click', colorChange);
// NB: ingen paranteser efter colorChange når den står som parameter i eventlisteneren.
// hvis () efter, bliver den kaldt, men den skal kun kaldes ved eventet, derfor ingen ()

buttonAlert.addEventListener('click', showAlert);
buttonImage.addEventListener('click', showImage);
buttonText.addEventListener('click', showText);
buttonReset.addEventListener('click', resetAll);
buttonFontSize.addEventListener('click', changeFontSize);
buttonOrder.addEventListener('click', shuffleOrder);
buttonBackgroundColor.addEventListener('click', changeBackgroundColor);
buttonChangeSize.addEventListener('click', changeSize);
buttonFlex.addEventListener('click', flexButtons);
buttonMarginTop.addEventListener('click', addMargin);
buttonTransform.addEventListener('click', rotateButton);


// lave en anden funktion, som skal aktiveres, når vi trykker på knappen (anonym funktion er ikke så pænt)
function colorChange() {
    body.style.backgroundColor = 'magenta';
}

function showAlert() {
    alert('Hello World!');
}
// kunne evt skrive e eller event som parameter, men i js giver det ikke en fejl at lade være.
// js smider bare koden væk (uden at give mig besked), men i andre sprog ville det give en fejl

// Henrik foreslår at sætte variabler sammen, eventlisteners sammen og funktionsdefinitioner sammen
// funktionsdefinitioner må gerne stå under eventlisteners, der kalder dem, fordi de først bliver kaldt, når nogen trykker på knappen

function showImage() {
    image.style.display = 'block';
}

function showText() {
    container.innerHTML += 'her er text ';
}

function resetAll() {
    location.reload();
}

function changeFontSize() {
    buttonBackgroundChange.style.fontSize = '2rem';
    buttonAlert.style.fontSize = '0.2rem';
    buttonImage.style.fontSize = '5rem';
    buttonText.style.fontSize = '0.4rem';
    buttonFontSize.style.fontSize = '2rem';
    buttonReset.style.fontSize = '0.2rem';
}

function shuffleOrder() {
    buttonBackgroundChange.style.order = '7';
    buttonAlert.style.order = '3';
    buttonImage.style.order = '1';
    buttonText.style.order = '6';
    buttonFontSize.style.order = '4';
    buttonReset.style.order = '2';
}

function changeBackgroundColor() {
    buttonBackgroundChange.style.backgroundColor = 'red';
    buttonAlert.style.backgroundColor = 'purple';
    buttonImage.style.backgroundColor = 'green';
    buttonText.style.backgroundColor = 'cornflowerblue';
    buttonFontSize.style.backgroundColor = 'yellow';
    buttonReset.style.backgroundColor = 'black';
    buttonBackgroundColor.style.backgroundColor = 'hotpink';
    buttonChangeSize.style.backgroundColor = 'orange';
    buttonFlex.style.backgroundColor = 'grey';
}

function changeSize() {
    buttonBackgroundChange.style.gridArea = '1 / 3 / 4 / 6';
    buttonAlert.style.backgroundColor = '2 / 8 / 2 / 4';
    buttonImage.style.backgroundColor = '5 / 3 / 8 / 13';
    buttonText.style.backgroundColor = '8 / 10 / 7 / 8';
    buttonFontSize.style.backgroundColor = '3 / 4 / 4 / 5';
    buttonReset.style.backgroundColor = '9 / 13 / 3 / 6';
    buttonBackgroundColor.style.backgroundColor = '11 / 12 / 9 / 11';
}

function flexButtons() {
    buttonsContainer.style.display = 'flex';
}

function addMargin () {
    buttonsContainer.style.marginTop = '2rem';
}

function rotateButton() {
    buttonBackgroundChange.style.transform = 'rotate(0.75turn)';
    buttonAlert.style.transform = 'rotate(0.55turn)';
    buttonImage.style.transform = 'rotate(0.15turn)';
    buttonText.style.transform = 'rotate(0.95turn)';
    buttonFontSize.style.transform = 'rotate(0.5turn)';
    buttonReset.style.transform = 'rotate(0.45turn)';
    buttonBackgroundColor.style.transform = 'rotate(0.25turn)';
    buttonChangeSize.style.transform = 'rotate(0.05turn)';
    buttonFlex.style.transform = 'rotate(0.65turn)';
}