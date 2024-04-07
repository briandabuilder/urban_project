import React from 'react'
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.css';


function UrbanGame() {
  return (
    <body>
      <h1>Game</h1>
      <div class="UrbanGame-sidebar">
        <hs>Money: xxxxxx</hs>
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
      </div>


    </body>


  );
}

export default UrbanGame;
