import React from 'react'
import './Featurs.css';
import Advertise from '../../image/Adverting.gif';

const Features = () => {
    return (
        <div className='featcontainer' id='features'>
            <div className='featleft'>
                <div className='featimage'>
                    <img src={Advertise} alt='Advertising'/>
                </div>
            </div>
            <div className='featright'>
                <div className='feattitle'>
                <b>good</b> Advertisment 
                     <br />
                <b>good</b> business
                </div>
                <div className='featsubtitle'>
                 We know that good advertisment means good business.
                </div>
                <div className='featdesc'>
                  We help our clients succeed by creating brand identities, digital
                  experiences, and print materials that communicate clearly, achieve
                  marketing goals, and look fantastic.
                </div>
                <div className='featdesc'>
                  We care your business and guarantee you to achieve marketing goals.
                </div>
                <div className='featbutton'>
                    Learn More
                </div>
            </div>
            
        </div>
    )
}

export default Features
