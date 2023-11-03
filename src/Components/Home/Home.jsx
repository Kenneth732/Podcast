import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="home_container">
        <div className="hero">
          <div className="left_home">
            <h1>Starting a podcast <br /> has never been <br /> easier</h1>

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
              <a href="https://" className="home_btn">Get your free account</a>
              <a href="https://" className="home_btn">See our solution</a>
            </div>
            <p className='desc'>30-day free trial. No card required.</p>

            <div className="creator-message">
              <div className="creator-pro">
                <i class="fas fa-quote-left"></i>
                <p className='msg'>Wavvy has taken the headache out of our podcast hosting, and <br /> allowed us to focus on what we love to do – record great content, <br /> and grow a loyal audience.</p>

                <div className="pro-link">
                  <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-01.19a82b70.jpg&w=64&q=75" alt="" />
                  <div>
                    <h2>Courtland Allen</h2>
                    <p>Indie Hackers Podcast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right_home">
            <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-hero.398a4a99.jpg&w=640&q=75" className='profile' alt="podcast profile" />
          </div>
        </div>

        <div className="featured">
          <div className="title"> AS FEATURED IN</div>

          <div className="feature_media">
            <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/static/media/buzzfeed.910ed4f7.svg" alt="" />
            <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/static/media/daily-news.07f63296.svg" alt="" />
            <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/static/media/entrepreneur.41efb504.svg" alt="" />
            <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/static/media/quartz.84bd5564.svg" alt="" />
            <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/static/media/wired.8d4051e0.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="home_containers">
        <div className="home_about">
          <div className="about_img">
            <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-image-01.4ee2ebf6.jpg&w=640&q=75" alt="" className='about_image' />
            <div className="about_rate">
              <h2>1000+</h2>
              <p>Podcasters use Waves to <br /> power their podcast</p>
            </div>
          </div>

          <div className="about_msg">
            <h2>Never worry about <br /> sound quality again</h2>
            <p>Lorem ipsum dolor sit amet orci aliquam porta adipiscing <br /> elementum purus netus laoreet pulvinar. <br /> Vestibulum platea iaculis eu ac netus lobortis porta sodales urna <br />mollis ac. Elit viverra magna euismod aenean diam <br /> ullamcorper eu nec venenatis. Eleifend lacinia luctus <br /> sagittis hendrerit habitasse cras dapibus.</p>

            <a href="https://" className="learn_btn">Learn more</a>
          </div>
        </div>
      </div>

      <div className="home_containers">
        <div className="home_about">
          <div className="about_msg">
            <h2>Quick and easy <br /> podcasting setups </h2>
            <p>Lorem ipsum dolor sit amet orci aliquam porta adipiscing <br /> elementum purus netus laoreet pulvinar. <br /> Vestibulum platea iaculis eu ac netus lobortis porta sodales urna <br />mollis ac. Elit viverra magna euismod aenean diam <br /> ullamcorper eu nec venenatis. Eleifend lacinia luctus <br /> sagittis hendrerit habitasse cras dapibus.</p>

            <a href="https://" className="learn_btn">Learn more</a>
          </div>

          <div className="about_img">
            <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-image-02.18921184.jpg&w=640&q=75" alt="" className='about_image' />
            <div className="about_rates">
              <h2>3m+</h2>
              <p>Listeners across podcasts<br />using Waves</p>
            </div>
          </div>
        </div>
      </div>

      <div className="home_container">
        <h1 className='podcasting'>Professional podcasting <br /> without the hassle</h1>

        <div className="podcast_card">
          <div className="podcasting_card one">
            <div>
              <i class="fab fa-youtube"></i>
              <h2>Create clips with <br /> ease</h2>
              <p>Lorem ipsum dolor sit amet consequat <br /> facilisis consequat ultrices suspendisse <br /> faucibus mauris.</p>
            </div>
          </div>
          <div className="podcasting_card two">
            <div>
              <i class="fas fa-cloud-upload-alt"></i>
              <h2>Cloud hosting and <br /> storage</h2>
              <p>Lorem ipsum dolor sit amet consequat <br /> facilisis consequat ultrices suspendisse <br /> faucibus mauris.</p>
            </div>
          </div>
          <div className="podcasting_card three">
            <div>
              <i class="fas fa-microchip"></i>
              <h2>Automatic episode <br /> transcripts </h2>
              <p>Lorem ipsum dolor sit amet consequat <br /> facilisis consequat ultrices suspendisse <br /> faucibus mauris.</p>
            </div>
          </div>
          <div className="podcasting_card four">
            <div>
              <i class="fas fa-edit"></i>
              <h2>World class editing <br /> software </h2>
              <p>Lorem ipsum dolor sit amet consequat <br /> facilisis consequat ultrices suspendisse <br /> faucibus mauris.</p>
            </div>
          </div>
          <div className="podcasting_card five">
            <div>
              <i class="fas fa-chart-bar"></i>
              <h2>Key podcast metrics <br /> in real-time </h2>
              <p>Lorem ipsum dolor sit amet consequat <br /> facilisis consequat ultrices suspendisse <br /> faucibus mauris.</p>
            </div>
          </div>

          <div className="podcasting_card six">
            <div>
              <i class="fas fa-microphone-alt"></i>
              <h2>Crisp audio <br /> optimizations</h2>
              <p>Lorem ipsum dolor sit amet consequat <br /> facilisis consequat ultrices suspendisse <br /> faucibus mauris.</p>
            </div>
          </div>

          <div className="podcasting_card seven">
            <div>
              <h2>Create clips with <br /> ease</h2>
              <p>Lorem ipsum dolor sit amet consequat <br /> facilisis consequat ultrices suspendisse <br /> faucibus mauris.</p>
            </div>
          </div>
  
          <div className="podcasting_card eight">
            <div>
              <h2>Create clips with <br /> ease</h2>
              <p>Lorem ipsum dolor sit amet consequat <br /> facilisis consequat ultrices suspendisse <br /> faucibus mauris.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wavvy">
        <div className="wavvy-card">
          <h1>How Wavvy works</h1>
          <div className="wavvy_description"></div>
          <div className="wavvy_img">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home