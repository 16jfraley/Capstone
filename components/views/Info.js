import html from "html-literal";
import putt from "../../assests/images/Putt_image.jpg"

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
        <a class="info" href="CodeOfConduct.html" >
            Code of Conduct
    </a>
    </div>
    <div class="event" >
        <a class="info" href="CodeOfConduct.html" >
            Bi-Laws
    </a>
    </div>



</div>
</div>


</main>`
