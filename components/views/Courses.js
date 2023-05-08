import html from "html-literal";
import clinton from "../../assests/images/general/Clinton.jpg";

export default () => html`
<main id="main">
<div class="welcome">
    <h1>
     Courses
    </h1>
</div>
<div class="page">
<img class="image" id='imgOne' src="${clinton}" />


<div class="content">

<div class="event">
<h2>Clinton Hils</h2>
<h3>Swansea, IL</h3>
</div>


  <div id="map" ></div>
</div>

    </div>

</main>

`;
