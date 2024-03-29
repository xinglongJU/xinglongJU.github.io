"use strict";
let R = null;

let chart2 = null;// chart object js

let b2 = document.querySelector( "#b2" );

async function showc ()
{
    let url = `https://juxinglong.github.io/static/HW/hw6/MIS3033.json`;

    let r = await fetch( url );// async
    let rj = await r.json();

    let c2 = document.querySelector( "#c2" );

    let opts = {
        type: "pie",// line, bar, pie
        data: {
            labels: rj.map(x=>x.lg)  ,
            datasets: [ {data: rj.map(x=>x.n),label:"Number", }, ],
        },
    };

    if ( chart2 != null )
    {
        chart2.destroy();
    }
    c2.innerHTML = ``;

    chart2 = new Chart(c2,opts);

    // anime.js
    opts = {
        targets: [c2,],
        rotate: {value:60,duration:3000,},
    };
    anime(opts);


    R = rj;
    console.log( rj );
    // fetch() async
}

b2.addEventListener( "click", showc );
