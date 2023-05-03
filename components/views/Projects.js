import html from "html-literal";
import biState from "../../assests/images/general/BI_image.jpg"

export default () => html`
<main id="main">
        <div class="welcome">
            <h1>
             Projects
            </h1>
        </div>
    <div class="page">
        <img class="image" id="imgOne" src="${biState}" />
        <div class="content">
            <img class="image" id="imgTwo" src="${biState}" />
            <div class="event">
                <h2>Clinton Hills Benches</h2>
                <h3>Benches to be built and put-in <br>
                    @ clinton hills disc golf course
                </h3>
            </div>

            <div class="event">
                <h2>Bi-centinial Course clean up</h2>
            </div>

            <div class="event">
                <h2>Clinton Hills course clean up</h2>
            </div>
    </div>
    </div>
</main>`
