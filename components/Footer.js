import html from "html-literal";
import logo from "../assests/images/bi-state-disc-golf-group-ca8a9107efd9.jpg";

export default (links) => html`
<footer class="foot">
<img class='logo' id="footLogo" src="${logo}" />
    <!-- <ul id="bottomLinks">
      ${links
        .map(
          link =>
            `<li><a class='footBar' href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul> -->

</footer>`;


