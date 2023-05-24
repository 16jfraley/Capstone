import html from "html-literal";
import putt from "../../assests/images/general/Putt_image.jpg"


export default () => html`
<main id="main">
<div class="welcome">
    <h1>
     Members
    </h1>
</div>
<div class="page">
    <image class="image" id="imgOne" src="${putt}" />
    <div class="content">
        <image class="image" id="imgTwo" src="${putt}" />


        <table id="pizzas">
<tr>
  <th>User</th>
  <th>Email</th>
  <th>Message</th>
</tr>

</table>



</div>
</div>


</main>`
