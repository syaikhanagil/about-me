import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ProgressBar.sass';
import Text from '../Text/Text';

const ProgressBar = props => {
    const {title, skill, level, scroll, style} = props;
    const className = classNames('sa-progress', {
        'skill-bar': skill
    })
    return (
        <React.Fragment>
            {skill && !scroll && (
                <React.Fragment>
                    {title !== '' && (
                        <div className="title">
                            <Text>{title}</Text>
                            <Text>{level}%</Text>
                        </div>
                    )}
                    <div className={className}>
                        <div style={style}></div>
                    </div>
                </React.Fragment>
            )}
            {!skill && scroll && (
                <ScrollProgress/>
            )}
        </React.Fragment>
    )
}

class ScrollProgress extends React.PureComponent {
    constructor(props){
        super(props);
        this.scrollHandler = this.scrollHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler)
    }

    scrollHandler(){
        var scroll = document.body.scrollTop || document.documentElement.scrollTop;
        var progress = document.querySelector('.scroll-bar');
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (scroll / height) * 100;
        progress.style.width = scrolled + "%";
    }
    render(){
        return (
            <div className="sa-progress scroll-bar"></div>
        )
    }
}

ProgressBar.defaultProps = {
    title: '',
    skill: false,
    level: '100',
    scroll: false,
}

ProgressBar.propTypes = {
    title: PropTypes.string,
    skill: PropTypes.bool,
    level: PropTypes.string,
    scroll: PropTypes.bool,
    style: PropTypes.any
}

export default ProgressBar;