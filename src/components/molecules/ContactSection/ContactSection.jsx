import React from 'react';
import Button from '../../atoms/Button/Button';
import Form from '../../atoms/Form/Form';
import Input from '../../atoms/Input/Input';
import Text from '../../atoms/Text/Text';
import Textarea from '../../atoms/Textarea/Textarea';

import './ContactSection.sass';
class ContactSection extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
            message: ''
        }
        this.handleForm = this.handleForm.bind(this)
    }

    handleForm(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (
            <section name="contact-section" className="contact-section">
                <Text as="h3">Contact</Text>
                <div className="contact-container">
                    <Form rounded>
                        <div>
                            <Input placeholder="Your Name" name="name" id="name" dataId="name-sender" block onChange={this.handleForm} value={this.state.name}></Input>
                            <Input placeholder="Your Email" name="email" type="email" id="email" dataId="email-sender" block onChange={this.handleForm} value={this.state.email}></Input>
                        </div>
                        <div>
                            <Textarea placeholder="Your Message" name="message" id="message" dataId="message-sender" block onChange={this.handleForm}>
                                {this.state.message}
                            </Textarea>
                        </div>
                        <Button primary block>Send Message</Button>
                    </Form>
                </div>
            </section>
        )
    }
}

export default ContactSection;