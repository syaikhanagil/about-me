import React from 'react';
import AboutSection from '../../components/molecules/AboutSection/AboutSection';
import ContactSection from '../../components/molecules/ContactSection/ContactSection';
import HeroSection from '../../components/molecules/HeroSection/HeroSection';
import HireSection from '../../components/molecules/HireSection/HireSection';
import SkillSection from '../../components/molecules/SkillSection/SkillSection';
import WorkSection from '../../components/molecules/WorkSection/WorkSection';
import AppLayout from '../../layouts/AppLayout';

class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <AppLayout>
                <HeroSection/>
                <AboutSection/>
                <SkillSection/>
                <WorkSection/>
                <ContactSection/>
                <HireSection/>
            </AppLayout>
        );
    }
}

export default Home;