import html from "html-literal";
import putt from "../../assests/images/general/Putt_image.jpg"
import Conduct from "./Conduct";

export default () => html`
<main id="main">
<div class="welcome">
    <h1>
     Info
    </h1>
</div>
<div class="page">
    <image class="image" id="imgOne" src="${putt}" />
    <div class="content">
        <image class="image" id="imgTwo" src="${putt}" />


    <div class="event" >
        <a class="info" href="${Conduct}" >
            Code of Conduct
    </a>
    </div>
    <div class="event" >
        <a class="info" href="" >
            Bi-Laws
    </a>
    </div>



</div>
</div>


</main>`
