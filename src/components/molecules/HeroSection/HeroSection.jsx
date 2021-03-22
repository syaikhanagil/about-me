import React from 'react';
import Button from '../../atoms/Button/Button';
import Me from '../../atoms/Me/Me';
import Text from '../../atoms/Text/Text';
import TypedText from '../../atoms/TypedText/TypedText';

import './HeroSection.sass'
const HeroSection = (props) => {
    return (
        <section name="hero-section" className="hero-section">
            <canvas id="canvas" width="1351" height="334"></canvas>
            <div className="sa-hero">
                <Me type="avatar"/>
                <Text as="h3">Saekhan Agil</Text>
                <TypedText strings={[
                    'Hello, I\'am <strong>Agil</strong>',
                    'Coding enthusiast',
                    'Full-Stack Developer',
                ]}/>
                <Button block onClick={() => {
                    const element = document.getElementById('about-section');
                    element.scrollIntoView(true)
                }}>
                    <span className="mouse">
                        <span className="wheel"></span>
                    </span>
                </Button>
            </div>
        </section>
    )
};

export default HeroSection;