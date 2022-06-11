import React from 'react'
import './profile.css'
import IMG1 from '../../assests/portfolio3.jpg'
import IMG2 from '../../assests/portfolio3.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio3.jpg'
import IMG5 from '../../assests/portfolio3.jpg'
import IMG6 from '../../assests/portfolio3.jpg'
// import IMG7 from '../../assests/portfolio6.png'


function Profile() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Crypto cuncurrency Dashboard And Financial Visualization',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/18457343-OpenTable-redesign-concept',


    }, {
      id: 2,
      image: IMG2,
      title: 'Crypto cuncurrency Dashboard And Financial Visualization',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/18456555-Bucket-List'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Crypto cuncurrency Dashboard And Financial Visualization',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/18454526-Gothere-Creative-Agency-Landing-Page'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Crypto cuncurrency Dashboard And Financial Visualization',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/18457343-OpenTable-redesign-concept'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Crypto cuncurrency Dashboard And Financial Visualization',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/18340058-Sneakers'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Crypto cuncurrency Dashboard And Financial Visualization',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/18459942-Mindfulness-Mobile-Application'
    },
  ]
  return (
    <section id='profile'>
      <h5>My Recent  Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
            <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
            </div>
            <h3>This a  portfolio  item title</h3>
            <div className='portfolio_item-cta'>
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          
          </div>
        </article>
            )
          })
         }
      </div>
    </section>
  )
}

export default Profile;