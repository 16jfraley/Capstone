import html from "html-literal";
import clinton from "../../assests/images/general/Clinton.jpg";

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

<div class="event" id="iputform">
<h1>Contact us</h1>

<div >
    <form id="form" method="POST"  action="">

  <div id="cotainer">
  <input
      type="text"
      name="user"
      id="user"
      placeholder="Name"
      required
    />
  </div>

  <div>
  <input
      type="text"
      name="email"
      id="email"
      placeholder="Email"
      required
    />
  </div>

  <label class='input'  for="msg">What would you like to tell us:</label>

  <div>
  <textarea
      type="text"
      name="message"
      id="message"
      cols="30"
      rows="10"
      required
    ></textarea>
  </div>

  <input type="checkbox" name="optIn" value="trusting" id="emailList" checked />
  <label class='input' for="news">Join Our E-mail List</label>
  <input type="submit" name="submit" value="Submit" id='submit' href='http://localhost:1234/Home'/>
</form>

</div>

</div>



   </div>
    </div>
</div>
</main>
`;
