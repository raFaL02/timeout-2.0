import state from './state.js'
import * as el from './elements.js'
import * as actions from './actions.js'
import { updateDisplay } from './timer.js'

export function registerControls() {
  el.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function registerControlsMusic() {
  el.musicMode.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}

export function firstCard() {
  el.firstMusic.addEventListener('click', (event) => {
    el.firstMusic.classList.toggle('selected')
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
}

export function secondCard() {
  el.secondMusic.addEventListener('click', (event) => {
    el.secondMusic.classList.toggle('selected')
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
}

export function thirdCard() {
  el.thirdMusic.addEventListener('click', (event) => {
    el.thirdMusic.classList.toggle('selected')
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function' ) {
      return
    }

    actions[action]()
  })
}

export function fourthCard() {
  el.fourthMusic.addEventListener('click', (event) => {
    el.fourthMusic.classList.toggle('selected')
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
}