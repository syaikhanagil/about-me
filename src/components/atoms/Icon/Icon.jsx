import React from 'react';
import PropTypes from 'prop-types';
import feather from 'feather-icons';
import classNames from 'classnames';

import './Icon.sass'
class Icon extends React.PureComponent {
    
    componentDidMount() {
        const {useSvg} = this.props;
        if(!useSvg){
            feather.replace();
        }
    }

    render(){
        const {icon, useSvg, sm, lg, xl} = this.props;
        const className = classNames('sa-icon', {
            'svg': useSvg,
            sm,
            lg,
            xl
        });
        return (
            <React.Fragment>
                {!useSvg && (
                    <i className={className} data-feather={icon}></i>
                )}
                {useSvg && (
                    <img src={`/${icon}`} className={className} alt=""/>
                )}
            </React.Fragment>

        )
    }
}

Icon.defaultProps = {
    useSvg: false,
    sm: false,
    lg: false,
    xl: false
}

Icon.propTypes = {
    icon: PropTypes.string,
    useSvg: PropTypes.bool,
    sm: PropTypes.bool,
    lg: PropTypes.bool,
    xl: PropTypes.bool,
}

export default React.memo(Icon);