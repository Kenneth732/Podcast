import React from 'react'

function Home() {
  return (
    <div>
      <div className="home_container">
        <div className="left_home">
          <h1>Starting a podcast has never been easier</h1>

          <ul className="do">
            <li className="list">
              <i class="fas fa-check-circle"></i>
              <p>One click integrations, that work for you.</p>
            </li>

            <li className="list">
              <i class="fas fa-check-circle"></i>
              <p>Just record and hit publish, it’s that simple.</p>
            </li>

            <li className="list">
              <i class="fas fa-check-circle"></i>
              <p>Get weekly reports straight to your inbox with <span>key metrics.</span></p>
            </li>
          </ul>
          <div className="buttons">
            <a href="" className="home_btn">Get your free account</a>
            <a href="" className="home_btn">See our solution</a>
          </div>
          <p className='desc'>30-day free trial. No card required.</p>
        </div>

        <div className="right_home">
          <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-hero.398a4a99.jpg&w=640&q=75" className='profile' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home