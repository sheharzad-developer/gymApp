import React from 'react'

function Contact() {
  return (
    <div id="contact">
        <h1>CONTACT US</h1>
        <form>
            <input type="text" placeholder="Full Name" required/>
            <input type="email" placeholder="Your Email Address" required/>
            <textarea placeholder="Message" required></textarea>
            <input type="submit" value="Send"/>
        </form>
    </div>
  )
}

export default Contact;
