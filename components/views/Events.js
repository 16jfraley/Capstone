import html from "html-literal";
import bill from "../../assests/images/Disc_BILL.jpg";

export default () => html`
<main id="main">
<div class="welcome">
<h1>
Events
</h1>
</div>

<div class="page">
<img class="image" id='imgOne' src="${bill}" />
<div class="content">
<img class="image" id='imgTwo' src="${bill}" />
<div class="event">
<h2>Weekly Leauge</h2>
<h3>Random draw doubles @ Clinton Hills <br>
Sign-up 5pm-5:30pm  Draw @ 5:30
</h3>
</div>

<div class="event">
<h2>Ace Chase</h2>
</div>

<div class="event">
<h2>Tag Wars</h2>
</div>


</div>
</div>
</div>
</main>`
