import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/instructor/01.png'


const countList = [
{
iconName: 'icofont-users-alt-4',
count: '12600',
text: 'Marchant Enrolled',
},
{
iconName: 'icofont-graduate-alt',
count: '30',
text: 'Certified Courses',
},
{
iconName: 'icofont-notification',
count: '100',
text: 'Rewards and GitCards',
},
]
function Merchant() {
  return (
    <div className='instructor-section style-2 padding-tb section-bg-ash '>
      <div className='container pl-5 '>
        <div className='section-wrapper'>
          <div className='flex items-center justify-center gap-32 row-cols-1'>
            <div className='col'>
              {
                countList.map((count,i)=>(
                  <div key={i} className='count-item'>
                    <div className='count-inner'>
                      <div className='count-icon'>
                        <i className={count.iconName}></i>
                      </div>
                      <div className='count-content'>
                           <h2>
                            <span className='count'><CountUp end={count.count} /></span>
                           <span>+</span>
                           </h2>
                           <p>{count.text}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='col w-[30%] '>
              <div className='instructor-content'>
                     <span className='subtitle'>Why Choose Us</span>
                     <h2 className='title'>Become a Marchant</h2>
                     <p>Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn</p>
                     <Link to="sign-up" className='lab-btn'>Apply Now</Link>
              </div>
            </div>
            <div className='col pl-5'>
              <div className='instructor-thumb'>
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Merchant
