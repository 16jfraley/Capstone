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
 <img class="image" id='imgOne' src="${clinton_16}" />
 <div class="content">
    <img class="image" id='imgTwo' src="${clinton_16}" />
 <h3 class="mission">

 The Bi-State Disc Golf Group promotes the growth of disc golf in the Illinois and Missouri Bi-State area through the funding and promotion
 of educational clinics, the organization of disc golf events and/or tournaments, both sanctioned and un-sanctioned by the Professional Disc Golf Association
 (PDGA), and the establishment of an active player base for the purpose of increasing disc golf activity in the area. Additionally, the Bi-State Disc Golf Group provides volunteer manpower and funding for
 the establishment of new disc golf courses and the maintenance and improvement of current disc golf courses in the Illinois/Missouri area.
    </h3>

</div>
 </div>

</main>`;
