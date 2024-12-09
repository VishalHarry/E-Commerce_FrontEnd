import React from 'react'
import { Link } from 'react-router-dom'

const clientsList = [
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
]

function LocationSpread() {
    return (
        <div className='clients-section style-2 '>
            <div className='container '>

                <div className=' section-header text-center'>
                    <h2>More Then 60,000 Customers</h2>
                    <p>Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping</p>
                </div>
                {/* main section */}
                <div className='section-wrapper'>
                    <div className='clients'>
                        {clientsList.map((val,ind)=>(
                            <div key={ind} className='client-list' >
                               <Link to="/sign-up" className='client-content'>
                               <span>{val.text}</span>
                               </Link>
                               <div className='client-thumb'>
                                 <img src={val.imgUrl} alt="" />
                               </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LocationSpread
