import React from 'react';
import ProgressBar from '../components/atoms/ProgressBar/ProgressBar';
import Header from '../components/organisms/Header/Header';
import SideBar from '../components/organisms/SideBar/SideBar';
import './AppLayout.sass'
class AppLayout extends React.PureComponent {
    render() {
        const { children } = this.props;
        return (
            <React.Fragment>
                <ProgressBar scroll/>
                <Header/>
                <SideBar />
                <main className="sa-main">
                    {children}
                </main>
            </React.Fragment>
        )
    }
}

export default AppLayout;