import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Button.sass'
const Button = props => {
    const {children, type, primary, block, link, to, id, dataID, onClick} = props;
    const className = classNames('sa-btn', {
        primary,
        block,
        link
    })
    return (
        <React.Fragment>
            {!link && (
                <button type={type} className={className} id={id} data-id={dataID} onClick={onClick}>{children}</button>
            )}
            {link && (
                <a href={to} className={className} id={id} data-id={dataID}>{children}</a>
            )}
        </React.Fragment>
    )
};

Button.defaultProps = {
    children: '',
    type: 'button',
    primary: false,
    block: false,
    link: false,
    onClick: () => {}
}

Button.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.string,
    primary: PropTypes.bool,
    block: PropTypes.bool,
    link: PropTypes.bool,
    to: PropTypes.string,
    id: PropTypes.string,
    dataID: PropTypes.string,
    onClick: PropTypes.func
}

export default React.memo(Button);