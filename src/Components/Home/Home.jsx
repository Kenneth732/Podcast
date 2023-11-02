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
              <p>One click integrations, that work for you.</p>
            </li>

            <li className="list">
              <i class="fas fa-check-circle"></i>
              <p>One click integrations, that work for you.</p>
            </li>
          </ul>
        </div>

        <div className="right_home">
          <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-hero.398a4a99.jpg&w=640&q=75" className='profile' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home