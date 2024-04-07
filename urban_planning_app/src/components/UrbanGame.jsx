import React from 'react'
import ReactDOM from 'react-dom/client';
import { Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';


function UrbanGame() {
  return (
    <body>
      <h1>Urban Planning</h1>
      <div class="UrbanGame-sidebar">
        <h1 class="UrbanGame-money">Money: $10,000</h1>
        <ul>
          <li class="UrbanGame-ulli">
            <a class="UrbanGame-ullia" href="#">
              <i class="fa-solid fa-road">
                <span> Road</span>
              </i>
            </a>
          </li>
          <li class="UrbanGame-ulli">
            <a class="UrbanGame-ullia" href="#">
              <i class="fa-solid fa-solar-panel">
                <span> Green Road</span>
              </i>
            </a>
          </li>
          <li class="UrbanGame-ulli">
            <a class="UrbanGame-ullia" href="#">
              <i class="fa-solid fa-train">
                <span> Train</span>
              </i>
            </a>
          </li>
          <li class="UrbanGame-ulli">
            <a class="UrbanGame-ullia" href="#">
            <i class="fa-solid fa-tree">
                <span> Park</span>
              </i>
            </a>
          </li>
        </ul>
      
      <a class="UrbanGame-submit-button">
        <Button variant="success" id="test">Submit</Button>
      </a>
      






      </div>


    </body>


  );
}

export default UrbanGame;
