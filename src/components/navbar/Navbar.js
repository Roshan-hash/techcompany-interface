import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Container'>
            <div className='Wrapper'>
                <div className='Left'>
                    <div className='Logo'>
                       tech.
                    </div>
                <div className='Menu'>
                    <div className='Menuitem'>
                        <a href='#home' >Home</a>
                    </div>
                    <div className='Menuitem'>
                        <a href='#features' >Features</a>
                    </div>
                    <div className='Menuitem'>
                        <a href='#services' >Services</a>
                    </div>
                    <div className='Menuitem'>
                        <a href='#pricing' >Review</a>
                    </div>
                    <div className='Menuitem'>
                        <a href='#contact' >Contact</a>
                    </div>
                </div>
             </div>
             <div className='Button'>
                <a href='#contact' style={{textDecoration: 'none', color: 'white'}} >JOIN NOW</a>
             </div>
            </div>
        </div>
    )
}

export default Navbar
