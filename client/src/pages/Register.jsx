import React from 'react'
import img2 from '../assets/logo1.png'
import './Register.css'

const Register = () => {
    return (
        <div className="container-reg">
            <div className="info-reg">
                <img src={img2} className='rotate' />
                <h2 className="title">
                    <span className="title-word title-word-1">Join   </span>
                    <span className="title-word title-word-2">Spotify</span></h2>

                <span className='join'>Join Spotify and Listen to Unlimited Songs</span>
                <button id="b1"><b>About Us</b> </button>
            </div>
            <form action="./work2.html" method="get" className='form-reg'>
                <div className="register1">
                    <h3 className='reg'> Register Here</h3>
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" placeholder="Full Name" required></input>
                    <label htmlFor="uname">User Name :</label>
                    <input type="text" id="uname" placeholder="Username" required></input>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" placeholder="Email -  format : abc@xyz.com" required></input>
                    <label htmlFor="mno">Mobile No. : </label>
                    <div className="mob">
                        <input type="text" className="cc" id="cc" defaultValue={"+91"} readOnly></input>
                        <input type="tel" id="mno" pattern="[0-9]{10}" placeholder="10 Digit Mobile No." required title="Enter a valid 10 Digit Mobile No." ></input>
                    </div>
                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" placeholder="Password" required></input>
                    <input type="submit" value="Register" id="s1"></input>
                </div>
            </form>

        </div>
    )
}

export default Register