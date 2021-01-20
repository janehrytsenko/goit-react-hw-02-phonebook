import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value, id: uuidv4() })
    };
    
    handleSubmit = event => {
        event.preventDefault();
    
        this.props.onSubmit(this.state);
        
        this.setState({ name: '' , number: ''});
  }

  contactId = uuidv4();

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
          <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        id={this.contactId}
                        onChange={this.handleChange}
                        placeholder="Anna Hoffman"
                    />
                </label>
                <label>
                    Number
          <input
                        type="text"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}

                    />
                </label>
                <button type="submit">Add contact</button>
                
            </form>
        )
    }
}

export default ContactForm;