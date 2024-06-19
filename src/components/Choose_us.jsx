import React from 'react'
import { choose_us } from '../constants'

const Choose_us = () => (
    <section className='why-choose-us'>
      <h2 className='choose-us-heading basic-font'>Why choose us</h2>
      <div className='choose-us-card-holder'>
      {choose_us.map((resason, index) => (
          <div className='hero-card' id={resason.id}>
            <img src={resason.icon} alt={resason.title} />
            <p className='hero-card-heading basic-font'>
              {resason.title}
            </p>
            <p className='hero-card-subheading basic-font'>
              {resason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )

export default Choose_us
