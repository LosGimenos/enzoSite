import React, { Component } from 'react';
import WorkItem from './workItem.jsx';

export default class WorkList extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'RAIN/ OF TERROR',
          company: 'The Bindery',
          role: 'Performer, Devisor',
          url: 'https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/rain_sunglasses.jpg?raw=true'
        },
        {
          title: 'MOUSE IN A JAR',
          company: 'The LIDA Project',
          role: 'Performer',
          url: 'https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/mouse.jpg?raw=true'
        },
        {
          title: 'R.U.R/LOL',
          company: 'Work | Space',
          role: 'Director, Devisor',
          url: 'https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/rur_lol.jpg?raw=true'
        },
        {
          title: 'HOT + WAX',
          company: 'The LIDA Project',
          role: 'Performer, Devisor',
          url: 'https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/hot_wax.jpg?raw=true'
        },
        {
          title: 'RASHOMON',
          company: 'Aurora Fox',
          role: 'Performer',
          url: 'https://github.com/LosGimenos/enzoSite/blob/gh-pages/img/Rashomon.jpg?raw=true'
        },
        {
          title: 'AUTO DA FE',
          company: 'The LIDA Project',
          role: 'Performer',
          url: 'https://github.com/LosGimenos/enzoSite/blob/gh-pages/img/Auto.jpg?raw=true'
        },
        {
          title: 'ADD IT UP',
          company: 'The LIDA Project',
          role: 'Performer',
          url: 'https://farm8.staticflickr.com/7400/28061983425_2ce5b4182e_c.jpg'
        },
        {
          title: '¡EL SIMIO!',
          company: 'HERE Arts',
          role: 'Performer, Translator',
          url: 'https://farm6.staticflickr.com/5339/17544198579_e63caaf84b_b.jpg'
        },
        {
          title: 'GHOST CARD',
          company: 'Fullstop Collective',
          role: 'Performer, Devisor',
          url: 'https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/ghost_card.jpg?raw=true'
        },
        {
          title: 'UNCLE ROOSTER',
          company: 'Countdown to Zero',
          role: 'Performer',
          url: 'https://github.com/LosGimenos/enzoSite/blob/gh-pages/img/Uncle%20Rooster.jpg?raw=true'
        },
        {
          title: 'NOW I LAY ME DOWN TO SLEEP',
          company: 'The LIDA Project',
          role: 'Performer, Devisor',
          url: 'https://github.com/LosGimenos/enzoSite/blob/gh-pages/img/sleep.jpg?raw=true'
        },
        {
          title: 'HEADS',
          company: 'And Toto Too',
          role: 'Performer',
          url: 'https://github.com/LosGimenos/enzoSite/blob/gh-pages/img/heads.jpg?raw=true'
        }
      ]
    };
  }

  render() {
    const workProjects = this.state.projects.map( (project, index) => {
      return (
        <div className='work-list__item' key={index}>
          <WorkItem
            title={project.title}
            company={project.company}
            role={project.role}
            imgSrc={project.url}
          />
        </div>
      );
    })
    return (
      <div className='work-list'>
        {workProjects}
      </div>
    );
  }

}
