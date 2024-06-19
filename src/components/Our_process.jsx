import React from 'react'
import { our_process } from '../constants'
const Our_process = () => (
    <section>
      <div className='our-process-holder'>
        <h2 className='our-process-heading basic-font'>Our Process</h2>
        <div className='our-process-card-holder'>
        {our_process.map((process, index) => (
          <div className='hero-card' id={process.id}>
            <p className='hero-card-heading basic-font'>
              {process.title}
            </p>
            <p className='hero-card-subheading basic-font'>
              {process.description}
            </p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )


export default Our_process
