import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Segment } from 'semantic-ui-react';

class CustomerDetailsForm extends Component {

  static propTypes = {
    customerDetails: PropTypes.object,
    loadSampleCustomer: PropTypes.func.isRequired,
    updateCustomerDetails: PropTypes.func.isRequired,
  }

  handleChange = (e) => {
    const updateCustomer = {
      ...this.props.customerDetails,
      [e.currentTarget.name]: e.target.value
    }
    this.props.updateCustomerDetails(updateCustomer);
  }

  render(){

    const { firstName, lastName, email, contactNum,  } = this.props.customerDetails;

    return (
    <div>
      <Segment>
        <Form id='checkout-customer-form'>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              label='First name'
              type='text'
              placeholder='Enter Your First name'
              name='firstName'
              value={firstName}
              onChange={this.handleChange}
              required />
            <Form.Input
              fluid
              label='Last name'
              type='text'
              placeholder='Enter Your Last name'
              name='lastName'
              value={lastName}
              onChange={this.handleChange}
              required />
          </Form.Group>

          <Form.Input
            label='Email'
            type='email'
            placeholder='Enter Your Email Address'
            name='email'
            value={email}
            onChange={this.handleChange}
            required />
          <Form.Input
            label='Contact No.'
            type='tel'
            placeholder='Enter Your Contact Number'
            name='contactNum'
            value={contactNum}
            onChange={this.handleChange}
            required />
        </Form>
      </Segment>
    </div>
    );
  }
}

export default CustomerDetailsForm;
