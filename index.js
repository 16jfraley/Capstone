import {Header, Nav, Main, Footer} from "./components";
import * as store from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";

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
