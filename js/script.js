// Created by: Mikey Gloriani
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-3-04-JS/sw.js", {
    scope: "/ICS2O-Unit-3-04-JS/",
  })
}

/**
 * This function calculates the volume of a sphere
 */
function calculate() {
  // input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)

  // process
  const Temperature = ((fahrenheit - 32) * 5) / 9

  // output
  document.getElementById("temperature").innerHTML =
    "The temperature is: " + Temperature + " °C"
}
