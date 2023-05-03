import html from "html-literal";
import clinton_16 from "../../assests/images/general/clinton_16.jpeg";

export default () => html`
<main id="main">
<div class="welcome">
    <h1>
     Welcome To The Bi-State Disc Golf Group
    </h1>
</div>

   <div class="page">

<div id="imgTest">
 <img class="image" id='imgOne' src="${clinton_16}" />
</div>
 <div class="content">
    <img class="image" id='imgTwo' src="${clinton_16}" />
 <h1 class="mission">
    Our Mission:
    <br>
    Is to to....
    </h1>

</div>
 </div>

</main>`;
