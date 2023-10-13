import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import ApexCharts from "apexcharts";


// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


      const Prisoners = [
        {
          title: "Palestine",
          value: 830,
        },
        {
          title: "Israel",
          value: 1000,
        },
       
        
      ];

      const labels = Prisoners.map((item) => item.title);
      const series = Prisoners.map((item) => item.value);

      const options = {
        chart: {
          width: 500,
          type: "pie",
        },
        series,
        labels,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 768,
            options: {
              chart: {
                width: 800,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);

      chart.render();
    