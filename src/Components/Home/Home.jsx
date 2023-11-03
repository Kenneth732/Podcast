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

      <div class="relative mx-auto w-full py-16 px-5 font-sans text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
        <h2 class="mb-5 text-center font-sans text-4xl sm:text-5xl font-bold">Frequently asked Questions</h2>
        <p class="mb-12 text-center text-lg text-gray-600">We have written down answers to some of the frequently asked questions. But, if you still have any queries, feel free to ping us on chat.</p>
        <ul class="space-y-4">
          <li class="text-left">
            <label for="accordion-1" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
              <input class="peer hidden" type="checkbox" id="accordion-1" checked />
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                <h3 class="text-sm text-gray-600 lg:text-base">Is there a free trial with Appsy?</h3>
              </div>
              <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div class="p-5">
                  <p class="text-sm">Lorem ipsum, consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
                </div>
              </div>
            </label>
          </li>

          <li class="text-left">
            <label for="accordion-2" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
              <input class="peer hidden" type="checkbox" id="accordion-2" />
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                <h3 class="text-sm text-gray-600 lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit?</h3>
              </div>
              <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div class="p-5">
                  <p class="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
                </div>
              </div>
            </label>
          </li>

          <li class="text-left">
            <label for="accordion-3" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
              <input class="peer hidden" type="checkbox" id="accordion-3" />
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                <h3 class="text-sm text-gray-600 lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio.?</h3>
              </div>
              <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div class="p-5">
                  <p class="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
                </div>
              </div>
            </label>
          </li>

          <li class="text-left">
            <label for="accordion-4" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
              <input class="peer hidden" type="checkbox" id="accordion-4" />
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                <h3 class="text-sm text-gray-600 lg:text-base">Lorem ipsum dolor sit amet.?</h3>
              </div>
              <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div class="p-5">
                  <p class="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
                </div>
              </div>
            </label>
          </li>
        </ul>
        <div class="mt-20 flex justify-center">
          <a class="inline-flex cursor-pointer rounded-lg bg-blue-500 py-3 px-5 text-lg text-white" href="#">Still have questions?</a>
        </div>
      </div>

    </div>
  )
}

export default Home