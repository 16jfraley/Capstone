import html from "html-literal";
import biState from "../../assests/images/general/BI_image.jpg";
import bill from "../../assests/images/general/Disc_BILL.jpg";
import clinton_16 from "../../assests/images/general/clinton_16.jpeg";

export default () => html`
<main id="main">
<div class="welcome">
    <h1>
     Pictures
    </h1>
</div>
<div>
    <div class="content" id="photos">

        <div class="picture">
            <h2>Aviston 2022</h2>
            <a href="https://photos.app.goo.gl/VTndHJ34GT7H6Tg58">
            <img class="pic" src="${bill}"/>
            </a>
        </div>

        <div class="picture">
            <h2>Ace Chase</h2>
            <img class="pic" src="${biState}" />
        </div>

        <div class="picture">
            <h2>Tag Wars</h2>
            <img class="pic" src="${clinton_16}" />
        </div>


   </div>
    </div>

</main>`
