import html from "html-literal";
import clinton from "../../assests/images/general/Clinton.jpg"
import facebook from "../../assests/images/icons/facebook.jpeg"
import gram from "../../assests/images/icons/instagram.jpeg"

export default () => html`
<main id="main">
<div class="welcome">
    <h1>
     Contact
    </h1>
</div>
<div>
<div class="page">
<img class="image" id='imgOne' src="${clinton}" />
    <div class="content" id="contact">

<div class="event" id="pizza">
<h1>Contact us</h1>

<div id="form">
    <form>
  <input class='input' type="text" placeholder="Full Name" />
  <input class='input' type="email" placeholder="E-mail"/>
  <label class='input'  for="msg">What would you like to tell us:</label>
    <textarea class='input' name="msg" id="msg" cols="30" rows="10"></textarea>
  <input type="checkbox" name="optIn" value="trusting" id="news" checked />
  <label class='input' for="news">Join Our E-mail List</label>
  <input class='input' id="submit"  type="submit" />
</form>
</div>
</div>



<div class="event" id="social">
    <h1>
    Find Us On
</h1>
<a href="https://www.facebook.com/groups/313747153988807/">
<img class='icon' src="${facebook}">
</a>
<img class='icon' src='${gram}'>
<img class='icon' src='${gram}'>
</div>





   </div>
    </div>
</div>
</main>
`;
