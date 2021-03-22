import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Textarea.sass'
const Textarea = props => {
    const {children, name, placeholder, id, dataId, onChange, block, rounded} = props;
    const className = classNames('sa-textarea', {
        block,
        rounded
    })
    return (
        <textarea className={className} rows="5" placeholder={placeholder} name={name} id={id} data-id={dataId} onChange={onChange} value={children}>
            {children}
        </textarea>
    )
}

Textarea.defaultProps = {
    children: '',
    block: false,
    rounded: false
}

Textarea.propTypes = {
    children: PropTypes.any,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    dataId: PropTypes.string,
    onChange: PropTypes.func,
    block: PropTypes.bool,
    rounded: PropTypes.bool
}

export default React.memo(Textarea);