import React from 'react'
import { Link } from 'react-router-dom'
import hero_banner from "../assets/hero_banner.png"
import hero_banner_mobile from "../assets/hero_banner_mobile.jpg"
import { websites } from '../constants'

const Hero = () => (
  <section>
    <div className='setion-text'>
      <h2 className='hero-heading basic-font'>
        Achieve Your Business Goals with Top Web Development Company.
      </h2>
      <p className='hero-subheading basic-font'>
        Your Website is Your Storefront to the world. We will translate that vision into a high-performing website that not only looks stunning but also drives results.
      </p>
    </div>
    <div className='btn-center hero-btn'>
      <button className='btn'>
        <Link className="btn-link" to="/touch">Reach Us</Link>
      </button>
    </div>
    <div className='hero-banner-holder'>
      <img src={hero_banner} alt="" className='basic-img d-only' />
      <img src={hero_banner_mobile} alt="" className='basic-img m-only' />
    </div>
    <div className='hero-content'>
      <p className='basic-font content-heading'>We Build Websites That Work</p>
      <p className='basic-font content-subheading'>We Speak Your Digital Language, Customized Solutions That Work</p>
      <div className='hero-website'>
        {websites.map((website,index) => (
          <div className='hero-card' id={website.id}>
            <img src={website.icon} alt={website.title} />
            <p className='hero-card-heading basic-font'>
              {website.title}
            </p>
            <p className='hero-card-subheading basic-font'>
              {website.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)


export default Hero
