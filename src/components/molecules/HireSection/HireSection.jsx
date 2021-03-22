import React from 'react';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';

import './HireSection.sass';
class HireSection extends React.PureComponent {
    render(){
        return (
            <section className="hire-section">
                <div className="hire-container">
                    <Text as="h4">Want to use my services?</Text>
                    <Button primary link to="mailto:syaikhanagil.id@gmail.com">Hire Now</Button>
                </div>
            </section>
        )
    }
}

export default HireSection;