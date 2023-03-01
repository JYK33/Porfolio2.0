import React from 'react';
import MainImg from '../assets/space.jpg';

const Main = () => {
    return (
        <div id='main'>
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={MainImg} alt="main-page-img" />
        </div>
    )
}

export default Main