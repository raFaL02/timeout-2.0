import state from "./state.js"
import * as el from './elements.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')

  timer.updateDisplay()
}

// Falta aguns ajustem em add ou subtrair os 5 segundos, por exemplo 
// quando ele esta 00:58 e eu add + 5 segundos ele não add 5 segundos.

// Function to add + 5 seconds
export function add() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  
  seconds += 5

  if(minutes > 59) {
    return
  }
  
  if(seconds > 59) {
    seconds = 
    minutes ++
  }
  

  timer.updateDisplay(minutes, seconds)
}

// Function to subtraction - 5 seconds
export function sub() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds -= 5

  if(seconds < 0) {
    seconds = 55
    minutes --
  }

  if(minutes < 0) {
    return
  }

  timer.updateDisplay(minutes, seconds)
}

export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export function firstMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')

  if(state.isMute) {
    sounds.forestMusic.play()
    return
  }

  sounds.forestMusic.pause() 
}

export function secondMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')

  if(state.isMute) {
    sounds.rainMusic.play()
    return
  }

  sounds.rainMusic.pause()
}

export function thirdMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')

  if(state.isMute) {
    sounds.coffeMusic.play()
    return
  }

  sounds.coffeMusic.pause()

  if(firstMusic == toggle('music-on')) {
    sounds.coffeMusic.pause()
    return
  }
}

export function fourthMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')

  if(state.isMute) {
    sounds.fireplaceMusic.play()
    return
  }

  sounds.fireplaceMusic.pause()
}