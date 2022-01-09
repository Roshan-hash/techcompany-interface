import React from 'react'
import { ButtonBase } from '@material-ui/core';
import { SendSharp } from '@material-ui/icons';
import './Services.css';
import ServImage from '../../image/IT_Services..gif';
import Star from '../../image/Staricon.png';
import CustomerService from '../../image/customerservicesicon.png';
import Help from '../../image/helpservice.png';
import { PlayArrow } from '@material-ui/icons';


const Services = () => {
    return (
        <div className='servcontainer'  id='services'>
            <div className='servleft'>
                <div className='servwrapper'>
                    <div className='servtitle'>
                        <h1>Simple process to start</h1>
                    </div>
                    <div className='servdesc'>
                        We provide digital experience services to startups and small
                         businesses to looking for a partner of their digital media, design &
                         development, lead generation and communications requirents. We work
                          with you, not for you. Although we have a great resources
                    </div>
                    <div className='servminicardcontainer'>
                    <div className='servcardcontainer'>
                        <div className='servminicard'>
                           <img src={Star} className='servcardimage' alt=''/>
                           <p className='servcardtitle'>Networking, Digital Workplace, and IoT Services</p>
                        </div>
                        <div className='servminicard'>
                           <img className='servcardimage' src={CustomerService} alt=''/>
                           <p className='servcardtitle'>Advisory and Professional</p>
                        </div>
                        <div className='servminicard'>
                           <img className='servcardimage' src={Help} alt=''/>
                           <p className='servcardtitle'>24*7 Customer Service On call</p>
                        </div>
                    </div>
                    <div className='servcardcontainer'>
                        <div className='servminicard'>
                           <img src={Star} className='servcardimage' alt=''/>
                           <p className='servcardtitle'>Networking, Digital Workplace, and IoT Services</p>
                        </div>
                        <div className='servminicard'>
                           <img className='servcardimage' src={CustomerService} alt=''/>
                           <p className='servcardtitle'>Advisory and Professional</p>
                        </div>
                        <div className='servminicard'>
                           <img className='servcardimage' src={Help} alt=''/>
                           <p className='servcardtitle'>24*7 Customer Service On call</p>
                        </div>
                    </div>
                    </div>
                      <div className='servbutton' >
                          How it Word 
                      </div>
                   

                </div>
            </div>

            <div className='servright'>
                <div className='servimage'>
                    <img src={ServImage} alt='' style={{width:"100%"}} />
                </div>
            </div>
            
        </div>
    )
}

export default Services
