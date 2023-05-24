import html from "html-literal";
import bill from "../../assests/images/general/Disc_BILL.jpg";
import chase from "../../assests/images/flyers/aceChase.jpg";
import put from "../../assests/images/flyers/puttputt.jpg";

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

<div class="event" id="aceChase">
<h2>Ace Chase</h2>
<h3>Woodland Park</h3>
<h3>Sundays @ 9am</h3>
</div>

<div class="event">
<h2>Tag Wars</h2>
<h3>Clinton Hills</h3>
<h3>May 13th</h3>
</div>

<div class="event">
<h2>Red White & Two</h2>
<h3>Clinton Hills</h3>
<h3>July 1st</h3>
</div>

<div class="event" id="puttGo">
<h2>Putt Putt Go</h2>
<h3>Wilson Park</h3>
<h3>September 10th</h3>
</div>


</div>
</div>
</div>



</main>


<div id="aceModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <img id="flyer" src='${chase}'>
  </div>
</div>

<div id="puttModal" class="modal">
  <div class="modal-content">
    <span class="puttclose">&times;</span>
    <img id="flyer" src='${put}'>
  </div>
</div>


`
