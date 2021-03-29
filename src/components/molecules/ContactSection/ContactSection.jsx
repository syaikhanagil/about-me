import React from 'react';
import Button from '../../atoms/Button/Button';
import Form from '../../atoms/Form/Form';
import Input from '../../atoms/Input/Input';
import Text from '../../atoms/Text/Text';
import Textarea from '../../atoms/Textarea/Textarea';
import Swal from 'sweetalert2';
import './ContactSection.sass';
import axios from 'axios';

class ContactSection extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            message: ''
        }
        this.handleForm = this.handleForm.bind(this);
        this.handleSent = this.handleSent.bind(this);
    }

    handleForm(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSent() {
        // const uri = 'http://27.112.78.113:5000';
        const uri = 'http://localhost:5000';
        const { name, email, message } = this.state;
        if (name && email && message) {
            const payload = {
                name: name, 
                email: email,
                message: message
            }
            axios.post(uri, payload, {
                headers: {
                    'Authorization': '997799889900'
                }
            }).then(res => {
                Swal.fire({
                    title: 'Success',
                    text: 'Message successfully sent',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            }).catch(err => {
                console.clear();
                Swal.fire({
                    title: 'Oops',
                    text: 'Maybe server error',
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            })
        } else {
            Swal.fire({
                title: 'Oops',
                text: 'Please complete the form',
                icon: 'error',
                confirmButtonText: 'Close'
            })
        }
    }
    render() {
        return (
            <section data-aos="fade-up" data-aos-duration="500" name="contact-section" className="contact-section">
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
                        <Button primary block onClick={this.handleSent}>Send Message</Button>
                    </Form>
                </div>
            </section>
        )
    }
}

export default ContactSection;