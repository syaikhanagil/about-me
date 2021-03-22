import React from 'react';
import Text from '../../atoms/Text/Text';
import { work_experience } from '../../../assets/js/static-data';
import './WorkSection.sass';

class WorkSection extends React.PureComponent {
    render() {
        return (
            <section name="work-section" className="work-section">
                <Text as="h3">Work Experience</Text>
                <div className="work-container">
                    {work_experience.map((work, idx) => (
                        <div key={idx} className="work-table">
                            <div className="work-time">
                                <div>
                                    <Text>{work.year}</Text>
                                </div>
                            </div>
                            <div className="work-content">
                                <i className="work-dot"></i>
                                <div>
                                    <Text>{work.jobs} - {work.company}</Text>
                                    <span>{work.description}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}

export default WorkSection;