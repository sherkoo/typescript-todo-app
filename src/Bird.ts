import { CanFly } from "./Interface";

class Bird implements CanFly{

  fly(message:number): void {
    console.log('were flying from the bird module' + message);
  }

  sing(): void {
    console.log('singing');
  }
}

const bird = new Bird();
bird.fly(55);