// interface testing
import './Bird';

// todo app testing
import todoApp from "./Todo2";

todoApp.addTodo("adding new todo");
todoApp.addTodo("adding new todo2");
todoApp.addTodo("adding new todo3");

// engine
import { Engine } from "./Engine";
const myEngine = new Engine();

const engine = document.querySelector("#engine");
engine?.addEventListener("click", () => {
  myEngine.startEngine();
});

const stopEngine = document.querySelector("#stopEngine");
stopEngine?.addEventListener("click", () => {
  myEngine.stopEngine();
});

// windows
import { Windows } from "./Windows";
const myWindows = new Windows();

// radio
import { Radio } from "./Radio";
const myRadio = new Radio(myEngine);

// car
import { Car } from "./Car";
const myCar = new Car("Mazda", "CX-5", myEngine);


// honk
const honkButton = document.querySelector("#honk-button");
honkButton?.addEventListener("click", () => {
  myCar.honk();
});

// brake
const brake = document.querySelector("#brake");
brake?.addEventListener("click", () => {
  myCar.brake();
});

// park
const park = document.querySelector("#park");
park?.addEventListener("click", () => {
  myCar.park();
})

// drive
const startDriving = document.querySelector("#drive");
startDriving?.addEventListener("click", () => {
  myCar.startDriving();
});

// reverse
const reverse = document.querySelector("#reverse");
reverse?.addEventListener("click", () => {
  myCar.reverse();
});

// wipers
const wipers = document.querySelector("#wipers");
wipers?.addEventListener("click", () => {
  myCar.handleWipers();
});

// radio
const radio = document.querySelector("#radio");
radio?.addEventListener("click", () => {
  myRadio.handleRadio();
});

// windows
const windows = document.querySelector("#windows");
windows?.addEventListener("click", () => {
  myWindows.handleWindows();
});