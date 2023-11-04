import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
            <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>Company</h4>
          <ul class="links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Solutions</h4>
          <ul class="links">
            <li><a href="#">For small creators</a></li>
            <li><a href="#">For professionals</a></li>
            <li><a href="#">For large companies</a></li>
            <li><a href="#">Webinars</a></li>
            <li><a href="#">Virtual conferences</a></li>
            {/* <li><a href="#">New Uploads</a></li> */}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Integrations</h4>
          <ul class="links">
            <li><a href="#">You Tube</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Spotify</a></li>
            <li><a href="#">Tiktok</a></li>
            <li><a href="#">Apple Podcasts</a></li>
            <li><a href="#">Google Podcasts</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>

      </div>
      <p className='footer_copyright'>© 2023 Wavvy, This Website Created By Kenneth.</p>
    </section>
    </div>
  )
}

export default Footer