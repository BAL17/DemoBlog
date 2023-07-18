import {FaHome} from 'react-icons/fa'
import { useState } from 'react';

const HomeButton = ({
    handleBackToHome
}) => {

    const handleClick = () => {
        handleBackToHome();
}



    return <div className="homeButton" onClick={handleClick}><FaHome/> Home</div>;
}

export default HomeButton