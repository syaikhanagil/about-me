import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.sass'
const Input = props => {
    const {type, name, placeholder, id, dataId, onChange, value, block, rounded} = props;
    const className = classNames('sa-input', {
        block,
        rounded
    })
    return (
        <input className={className} placeholder={placeholder} type={type} name={name} id={id} data-id={dataId} onChange={onChange} value={value}/>
    )
}

Input.defaultProps = {
    type: 'text',
    block: false,
    rounded: false
}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    dataId: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
    block: PropTypes.bool,
    rounded: PropTypes.bool
}

export default React.memo(Input);