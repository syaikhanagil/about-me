import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Form.sass'
const Form = props => {
    const {children, action, method, transparent, rounded} = props;
    const className = classNames('sa-form', {
        transparent
    })
    return (
        <form className={className} action={action} method={method} autoComplete="off">
            {children}
        </form>
    )
}

Form.defaultProps = {
    children: '',
    method: 'POST',
    transparent: false,
    rounded: false,
}

Form.propTypes = {
    children: PropTypes.any.isRequired,
    action: PropTypes.string,
    method: PropTypes.string,
    transparent: PropTypes.bool,
    rounded: PropTypes.bool
}

export default React.memo(Form);