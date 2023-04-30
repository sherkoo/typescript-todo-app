import todoApp from "./Todo2";

todoApp.addTodo("adding new todo");
todoApp.addTodo("adding new todo2");
todoApp.addTodo("adding new todo3");

// car
import { Car } from "./Car";
const myCar = new Car("Toyota", "Corolla");

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