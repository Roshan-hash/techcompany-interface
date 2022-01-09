import React from 'react';
import "../Contact/Contact.css";
import ContactImage from '../../image/ContactImage.gif';
import { useState } from 'react';
import Alert from '@material-ui/lab/Alert';

const Contact = () => {
    
    const[user, setUser] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    let name, value;
    const getUserDate = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value });
    };

    const postData =async (e) =>{
        e.preventDefault();

        const {name, subject, email, message} = user;

        const res = await fetch('https://website-29d85-default-rtdb.firebaseio.com/techcontact.json', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
               name,
               subject,
               email, 
               message,
            }),
        }); 

        if(res){
            setUser({
                name: "",
                subject: "",
                email: "",
                message: "",
            });

            <Alert variant="filled" severity="success">
               This is a success alert — check it out!
            </Alert>
        }
    };

    return (
        <div className='contact'  id='contact'>
            <div className='contact-background'></div>
                <div className='contact-wrapper'>
                <div className='contact-left'>
                       <h1 className='contact-title'>Let's discuss your project</h1>
                       <div className='contact-info'>
                           <img src={ContactImage} style={{width:"70%"}} alt="contactimage"/>
                       </div>
                   </div>
                   <div className='contact-right'>
                       <p className='contact-desc'>
                           <b>What's your story</b> Get in touch. Always available for
                            freelancing if the right project comes along. me. 
                       </p>
                       <form method='POST' >
                           <input type="text" placeholder="Name" name="name" value={user.name} onChange={getUserDate}/>
                           <input type="text" placeholder='Subject' name='subject' value={user.subject} onChange={getUserDate}/>
                           <input type="text" placeholder="Email" name="email" value={user.email} onChange={getUserDate}/>
                           <textarea rows="5" placeholder="Message" name="message" value={user.message} onChange={getUserDate}/>
                           <button onClick={postData}>Submit</button>
                           <p className='contactcopyright'>For any question contact our 24/7 customer service + 123-456-789</p>
                       </form>
                   </div>
                </div>
        </div>
        
    )
}

export default Contact
