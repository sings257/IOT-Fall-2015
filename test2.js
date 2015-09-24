// button is attaced to pin 4, led to 17
// modified from from adafuit https://learn.adafruit.com/node-embedded-development/events
var GPIO = require('onoff').Gpio,
    led1 = new GPIO(17, 'out'),
    button1 = new GPIO(4, 'in'),
    led2 = new GPIO(24, 'out'),
    button2 = new GPIO(23, 'out', 'both');






////////////////define the callback function/////////////////
function light(err, state) {
  
  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    led1.writeSync(1);
    led2.writeSync(1);
    //state=0;
  } 
  
}

function dark(err, state) {

  if(state == 1) {
    led1.writeSync(0);
    led2.writeSync(0);
    //state=1;
  }
}

// pass the callback function to the
// as the first argument to watch()
state=0;
button1.watch(light);
button2.watch(dark);
