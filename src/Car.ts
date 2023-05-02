// engine
import { Engine } from "./Engine";

// Car
export class Car {
  private make: string;
  private model: string;
  private intervalId: NodeJS.Timeout | null;
  private speed: number;
  private inPark: boolean;
  private wipers: boolean;
  private windows: boolean;
  private engine: Engine;
  
  constructor(make: string, model: string, engine: Engine) {
    this.make = make;
    this.model = model;
    this.intervalId = null;
    this.inPark = true;
    this.wipers = false;
    this.windows = true;
    this.speed = 0;
    this.engine = engine;
  }

  // honk
  public honk = (): void => {
    console.log(`🔊 ${this.make} ${this.model} says honk honk!`);
  };

  // wipers
  public handleWipers = (): void => {
    if(this.engine.isEngineOn){
      if(this.wipers == false){
        this.wipers = true;
        console.log("🌧 wipers are on");
      } else {
        this.wipers = false;
        console.log("📴 wipers turned off");
      }
    } else {
      console.log("Engine is not on. Wipers wont work");
    }
  };

  // start driving
  public startDriving = (): void => {
    if(this.engine.isEngineOn){
      this.inPark = false;
      this.speed = 1000;
      console.log("park: " + this.inPark);
      console.log("speed: " + this.speed);
      
      if (this.intervalId !== null) {
        console.log(`${this.make} ${this.model} is already driving`);
        return;
      }

      this.intervalId = setInterval(() => {
        if(this.speed > 2){
          console.log("🚗 Driving every. Speed:  " + this.speed);
        } else {
          this.park();
        }
      }, this.speed);
    }
  };

  // reverse
  public reverse = (): void => {
    if(this.inPark == true){
      console.log("⬅️ Going in reverse")
    } else if(this.speed > 2){
      console.log("⚠️ You're trying to reverse but you need to stop first");
    } else {
      console.log("can't reverse");
    }
  }

  // brake
  public brake = (): void => {
    if(this.inPark == true ){
      console.log("🛑 You braked, but were already in park");
      this.park();
    } else {
      this.intervalId = setInterval(() => {
        if(this.speed > 2){
          this.speed = Math.ceil(this.speed / 5);
          console.log("🐢 Slowing down. Speed: " + this.speed);
        } else {
          this.park();
        }
      }, this.speed);
    }
  }
  
  // park
  public park = (): void => {

    this.inPark = true;

    if(this.intervalId !== null) {
      this.speed = 0;
      this.inPark = true;
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log("🛑 we're in park now");
    }
  };
}
