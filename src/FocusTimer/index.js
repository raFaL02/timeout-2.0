import state from "./state.js";
import * as events from "./events.js";
import * as timer from './timer.js';

export function start(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds
  
  timer.updateDisplay()

  events.firstCard()
  events.secondCard()
  events.thirdCard()
  events.fourthCard()
  
  events.registerControls()
  events.registerControlsMusic()
  events.setMinutes()
}