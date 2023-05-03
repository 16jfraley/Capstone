import html from "html-literal";
import will from "../../assests/images/Ace/aceWill.jpeg"
import chris from "../../assests/images/Ace/aceChris.jpeg"
import chrisMar5 from "../../assests/images/Ace/aceChrisMar5.jpeg"
import connorNov6 from "../../assests/images/Ace/aceConnorNov6.jpeg"

export default () => html`
<main id="main">
<div class="welcome">
<h1>
  The Aces Of BDGG
</h1>
<div>
<div class="content" id="ace">

<div class="holeOne">
            <h2>Connor Maheu</h2>
            <h3>Woodland Hole 16</h3>
            <h3>Nov 6, 2022
            <img class="pic" src="${connorNov6}" />
        </div>

<div class="holeOne">
            <h2>Chris Buckner</h2>
            <h3>Woodland Hole 18</h3>
            <h3>March 5, 2023
            <img class="pic" src="${chrisMar5}" />
        </div>


        <div class="holeOne">
            <h2>Chris Buckner</h2>
            <h3>Citizens Park hole 16</h3>
            <h3>March 29, 2023
            <img class="pic" src="${chris}" />
        </div>
        <div class="holeOne">
            <h2>Will Soffera</h2>
            <h3>Clinton Hills Hole 18</h3>
            <h3>April 13, 2023
            <img class="pic" src="${will}" />
        </div>




</div>
</div>


`;
