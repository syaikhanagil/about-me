import React from 'react';
import Typed from 'typed.js';

import './TypedText.sass'

class TypedText extends React.Component {

    componentDidMount() {
        const { strings } = this.props;
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };
        this.typed = new Typed(this.el, options);
    }

    render() {
        return (
            <span
                style={{ whiteSpace: 'pre' }}
                ref={(el) => { this.el = el; }}
            />
        );
    }
}

export default React.memo(TypedText);