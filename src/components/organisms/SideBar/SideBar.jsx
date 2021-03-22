import React from 'react';
import {Link, Element, Events, scrollSpy} from 'react-scroll';
import Icon from '../../atoms/Icon/Icon';
import Logo from '../../atoms/Logo/Logo';
import Text from '../../atoms/Text/Text';

import './SideBar.sass';

class SideBar extends React.PureComponent {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        Events.scrollEvent.register("begin", function(to, element){
        })
        Events.scrollEvent.register("end", function(to, element){
        })
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end')
    }

    render(){
        return (
            <aside className="sa-sidebar default">
                <div className="sa-sidebar-header">
                    <Logo/>
                    <Text as="h3">Saekhan Agil</Text>
                </div>
                <nav className="sa-sidebar-menu">
                    <ul className="sa-menu-list">
                        <li className="sa-menu-item">
                            <Link to="hero-section" spy={true} smooth={true} offset={0} duration={500} activeClass="active"><Icon icon="home"/> Home</Link>
                        </li>
                        <li className="sa-menu-item">
                            <Link to="about-section" spy={true} smooth={true} offset={0} duration={500} activeClass="active"><Icon icon="user"/> About</Link>
                        </li>
                        <li className="sa-menu-item">
                            <Link to="skill-section" spy={true} smooth={true} offset={0} duration={500} activeClass="active"><Icon icon="activity"/> Skills</Link>
                        </li>
                        <li className="sa-menu-item">
                            <Link to="work-section" spy={true} smooth={true} offset={0} duration={500} activeClass="active"><Icon icon="layers"/> Work Experience</Link>
                        </li>
                        {/* <li className="sa-menu-item">
                            <a><Icon icon="file-text"/> Blog</a>
                        </li> */}
                        <li className="sa-menu-item">
                            <Link to="contact-section" spy={true} smooth={true} offset={0} duration={500} activeClass="active"><Icon icon="message-circle"/> Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="sa-sidebar-footer">
                    <Text as="p">© 2021 Saekhan Agil | Code with <Icon icon="heart"/></Text>
                </div>
            </aside>
        )
    }
}

export default SideBar;