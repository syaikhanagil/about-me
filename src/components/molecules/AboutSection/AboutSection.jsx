import React from 'react';
import Button from '../../atoms/Button/Button';
import Me from '../../atoms/Me/Me';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import Text from '../../atoms/Text/Text';

import './AboutSection.sass';

const AboutSection = (props) => {
    return (
        <section name="about-section" className="about-section" id="about-section">
            <Text as="h3">About Me</Text>
            <div className="about-container">
                <Me type="avatar"/>
                <div className="about-card">
                    <div className="about-desc">
                        <Text>My name is <strong>Saekhan Agil</strong>, Web developer from Pemalang, Central Java, Indonesia. Maybe I haven't had many years of experience, but I can learn a lot in a short time.</Text>
                        <Button block primary>Download CV</Button>
                    </div>
                    <div className="about-skill">
                        <ProgressBar skill title="Creativity" level="80" style={{
                            maxWidth: '80%',
                            backgroundColor: '#ff4c60',
                            marginBottom: 20
                        }}/>
                        <ProgressBar skill title="Development" level="90" style={{
                            maxWidth: '90%',
                            backgroundColor: '#353353',
                            marginBottom: 20
                        }}/>
                        <ProgressBar skill title="Design" level="85" style={{
                            maxWidth: '85%',
                            backgroundColor: '#ffd15c',
                            marginBottom: 20
                        }}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutSection;