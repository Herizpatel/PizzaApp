import React, { Component } from 'react';
import {injectStripe, CardNumberElement, CardCVCElement, CardExpiryElement } from 'react-stripe-elements';
import { Form, Button, Segment, Modal } from 'semantic-ui-react';

class PaymentForm extends Component {

  state = {
    cardNumber: false,
    cardExpiry: false,
    cvc: false
  }

   stripeElementChange = (element, name) => {
    if (!element.empty && element.complete) {
      this.setState({ [name]: true });
    } else {
      this.setState({ [name]: false });
    }

    const { cardNumber, cardExpiry, cvv} = this.state;

    if (cardNumber && cardExpiry && cvv) {
      this.props.formStatus(true);
    } else {
      this.props.formStatus(false);
    }
  }

  render() {

    const createOptions = (fontSize, padding) => {
      return {
        style: {
          base: {
            fontSize,
            color: '#424770',
            letterSpacing: '0.025em',
            padding,
          },
          invalid: {
            color: '#9e2146',
          },
        },
      };
    };

    return (
      <div>
        <Modal trigger={<Button color='orange'>Sample Data for Your Help</Button>} closeIcon>
          <Modal.Content>
            <Modal.Description>
              <p><strong>Card number:</strong> 1111 1111 1111 1111</p>
              <p><strong>Expiration date:</strong> 11/11</p>
              <p><strong>CVV:</strong> 111</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <Segment>
          <Form>
            <label>
              Card number
              <CardNumberElement
                {...createOptions(this.props.fontSize)}
                options={{creditCard: true}}
                onChange={(element) => this.stripeElementChange(element, 'cardNumber')}
              />
            </label>
            <label>
              Expiration date
              <CardExpiryElement
                {...createOptions(this.props.fontSize)}
                onChange={(element) => this.stripeElementChange(element, 'cardExpiry')}
              />
            </label>
            <label>
              CVV
              <CardCVCElement
                {...createOptions(this.props.fontSize)}
                onChange={(element) => this.stripeElementChange(element, 'cvv')}
              />
            </label>
          </Form>
        </Segment>
    </div>
    );
  }
}

export default injectStripe(PaymentForm);
