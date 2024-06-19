import React, { useState } from 'react'
import { useFormspark } from '@formspark/use-formspark'
import Email from '../assets/Email.svg'
import Phone from '../assets/Phone.svg'

const Contact_form = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [mob, setMob] = useState('');
    const [msg, setMsg] = useState('');

    const [submit, submitting] = useFormspark({
    formId: "YfpxCczsK"
  });



  return (  <>
        <div className="contact-form-parent page-width">
            <div className="contact-form-wrapper">
                <div className='contact-form-inner'>
                <h2 className='form-heading basic-font'>Say <span>Hello.</span></h2>
                <p className="form-description basic-font">We would love to talk to you, don't hesitate. Drop us a quick line.</p>
                <form onSubmit={async (e) => {
        e.preventDefault();
        await submit({ "First Name": fname, "Last Name": lname, "Email": email, "Phone": mob, "Message": msg});
        setFname('');
        setLname('');
        setEmail('');
        setMob('');
        setMsg('');
        alert('Message received! We will get back to you soon.');
    }}>
                    <div className="form-field">
                        <label className="hidden" forHTML="fname">First name:</label>
                        <input type="text" id="fname" name="fname" placeholder='First name' value={fname} onChange={(e) => setFname(e.target.value)} required />
                    </div>
                    <div className="form-field">
                        <label className="hidden" forHTML="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" placeholder='Last name' value={lname} onChange={(e) => setLname(e.target.value)} required />
                    </div>
                    <div className="form-field">
                        <label className="hidden" forHTML="email">Email</label>
                        <input type="email" id="email" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-field">
                        <label className="hidden" forHTML="mob" value={mob} onChange={(e) => setMob(e.target.value)}>Phone:</label>
                        <input type="number" id="mob" name="mob" placeholder='Phone' required />
                    </div>
                    <div className="form-field">
                        <textarea type="text" id="msg" name="msg" placeholder='Message' value={msg} onChange={(e) => setMsg(e.target.value)} required />
                    </div>
                    <div className="form-field">
                        <button className="submit-btn" type="submit" disabled={submitting}>Submit</button>
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
    </>);
}

export default Contact_form
