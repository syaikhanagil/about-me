import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../../../assets/images/saekhan-agil-square.jpg';
import banner from '../../../assets/images/saekhan-agil-banner.jpg';

import './Me.sass';

const Me = props => {
    const {type} = props;
    return (
        <React.Fragment>
            {type === 'avatar' && (
                <div className="me-avatar">
                    <img loading="lazy" src={`/${avatar}`} alt="Saekhan Agil"/>
                </div>
            )}
            {type === 'banner' && (
                <div className="me-banner">
                    <img src={`/${banner}`} alt="Saekhan Agil"/>
                </div>
            )}
        </React.Fragment>
    )
}

Me.defaultProp = {
    type: 'avatar'
}

Me.propTypes = {
    type: PropTypes.string
}

export default React.memo(Me);