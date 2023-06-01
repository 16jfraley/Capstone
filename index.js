import {Header, Nav, Main, Footer} from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize} from "lodash";
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

if (state.view === "Contact") {
  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();

    const inputList = event.target.elements;
    console.log("Input Element List", inputList);


    const requestData = {
      user: inputList.user.value,
      email: inputList.email.value,
      message: inputList.message.value,
    };

    console.log("request Body", requestData);

    axios
      .post(`${process.env.Email_API}/emails`, requestData)
      .then(router.navigate("/Home"))
      .catch(error => {
        console.log("It puked", error);
      });
  });
}

if (state.view === "Events"){
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
  };
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
  }

  if (state.view === "Courses"){

      L.mapquest.key = 'djRDfMhcreNiHBa7GsJ4rZdmjyYxCpq7';

      const map = L.mapquest.map('map', {
        center: [38.55253115571871, -89.96358875040441],
        layers: L.mapquest.tileLayer('map'),
        zoom: 11
      });

      map.addControl(L.mapquest.control());

      L.marker([38.55256549075705, -89.96350094114962], {
    icon: L.mapquest.icons.marker("flag-hello-sm"),
    draggable: false
    }).bindPopup('Clinton Hills').addTo(map);

    L.marker([38.51801964170731, -90.01754671904315], {
      icon: L.mapquest.icons.marker(),
      draggable: false
      }).bindPopup('Bicentennial Park').addTo(map);


    }
}


router.hooks({
  before: (done, params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";
    // Add a switch case statement to handle multiple routes
//     switch (view) {
//       // New Case for the Home View
// // case "Courses":
// //   axios
// //     // Get request to retrieve the current weather data using the API key and providing a city name
// //     .get(
// //       `https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js`
// //     )
// //     .then(response => {
// //       // Create an object to be stored in the Home state from the response
// //       store.Courses.map = {
// //     center: [38.55253115571871, -89.96358875040441],
// //     layers: L.mapquest.tileLayer('map'),
// //     zoom: 12
// //   }
// // });

//       };
      done();
  },

  already: (params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";

    render(store[view]);
  }



});


router
.on({
  "/": () => render(),
  ":view": (params) => {
    let view = capitalize(params.data.view);
    if (view in store) {
      render(store[view]);
    } else {
      console.log(`view ${view} not defined`);
    }
  }
})
.resolve();










