import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Form, Label, Modal, Button } from 'semantic-ui-react';

class Home extends Component {

  static propTypes = {
    updatePostcode: PropTypes.func.isRequired
  }

  state = {
    postcode: '',
    validPostcode: true
  }

  handleChange = (e) => {
    this.setState({ postcode: e.target.value })
  }

  handleNameSubmit = () => {
    const formattedPostcode = this.state.postcode.toUpperCase().replace(/\s/g, "");

     {
      this.props.history.push('/menu');
      this.setState({
        postcode: formattedPostcode
      });
      this.props.updatePostcode(formattedPostcode);
    }  
  }

  closeModal = () => {
    this.setState({
      postcode: '',
      validPostcode: true
    });
  }

  render(){

    return(
      <div id='home-page'>
        <Container >
          <Header as='h1' id="homePage-logo">PIZZA PIE</Header>
          <Container id="home-content">
            <Form size='large' onSubmit={this.handleNameSubmit} fluid='true'>
              <Form.Group >
                <Form.Input placeholder='Your Name Please :)' name='postcode' onChange={this.handleChange} value={this.state.postcode} width={7} required id='home-form'/>
              </Form.Group>
              <Form.Group >
                <Form.Button type='submit' color='brown' size='large' id='home-btn'>MENU CARD</Form.Button>
              </Form.Group>
            </Form>
          </Container>
        </Container>
     </div>
    )
  }
};

export default Home;
