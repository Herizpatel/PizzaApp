import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Button, Segment, Header } from 'semantic-ui-react';
import { formatPrice, formatToppings } from '../helpers';

class Pizza extends Component {
  static propTypes = {
    addToOrder: PropTypes.func.isRequired,
    details: PropTypes.object.isRequired
  }

  render(){
    const {name, toppings, image, price } = this.props.details;
    return(
      <Grid.Column computer={5}>
        <Segment id='pizza-card' raised>
          <Image src={image} />
          <Header as='h3'>{name}</Header>
          <p>{formatToppings(toppings)}</p>
          <div id='pizza-order-info'>
            <Header as='h5'>{formatPrice(price)}</Header>
            <p>
              <Button onClick={() => this.props.addToOrder(this.props.index)} color='orange'>ADD TO CART</Button>
            </p>
          </div>
        </Segment>
      </Grid.Column>
    )
  }
}

export default Pizza;
