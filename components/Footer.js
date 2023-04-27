import html from "html-literal";
import logo from "../assests/images/bi-state-disc-golf-group-ca8a9107efd9.jpg";

export default () => html`
<footer class="foot">
<img class='logo' id="footLogo" src="${logo}" />
<div id="bottomLinks">
    <li><a  href="#">Home</a></li>
    <li><a  href="#">Events</a></li>
    <li><a  href="#">Projects</a></li>
    <li><a  href="#">Pictures</a></li>
    <li><a  href="#">Info</a></li>
</div>
</footer>`;


