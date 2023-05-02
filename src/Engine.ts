export class Engine {
  public engineOn: boolean;

  constructor(){
    this.engineOn = false;
  }

  public startEngine() {
    if(this.engineOn === true){
      console.log("Engine is already started");
    } else {
      console.log("⚙️ Starting engine");
      this.engineOn = true;
    }
  }

  public stopEngine() {
    console.log("⚙️ Stopping engine");
    this.engineOn = false;
  }
    
  public get isEngineOn() {
    return this.engineOn;
  }
}