import React from 'react'
import { services } from '../constants'

const Our_services = () => (
  <section>
    <div className='our-serivces-parent'>
      <h2 className='our-services-heading basic-font'>Explore our services</h2>
      <div className='our-services-holder'>
        {services.map((service, index) => (
          <div className='hero-card' id={service.id}>
            <img src={service.icon} alt={service.title} />
            <p className='hero-card-heading basic-font'>
              {service.title}
            </p>
            <p className='hero-card-subheading basic-font'>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Our_services
