import {Header, Nav, Main, Footer} from "./components";
import * as store from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector('#root').innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer(store.Links)}`;

  afterRender(state);

  router.updatePageLinks();
}




function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
}



router.hooks({
  before: (done, params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Courses";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // New Case for the Home View
case "Courses":
  axios
    // Get request to retrieve the current weather data using the API key and providing a city name
    .get(
      `https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js`
    )
    .then(response => {
      // Create an object to be stored in the Home state from the response
      store.Courses.map = {
    center: [38.55253115571871, -89.96358875040441],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  }});

      };

      done();
  },

  already: (params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";

    render(store[view]);
  }



})




router
.on({
  "/": () => render(),
  ":view": (params) => {
    let view = capitalize(params.data.view);
    if (store.hasOwnProperty(view)) {
      render(store[view]);
    } else {
      console.log(`view ${view} not defined`);
    }
  },
})
.resolve();



function aceChase () {
let modal = document.getElementById("aceModal");
let btn = document.getElementById("aceChase");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
aceChase();

function puttGo (){
let puttmodal = document.getElementById("puttModal");
let puttbtn = document.getElementById("puttGo");
let puttspan = document.getElementsByClassName("puttclose")[0];
puttbtn.onclick = function() {
  puttmodal.style.display = "block";
}
puttspan.onclick = function() {
  puttmodal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == puttmodal) {
    puttmodal.style.display = "none";
  }
}
};

puttGo();
