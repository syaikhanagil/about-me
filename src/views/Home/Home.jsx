import React from 'react';
import AboutSection from '../../components/molecules/AboutSection/AboutSection';
import ContactSection from '../../components/molecules/ContactSection/ContactSection';
import HeroSection from '../../components/molecules/HeroSection/HeroSection';
import SkillSection from '../../components/molecules/SkillSection/SkillSection';
import WorkSection from '../../components/molecules/WorkSection/WorkSection';
import Footer from '../../components/organisms/Footer/Footer';
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
                <Footer/>
            </AppLayout>
        );
    }
}

export default Home;