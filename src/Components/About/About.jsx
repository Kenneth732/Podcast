import React from 'react'
import './About.css'
import C1 from '../Assets/c1.jpg'
import V1 from '../Assets/v1.jpg'

import C2 from '../Assets/c2.jpg'
import V2 from '../Assets/v2.jpg'

import C3 from '../Assets/c3.jpg'
import V3 from '../Assets/v3.jpg'

import C4 from '../Assets/c4.jpg'
import V4 from '../Assets/v8.jpg'

import C5 from '../Assets/c5.jpg'
import V5 from '../Assets/v5.jpg'

import C6 from '../Assets/c6.jpg'
import V6 from '../Assets/v6.jpg'

import C7 from '../Assets/c7.jpg'
import V7 from '../Assets/v8.jpg'

import R1 from '../../pages/image19.jpg'
import R2 from '../../pages/image20.jpg'
import R3 from '../../pages/image21.jpg'
import R4 from '../../pages/image21.jpg'
import R5 from '../../pages/image23.jpg'
import R6 from '../../pages/image24.jpg'
import R7 from '../../pages/image26.jpg'

import Team1 from '../Assets/testimonials-1.jpg'
import Team2 from '../Assets/testimonials-2.jpg'
import Team3 from '../Assets/testimonials-3.jpg'
import Team4 from '../Assets/testimonials-4.jpg'
import Team5 from '../Assets/testimonials-5.jpg'
function About() {
  return (
    <div>
      <div className="about_container">
        <div className="about_content_infor">
          <div className='about_wavvy'><hr /> <h3>About Wavvy</h3></div>
          <h1 className='sub'>We are a small and passionate team in <br /> Los Angeles with the goal to simplify <br /> how podcasting is done.</h1>
        </div>

        <div className="image-gallery">
          <ul className="images">
          <li className='card_x'>
              <img src={C1} alt="" />
              <div className="about_details">
                <div className="about_pod">
                  <i className="fas">🇨🇼</i>
                  <span>Liz</span>
                </div>
                <button className='load'></button>
              </div>
            </li>
            <li className='card_x'>
              <img src={V1} alt="" />
              <div className="about_details">
                <div className="about_pod">
                  <i className="fas">🇺🇸</i>
                  <span>Tinna</span>
                </div>
                <button className='load'></button>
              </div>
            </li>
            <li className='card_x'>
              <img src={V2} alt="" />
              <div className="about_details">
                <div className="about_pod">
                  <i className="fas"></i>
                  <span>Aggy</span>
                </div>
                <button className='load'></button>
              </div>
            </li>
            <li className='card_x'>
              <img src={C2} alt="" />
              <div className="about_details">
                <div className="about_pod">
                  <i className="fas"></i>
                  <span>Stephan</span>
                </div>
                <button className='load'></button>
              </div>
            </li>
            <li className='card_x'>
              <img src={V3} alt="" />
              <div className="about_details">
                <div className="about_pod">
                  <i className="fas"></i>
                  <span>Nina</span>
                </div>
                <button className='load'></button>
              </div>
            </li>
            <li className='card_x'>
              <img src={C3} alt="" />
              <div className="about_details">
                <div className="about_pod">
                  <i className="fas"></i>
                  <span>Steve</span>
                </div>
                <button className='load'></button>
              </div>
            </li>
            <li className='card_x'>
              <img src={C4} alt="" />
              <div className="about_details">
                <div className="about_pod">
                  <i className="fas"></i>
                  <span>Adrian</span>
                </div>
                <button className='load'></button>
              </div>
            </li>
            <li className='card_x'>
              <img src={V4} alt="" />
              <div className="about_details">
                <div className="about_pod">
                  <i className="fas"></i>
                  <span>Rufas</span>
                </div>
                <button className='load'></button>
              </div>
            </li>
            <li className='card_x'>
              <img src={C5} alt="" />
              <div className="about_details">
                <div className="about_pod">
                  <i className="fas"></i>
                  <span>Jane</span>
                </div>
                <button className='load'></button>
              </div>
            </li>
            <li className='card_x'>
              <img src={V5} alt="" />
              <div className="about_details">
                <div className="about_pod">
                  <i className="fas"></i>
                  <span>Queen Bee</span>
                </div>
                <button className='load'></button>
              </div>
            </li>
            <li className='card_x'><img src={C6} alt="" /></li>
            <li className='card_x'><img src={V6} alt="" /></li>
          {/* <li className='card_x'><img src={C7} alt="" /></li> */}
          </ul>
          <a href="/" className="load_more">Read Reviews</a>
        </div>
      </div>

      <div className="about_container about_hist">
        <div className="about_content_infor">
          <div className='about_wavvy about_txt'><hr /> <h3>About Wavvy</h3></div>
          <h1 className='sub sub_txt'> Empowering podcasters since <br /> 2013 </h1>
        </div>

        <div className="about_txt_info">
          <div className="txt_card">
            <p className='mv'>Lorem ipsum dolor sit amet sodales enim orci venenatis nulla tortor. brFacilisis quam nunc eleifend aliqua tempus luctus pretium do nunc pulvinar tellus ac lacinia. Ultrices habitasse leo pulvinar laoreet molestie dolore lobortis eros interdum fermentum nullam massa ac.</p>
            <p>Incididunt feugiat cras fusce tortor lectus cursus nulla vivamus fringilla. Nisl luctus at elementum fames pellentesque malesuada justo sed dictumst ultrices dui turpis.</p>
          </div>

          <div className="txt_card">
            <p>Lorem ipsum dolor sit amet dictum consequat arcu quisque justo turpis. Mauris odio tellus convallis bibendum vivamus gravida praesent turpis. Fermentum eiusmod eget sagittis ac dapibus eiusmod sodales consectetur duis quam bibendum eleifend. Eros pulvinar nullam lobortis enim morbi nullam cursus lectus laoreet molestie etiam ut tempor cras. Sagittis ultrices massa mollis proin euismod eros quam.</p>
          </div>
        </div>

        <div className="about_hist_img">
          <div className="about_msg_text_card">
            <div className="about_msg_card">
              <h2>10+</h2>
              <p>Years working on empowering <br /> podcasters</p>
            </div>

            <div className="about_msg_card">
              <h2>$5.5+</h2>
              <p>Capital raised by our <br /> investors</p>
            </div>

            <div className="about_msg_card">
              <h2>230+</h2>
              <p>Team members working on <br /> Wavy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about_us_val">
        <h1>The values that drive us.</h1>

        <div className="about_us_cards">
          <div className="about_us_card">
            <i className="fas"></i>

            <div className="about_more_infor">
              <h2>Ambition</h2>
              <p>
                Lorem ipsum dolor sit amet orci platea suspendisse. Aliquam habitasse pellentesque lacinia blandit scelerisque blandit sagittis ac suspendisse arcu lectus fringilla.
              </p>
            </div>

            <div className="about_more_infor">
              <h2>Ambition</h2>
              <p>
                Lorem ipsum dolor sit amet orci platea suspendisse. Aliquam habitasse pellentesque lacinia blandit scelerisque blandit sagittis ac suspendisse arcu lectus fringilla.
              </p>
            </div>

            <div className="about_more_infor">
              <h2>Ambition</h2>
              <p>
                Lorem ipsum dolor sit amet orci platea suspendisse. Aliquam habitasse pellentesque lacinia blandit scelerisque blandit sagittis ac suspendisse arcu lectus fringilla.
              </p>
            </div>

            <div className="about_more_infor">
              <h2>Ambition</h2>
              <p>
                Lorem ipsum dolor sit amet orci platea suspendisse. Aliquam habitasse pellentesque lacinia blandit scelerisque blandit sagittis ac suspendisse arcu lectus fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about_our_team">
        <div className="our_team">
          <div className='our_team_line'><hr /> <h3>Our team</h3></div>
          <div className="our_team_txt">
            <h1>The people behind Wavy</h1>
            <p>
              Lorem ipsum dolor sit amet dapibus fusce sed. Aliquet porta <br /> bibendum est platea fermentum tempus egestas. Luctus <br /> volutpat mauris quisque dictum et rhoncus habitasse.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="about_our_team_img">
            <img src={Team1} alt="" />
            <div className="our_team_mmO">
              <h3>Moroko</h3>
              <div className="postion">
                HR
              </div>
            </div>
          </div>

          <div className="about_our_team_img">
            <img src={Team2} alt="" />
            <div className="our_team_mmO">
              <h3>Nina</h3>
              <div className="postion">
                Assistance
              </div>
            </div>
          </div>

          <div className="about_our_team_img">
            <img src={Team3} alt="" />
            <div className="our_team_mmO">
              <h3>Aggy</h3>
              <div className="postion">
                Manager
              </div>
            </div>
          </div>

          <div className="about_our_team_img">
            <img src={Team4} alt="" />
            <div className="our_team_mmO">
              <h3>Steve</h3>
              <div className="postion">
                Producer
              </div>
            </div>
          </div>

          <div className="about_our_team_img">
            <img src={Team5} alt="" />
            <div className="our_team_mmO">
              <h3>Dean</h3>
              <div className="postion">
                Contractor
              </div>
            </div>
          </div>

          <div className="about_our_team_img">
            <img src={Team4} alt="" />
            <div className="our_team_mmO">
              <h3>Jane</h3>
              <div className="postion">
                Creator
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_invest">
        <div className="about_invest_infor">
          <h1>The investors behind <br /> Wavvy</h1>
          <p>
            Lorem ipsum dolor sit amet dapibus fusce sed. Aliquet porta <br /> bibendum est platea fermentum tempus egestas. Luctus volutpat <br /> mauris quisque dictum et rhoncus habitasse.
          </p>
        </div>

        <div className="about_investor_img">
          <div className="invest_card">
            <img src={R3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About