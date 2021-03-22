import React from 'react';
import logo from '../../../assets/images/logo-agil.png';

import './Logo.sass';

const Logo = () => {
    return (
        <a href="/" className="sa-logo">
            <img src={`/${logo}`} alt="Saekhan Agil" srcSet={`/${logo}`}/>
        </a>
    )    
}

export default React.memo(Logo);