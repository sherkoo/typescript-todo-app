// engine
import { Engine } from "./Engine";

// Radio
export class Radio {
  private radio: boolean;
  private radioChannel: Array<number>;
  private engine: Engine;

  constructor(engine: Engine) {
    this.radio = false;
    this.radioChannel = [1,2,3];
    this.engine = engine;
  }

  // radio
  public handleRadio = (): void => {
    if(this.engine.engineOn){
      if(this.radio == false){
        this.radio = true;
        this.handleRadioChannel();
        console.log("🎶 radio turned on ");
      } else {
        this.radio = false;
        console.log("📴 radio turned off");
      }
    } else {
      console.log("Car must be turned on to activate the radio");
      
    }
  }

  // handle radio channeln
  public handleRadioChannel = (): void => {
    if(this.radio == true){
      const channelNum = Math.floor(Math.random() * this.radioChannel.length);
      
      console.log("listening to Station: " + this.radioChannel[channelNum]);

      switch(channelNum){
        case(0):
          console.log('🎸 Listening to black metal!');
          break;
        case(1):
          console.log('🎷 Listening to Jazz');
          break;
        case(2):
          console.log('🎻 Listening to classical');
          break;  
      }
    }
  }
}