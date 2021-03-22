import React from 'react';
import PropTypes from 'prop-types';

const Text = props => {
    const {children, as, style, id, dataId} = props;
    const Element = as;
    return (
        <React.Fragment>
            <Element style={style} id={id} data-id={dataId}>{children}</Element>
        </React.Fragment>
    )
}

Text.defaultProps = {
    children: '',
    as: 'p'
}

Text.propTypes = {
    children: PropTypes.any.isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
    style: PropTypes.any,
    id: PropTypes.string,
    dataId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default React.memo(Text);