import React from 'react'
import Email from '../assets/Email.svg'
import Phone from '../assets/Phone.svg'

const Contact_form = () => (
    <>
        <div className="contact-form-parent page-width">
            <div className="contact-form-wrapper">
                <div className='contact-form-inner'>
                <h2 className='form-heading basic-font'>Say <span>Hello.</span></h2>
                <p className="form-description basic-font">We would love to talk to you, don't hesitate. Drop us a quick line.</p>
                <form action="#" method='POST'>
                    <div className="form-field">
                        <label className="hidden" for="fname">First name:</label>
                        <input type="text" id="fname" name="fname" placeholder='First name' required />
                    </div>
                    <div className="form-field">
                        <label className="hidden" for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" placeholder='Last name' required />
                    </div>
                    <div className="form-field">
                        <label className="hidden" for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder='Email' required />
                    </div>
                    <div className="form-field">
                        <label className="hidden" for="mob">First name:</label>
                        <input type="number" id="mob" name="mob" placeholder='Phone' required />
                    </div>
                    <div className="form-field">
                        <textarea type="text" id="msg" name="msg" placeholder='Message' required />
                    </div>
                </form>
                </div>
            </div>
            <div className="contact-form-information">
                <div className='contact-info-h'>
                    <img src={Phone} alt="phone" />
                    <p className='basic-font'>Kickstart your project</p>
                </div>
                <p className='contact-t basic-font'>
                    Because your startup / project needs a great team. Get in touch with us now to get our expert opinion. Grab your quick 30 Minute consultation now, FREE!
                </p>
                <div className='contct-e'>
                    <img src={Email} alt="Email" />
                    <p className='basic-font'>partners@quadcox.in</p>
                </div>

                <div className='contact-info-h'>
                    <img src={Phone} alt="phone" />
                    <p className='basic-font'>You are in good company</p>
                </div>
                <p className='contact-t basic-font'>
                Our team is dedicated in bringing out the best solutions for all your digital needs.
                </p>
                <div className='contct-e'>
                    <img src={Email} alt="Email" />
                    <p className='basic-font'>partners@quadcox.in</p>
                </div>
            </div>
        </div>
    </>
)

export default Contact_form
