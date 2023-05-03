import html from "html-literal";

export default (links) => html`
  <nav>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a class='navBar' href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;


{/* <li><a class="navBar" href="index.html">Home</a></li>
<li><a class="navBar" href="Events.html">Events</a></li>
<li><a class="navBar" href="projects.html">Projects</a></li>
<li><a class="navBar" href="pictures.html">Pictures</a></li>
<li><a class="navBar" href="info.html">Info</a></li> */}
