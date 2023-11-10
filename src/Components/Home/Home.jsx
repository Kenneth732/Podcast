import React from 'react'
import './Home.css'
import Pod from '../Assets/pi1.jpg'
import P1 from '../Assets/p1.jpg'
import prod1 from '../../Components/podimg/image12.jpg'
import prod2 from '../../Components/podimg/image13 (2).jpg'
import prod3 from '../../Components/podimg/image14 (1).jpg'
import prod4 from '../../Components/podimg/image16 (1).jpg'
import prod5 from '../../Components/podimg/image17 (1).jpg'
import prod6 from '../../Components/podimg/image18 (1).jpg'
import prod7 from '../../Components/podimg/image12.jpg'
import prod8 from '../../Components/podimg/image12.jpg'

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
            {/* <img src={P1} className='profile' alt="podcast profile" /> */}
          </div>
        </div>

      </div>
      <div className="hero_fetures">
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

        <section class="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
          <div class="max-w-md pr-20 lg:pt-28">
            <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601074ed0f05cd25097215a4_6002086f72b7277e1f01d682_ryan-morrison-illustration-1.png" alt="" />
          </div>
          <div class="">
            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
              </svg>
            </div>
            <h2 class="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">A <span class="text-indigo-600">Professional</span> podcasting  without the hassle</h2>
            <div class="grid gap-y-12 gap-x-8 lg:grid-cols-2">
              <div>
                <p class="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">Create clips with ease</p>
                <p class="text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nihil reprehenderit laboriosam, exercitationem consectetur deserunt aliquam ab maiores!</p>
              </div>
              <div>
                <p class="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">Cloud hosting and storage</p>
                <p class="text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nihil reprehenderit laboriosam, exercitationem consectetur deserunt aliquam ab maiores!</p>
              </div>
              <div>
                <p class="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">Automatic episode transcripts</p>
                <p class="text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nihil reprehenderit laboriosam, exercitationem consectetur deserunt aliquam ab maiores!</p>
              </div>
              <div>
                <p class="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">World class editing software</p>
                <p class="text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nihil reprehenderit laboriosam, exercitationem consectetur deserunt aliquam ab maiores!</p>
              </div>
            </div>
          </div>
        </section>


        {/* <div className="podcast_card">
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
        </div> */}
      </div>

      <div className="wavvy">
        <div className="wavvy-card">
          <div className="wavvy_description">
            <ul className="menu_down">
              <h1>How Wavvy works</h1>
              <li className="link_menu"><strong>01</strong> Sign up in a few minutes</li>
              <hr />

              <li className="link_menu"><strong>02</strong> Migrate episodes with a few click</li>
              <hr />

              <li className="link_menu"><strong>03</strong> Your account is open; you can start recording and leveraging our platform</li>
              <hr />
            </ul>
          </div>
          <div className="wavvy_img">
            <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprocess.a9338c8e.jpg&w=640&q=75" alt="" />
          </div>
        </div>
      </div>

      <div className="pods_container">
        <h2>See what podcasters <br /> have to say about us</h2>

        <div className="pod_content">
          <div className="parent_pod">
            <div className="pod_card pod">
              <div className="pod_station">
                <img src={prod1} alt="" />
                <h3>Tim Ferriss</h3>
                <p>The Tim Ferriss Show</p>
              </div>
              <i class="fas fa-quote-left"></i>
              <p>
                We took our time to evaluate various options before choosing Wavvy, and we are SO glad that we did. The features are easy to use, and their customer service team is friendly and helpful! We highly recommend them for podcast hosting.
              </p>
            </div>

            <div className="pod_card pod">
              <div className="pod_station">
                <img src="" alt="" />
                <h3>Lex Fridman</h3>
                <p>Lex Fridman Podcast </p>
              </div>
              <i class="fas fa-quote-left"></i>
              <p>
                We're a rapidly growing podcast, and need a reliable podcast host that can scale with us. Wavvy's speed, ease of use, and flexibility have allowed us to dHctZ3Jvdw our audience more quickly than ever before. We love Wavvy, and would recommend it to any podcaster out there.
              </p>
            </div>
          </div>

          <div className="parent_pod px">
            <div className="pod_card pd">
              <div className="pod_station">
                <img src="" alt="" />
                <h3>Eric Weinstein</h3>
                <p>The Portal </p>
              </div>
              <i class="fas fa-quote-left"></i>
              <p>
                We have been really happy with Wavvy's customer service, and the pricing is competitive with other podcast hosting companies. This is a great service for anyone looking to host a podcast or audio blog.
              </p>
            </div>

            <div className="pod_card pd">
              <div className="pod_station">
                <img src="" alt="" />
                <h3>Eric Weinstein</h3>
                <p>The Portal </p>
              </div>
              <i class="fas fa-quote-left"></i>
              <p>
                We have been really happy with Wavvy's customer service, and the pricing is competitive with other podcast hosting companies. This is a great service for anyone looking to host a podcast or audio blog.
              </p>
            </div>
          </div>

          <div className="parent_pod">
            <div className="pod_card">
              <div className="pod_station">
                <img src="" alt="" />
                <h3>Eric Weinstein</h3>
                <p>The Portal </p>
              </div>
              <i class="fas fa-quote-left"></i>
              <p>
                We have been really happy with Wavvy's customer service, and the pricing is competitive with other podcast hosting companies. This is a great service for anyone looking to host a podcast or audio blog.
              </p>
            </div>

            <div className="pod_card">
              <div className="pod_station">
                <img src="" alt="" />
                <h3>Eric Weinstein</h3>
                <p>The Portal </p>
              </div>
              <i class="fas fa-quote-left"></i>
              <p>
                We have been really happy with Wavvy's customer service, and the pricing is competitive with other podcast hosting companies. This is a great service for anyone looking to host a podcast or audio blog.
              </p>
            </div>
          </div>

          <div className="parent_pod px">
            <div className="pod_card pd">
              <div className="pod_station">
                <img src="" alt="" />
                <h3>Eric Weinstein</h3>
                <p>The Portal </p>
              </div>
              <i class="fas fa-quote-left"></i>
              <p>
                We have been really happy with Wavvy's customer service, and the pricing is competitive with other podcast hosting companies. This is a great service for anyone looking to host a podcast or audio blog.
              </p>
            </div>

            <div className="pod_card pd">
              <div className="pod_station">
                <img src="" alt="" />
                <h3>Eric Weinstein</h3>
                <p>The Portal </p>
              </div>
              <i class="fas fa-quote-left"></i>
              <p>
                We have been really happy with Wavvy's customer service, and the pricing is competitive with other podcast hosting companies. This is a great service for anyone looking to host a podcast or audio blog.
              </p>
            </div>
          </div>

          {/*  */}
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
                <h3 class="text-sm text-gray-600 lg:text-base">Do I need specific tech?</h3>
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
                <h3 class="text-sm text-gray-600 lg:text-base">Where are my podcasts stored?</h3>
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
                <h3 class="text-sm text-gray-600 lg:text-base">What if I want to move to a different platform later?</h3>
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
                <h3 class="text-sm text-gray-600 lg:text-base">Are larger podcasts more expensive?</h3>
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
                <h3 class="text-sm text-gray-600 lg:text-base">What if I don’t do video?</h3>
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
                <h3 class="text-sm text-gray-600 lg:text-base">How does automatic transcription work?</h3>
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
                <h3 class="text-sm text-gray-600 lg:text-base">What if I decide to cancel in the future?</h3>
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
          <a class="inline-flex cursor-pointer rounded-lg bg-blue-900 py-3 px-5 text-lg text-white" href="#">Still have questions?</a>
        </div>
      </div>

      <div className="str_pod">
        <div className="str_pod_card">
          <div className="str_card_infor">
            <h1>Start growing <br /> your podcast <br /> today</h1>
            <p>
            Lorem ipsum dolor sit amet porta augue quisque<br /> enim. Vel ornare fames mauris dictumst aliqua <br /> purus praesent quis ut eros laoreet odio
            </p>
            <a href="https://" className="home_btn">Get your free account</a>
          </div>

          <div className="str_card_img">
            <img src={Pod} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home