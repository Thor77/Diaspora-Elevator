// ==UserScript==
// @name        Diaspora-Elevator
// @namespace   thor77.org
// @description Includes ElevatorJS into Diaspora
// @include     https://*/stream
// @version     1
// @grant       none
// @require     https://github.com/tholman/elevator.js/raw/master/elevator.min.js
// ==/UserScript==

var elevator = new Elevator({
  element: document.querySelector('#back-to-top'),
  mainAudio: 'https://raw.githubusercontent.com/tholman/elevator.js/master/demo/music/elevator.mp3',
  endAudio: 'https://raw.githubusercontent.com/tholman/elevator.js/master/demo/music/ding.mp3'
});
console.log('Elevator injected!');