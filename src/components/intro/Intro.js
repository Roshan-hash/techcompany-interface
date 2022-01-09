import React from 'react';
import './Intro.css';
import IntroImage from '../../image/IntroImage.gif'

const Intro = () => {
    return (
        <div className='Introcontainer'  id='home'>
            <div className='IntroLeft'>
                <div className='introtitle'>
                    Lets Build your in Reality
                </div>
                <div className='introDesc'>
                  We believe that designing products and services in close partnership
                  with our clients is the only way to have a real impact on their
                  business.We believe that designing products and services in close partnership
                  with our clients is the only way to have a real impact on their
                  business.
                </div>
                <div className='Introinfo'>
                    <div className='introButton'>START A  PROJECT</div>
                    <div className='introContact'>
                        <div className='phone'>Call Us (012) 345 - 678</div>
                        <div className='contacttext'>For any question or concern</div>
                    </div>
                </div>
            </div>
            <div className='Introright'>
                <div className='Image'>
                    <img src={IntroImage} alt='' />
                </div>
            </div>
            
        </div>
    )
}

export default Intro
