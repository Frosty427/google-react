import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//JSX Javascript XML
var template2 = (
  <div>
    <div class="top-section left-menu">
      <a href="https://www.google.com" class="nav-a mt-2 pt-1"><p>Gmail</p></a>
      <a href="https://www.google.com" class="nav-a mt-2 pt-1 "><p>Images</p></a>
      <a href="https://www.google.com"><i class="material-icons">apps</i></a>
      <a href="https://www.google.com"><button class="button-1">Sign In</button></a>
    </div>
    <div className="container-fluid">
      <div className="container">
        <img className="img-fluid main-logo mb-5" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
      </div>
      <div className="container">
        <input type="text" name="fname" placeholder="  Search Google or type URL"/>
      </div>
      <div className="container mt-3">
        <button type="button" class="btn btn-primary main-btn">Google Search</button>
        <button type="button" class="btn btn-primary main-btn">I'm Feeling Lucky</button>
      </div>
      <p className="text-center mt-2">Google offered in:<a href="https://www.google.com/setprefs?sig=0_s5C-TtqRmIKrmUy9KoIsnodwbBo%3D&hl=fr&source=homepage&sa=X&ved=0ahUKEwiCwJ-lkdbaAhVE6xQKHfX9CpEQ2ZgBCAg" className="trans-link"> Français العربية</a></p>
    </div>
  </div>
);



var appRoot = document.getElementById('root');
ReactDOM.render(template2, appRoot);
