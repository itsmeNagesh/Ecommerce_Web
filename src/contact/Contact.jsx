import React from 'react'
import './cont.css'
const Contact= () => {
  return (
 <>
 <main> 
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.52747894561!2d84.35157593841323!3d26.446670871306132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993042a3112c2d7%3A0x85b134f857dadf0c!2sArna%2C%20Bihar%20841440!5e1!3m2!1sen!2sin!4v1721570462672!5m2!1sen!2sin" 
 width="100%    " height="350" style={{border:'0' }}allowfullscreen=""
  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mjkbgkjy"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
 </main>
 </>
  )
}

export default Contact