
export class Car {
  private make: string;
  private model: string;
  private intervalId: NodeJS.Timeout | null;
  private speed = 0;
  private inPark: boolean;
  
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
    this.intervalId = null;
    this.inPark = true;
  }

  public honk = (): void => {
    console.log(`${this.make} ${this.model} says honk honk!`);
  };

  public startDriving = (): void => {
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
        console.log("driving every " + this.speed);
      } else {
        this.park();
      }
    }, this.speed);
    
  };

  public brake = (): void => {
    if(this.inPark == true ){
      console.log("You braked, but were already in park");
      this.park();
    } else {
      this.intervalId = setInterval(() => {
        if(this.speed > 2){
          this.speed = this.speed / 5;
          console.log("slowing down" + this.speed);
        } else {
          this.park();
        }
      }, this.speed);
    }
  }
  
  public park = (): void => {

    if(this.inPark == true){
      console.log("were already in park");
    }
    
    if(this.intervalId !== null) {
      this.speed = 0;
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log("we're in park now");
    }
  };
}
