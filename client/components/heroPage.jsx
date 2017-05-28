import React from 'react';

const HeroPage = () => {
  return (
    <div id="header">
      <div id="hero-text">
        <h1>A Parrot</h1>
      </div>
    </div>
  );
}


const headerTiles = [
  {
    title: 'ADD IT UP',
    company: 'The LIDA Project',
    url: 'https://farm8.staticflickr.com/7400/28061983425_2ce5b4182e_c.jpg'
  },
  {
    title: '&#161;EL SIMIO!',
    company: 'HERE Arts',
    url: 'https://farm6.staticflickr.com/5339/17544198579_e63caaf84b_b.jpg'
  },
  // {
  //   title: 'RAIN/ OF TERROR',
  //   company: 'The Bindery',
  //   url: 'https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/rain_sunglasses.jpg?raw=true'
  // },
  // {
  //   title: 'MOUSE IN A JAR',
  //   company: 'The LIDA Project',
  //   url: 'https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/mouse.jpg?raw=true'
  // },
  // {
  //   title: 'R.U.R/LOL',
  //   company: 'Work|Space',
  //   url: 'https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/rur_lol.jpg?raw=true'
  // },
  // {
  //   title: 'HOT + WAX',
  //   company: 'The LIDA Project',
  //   url: 'https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/hot_wax.jpg?raw=true'
  // },
  // {
  //   title: 'RASHOMON',
  //   company: 'Aurora Fox',
  //   url: 'https://lh3.google.com/u/1/d/0B2nzr3PvuUz3ZDFNTjJvMF9ldG8=w1280-h703-iv1'
  // },
  {
    title: 'GHOST CARD',
    company: 'Fullstop Collective',
    url: 'https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/ghost_card.jpg?raw=true'
  },
  // {
  //   title: 'AUTO DA FE',
  //   company: 'The LIDA Project',
  //   url: 'https://lh3.google.com/u/1/d/0B2nzr3PvuUz3UWMyQnR6enJYT1k=w1280-h703-iv1'
  // },
  {
    title: 'UNCLE ROOSTER',
    company: 'Countdown to Zero',
    url: 'https://lh3.google.com/u/1/d/0B2nzr3PvuUz3SHo4b0RUWklHYTA=w1280-h703-iv1'
  },
  {
    title: 'JUMPING OFF AN EFFING TREE',
    company: 'Some Upstate Tree',
    url: 'https://farm8.staticflickr.com/7453/27447690963_39072d6fd2_c.jpg'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const heroText = document.getElementById('hero-text');
  const header = document.getElementById('header');
  let counter = 0;

  setInterval( () => {
    header.style.background =
      `url(${ headerTiles[counter].url })`;
    header.style.backgroundPosition = "center";
    header.style.backgroundSize = "cover";
    header.style.backgroundRepeat = 'no-repeat';
    heroText.innerHTML =
      `<h1>${ headerTiles[counter].title }</h1>
       <p>- ${ headerTiles[counter].company }</p>`;

    if (counter == headerTiles.length - 1) {
      counter = 0;
    } else {
      counter += 1;
    }

  }, 4000);
})

export default HeroPage;

