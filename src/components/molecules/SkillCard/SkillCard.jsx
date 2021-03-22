import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atoms/Icon/Icon';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import Text from '../../atoms/Text/Text';

import './SkillCard.sass';

const SkillCard = props => {
    const {title, icon, level, color} = props;
    return (
        <div className="sa-skill-card">
            {icon && (
                <Icon useSvg xl icon={icon}></Icon>
            )}
            <Text style={{
                marginBottom: 10
            }}>{title}</Text>
            <ProgressBar skill level={level} style={{
                maxWidth: `${level}%`,
                background: `${color}`
            }}/>
            <span>{level+'%'}</span>
        </div>
    )
}

SkillCard.defaultProps = {
    title: '',
    level: '100',
}

SkillCard.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.any,
    level: PropTypes.string,
    color: PropTypes.string
}

export default React.memo(SkillCard);