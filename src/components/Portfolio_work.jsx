import React from 'react'
import { portfolio_works  } from '../constants'

const Portfolio_work = () => (
    <section className='page-width'>
        <div className='page-heading-div'>
            <h1 className='portfolio-page-heading basic-font'>Portfolio</h1>
        </div>
        <div className='portfolio-parent'>
            <h2 className='heading basic-font'>Our Work</h2>
            <div className='work-parent'>
                {portfolio_works.map((work) => (
                    <div className='work-card'>
                        <img src={work.img} alt={work.title} />
                        <p className='basic-font'>{work.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)


export default Portfolio_work
