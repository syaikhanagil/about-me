import React from 'react';
import Button from '../../atoms/Button/Button';
import Logo from '../../atoms/Logo/Logo';

import './Header.sass'
class Header extends React.PureComponent {
    constructor(props){
        super(props);
        this.showSidebar = this.showSidebar.bind(this);
        this.scrollHandler = this.scrollHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    scrollHandler(){
        const scroll = window.scrollY;
        const header = document.querySelector('.sa-header');
        if(scroll > 100){
            header.classList.add('has-background');
        } else if(scroll < 100){
            header.classList.remove('has-background');
        }
    }
    showSidebar(e){
        e.preventDefault();
        const body = document.body;
        const menu = document.getElementById('menu-btn');
        const header = document.querySelector('.sa-header');
        const sidebar = document.querySelector('.sa-sidebar');
        body.classList.toggle('no-scroll');
        menu.classList.toggle('active');
        header.classList.toggle('slide-left');
        sidebar.classList.toggle('show');
    }

    render(){
        return (
            <header className="sa-header">
                <div className="sa-header-item-left">
                    <Button id="menu-btn" onClick={this.showSidebar}>
                        <div className="strip"></div>
                        <div className="strip"></div>
                        <div className="strip"></div>
                    </Button>
                </div>
                <Logo/>
                <div className="sa-header-item-right">
                </div>
            </header>
        )
    }
}

export default Header;