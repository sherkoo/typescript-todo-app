export class Windows {
  private windows: boolean;
  private speed: number;
  private intervalId: NodeJS.Timeout | null;

  constructor(){
    this.windows = true;
    this.speed = 900;
    this.intervalId = null;
  }

  // windows
  public handleWindows = (): void => {
    this.intervalId = setInterval(() => {
      if(this.speed > 1){
        this.speed = Math.floor(this.speed / 7);
        console.log("windows going down at: " + this.speed);
      } else {
        if(this.intervalId !== null) {
          clearInterval(this.intervalId);
          console.log("windows down");
        }
      }
    }, this.speed);
  }
    

    // if(this.windows == true){
    //   console.log('placeholder');
    // } else {
    //   console.log('placeholder');
    // }
  // };
}