import React from 'react';
import Text from '../../atoms/Text/Text';
import SkillCard from '../SkillCard/SkillCard';
import logoHtml from '../../../assets/svg/logo-html5.svg';
import logoCss from '../../../assets/svg/logo-css3.svg';
import logoSass from '../../../assets/svg/logo-sass.svg';
import logoNodejs from '../../../assets/svg/logo-nodejs.svg';
import logoLaravel from '../../../assets/svg/logo-laravel.svg';
import logoJava from '../../../assets/svg/logo-java.svg';
import logoJavascript from '../../../assets/svg/logo-javascript.svg';
import logoVueJs from '../../../assets/svg/logo-vuejs.svg';
import logoReactJs from '../../../assets/svg/logo-reactjs.svg';
import logoDocker from '../../../assets/svg/logo-docker.svg';

import './SkillSection.sass';

class SkillSection extends React.PureComponent {
    render(){
        return (
            <section data-aos="fade-up" data-aos-duration="500" name="skill-section" id="skill-section" className="skill-section">
                <Text as="h3">Skills</Text>
                <div className="skill-container">
                    <SkillCard title="Html" animation="flip-up" icon={logoHtml} level="95" color="#e44d26"/>
                    <SkillCard title="Css" animation="flip-up" icon={logoCss} level="90" color="#1e8bd4"/>
                    <SkillCard title="Sass" animation="flip-up" icon={logoSass} level="85" color="#ff4c60"/>
                    <SkillCard title="Javascript" animation="flip-up" icon={logoJavascript} level="90" color="#F0DB4F"/>
                    <SkillCard title="NodeJS" animation="flip-up" icon={logoNodejs} level="90" color="#83cd29"/>
                    <SkillCard title="React" animation="flip-up" icon={logoReactJs} level="90" color="#61DAFB"/>
                    <SkillCard title="VueJS" animation="flip-up" icon={logoVueJs} level="90" color="#41b883"/>
                    <SkillCard title="Laravel" animation="flip-up" icon={logoLaravel} level="85" color="#e42626"/>
                    <SkillCard title="Java" animation="flip-up" icon={logoJava} level="85" color="#0074BD"/>
                    <SkillCard title="Docker" animation="flip-up" icon={logoDocker} level="80" color="#2596be"/>
                </div>
            </section>
        )
    }
}

export default SkillSection;