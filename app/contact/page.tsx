export default function Contact() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Delhi International School Edge</title>
        <meta name="description" content="Contact Delhi International School Edge in New Delhi, Delhi" />
        <meta name="keywords" content="Delhi International School Edge, contact, new delhi, delhi" />
      </Head>
      <div className="container">
        <h1 className="title">Contact Us</h1>
        <p>Delhi International School Edge, New Delhi, Delhi</p>
        <div className="contact-info">
          <h2 className="contact-header">Get in Touch</h2>
          <ul>
            <li>
              <i className="fa fa-phone"></i>
              <span>Phone:</span>
              <span>+91 95999 64446</span>
            </li>
            <li>
              <i className="fa fa-map-marker"></i>
              <span>Address:</span>
              <span>Sector 18, Sector 18A, Dwarka, New Delhi, Delhi, 110078, India</span>
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              <span>Email:</span>
              <span>N/A</span>
            </li>
          </ul>
        </div>
        <div className="map-container">
          {/* Map will be inserted here, replace with actual map embed code */}
          <h2>Find Us on Google Maps</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3412351431413!2d77.07012341463785!3d28.56611597949532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d00a0e1b4c0a1%3A0x1e5f3a3d0c8c8c!2sSector%2018%2C%20Sector%2018A%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%20110078!5e0!3m2!1sen!2sin!4v1679704395557!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
```
    </section>
  );
}
