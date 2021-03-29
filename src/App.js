import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';
import AOS from 'aos';
class App extends React.PureComponent {
    componentDidMount() {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.style.display = "none";
            AOS.init();
        }, 500);
    }

    render(){
        return (
            <React.Fragment>
                {routes.map((route, idx) => (
                    <Route key={idx} path={route.path} exact={route.exact} component={route.component}/>
                ))}
            </React.Fragment>
        )
    }
}
export default App;