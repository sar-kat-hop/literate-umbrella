import React from 'react';
import { Link } from 'react-router-dom';
import myAvatar from '../assets/images/myPhoto.jpeg';
import backgroundImage from '../assets/images/cardbg.jpg';

function About() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src={require(`url(${backgroundImage})`).default} alt="grey background with string lights" className="rounded-xl" />
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={require(`url(${myAvatar}`).default} alt="photo of Sarah, website creator" />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">About Me</h2>
                    <p>my bio</p>
            <div className="card-actions">
                {/* button to link to portfolio page */}
            <button className="btn btn-primary"><Link to='/portfolio'>see my work</Link></button>
            </div>
            </div>
        </div>
    )
}   

export default About;
