import React from 'react';
import Icon from '../../atoms/Icon/Icon';

import './Footer.sass'
class Footer extends React.Component {
    render() {
        return (
            <footer className="sa-footer">
                <a href="http://github.com/syaikhanagil" target="_blank" rel="noopener noreferrer">
                    <Icon icon="github"></Icon>
                </a>
                <a href="http://facebook.com/syaikhanagil.id" target="_blank" rel="noopener noreferrer">
                    <Icon icon="facebook"></Icon>
                </a>
                <a href="http://instagram.com/iam.agil_" target="_blank" rel="noopener noreferrer">
                    <Icon icon="instagram"></Icon>
                </a>
                <a href="https://www.linkedin.com/in/saekhanagil/" target="_blank" rel="noopener noreferrer">
                    <Icon icon="linkedin"></Icon>
                </a>
            </footer>
        );
    }
}

export default Footer;