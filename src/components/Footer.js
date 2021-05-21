import React from 'react';
import { Menu } from 'semantic-ui-react';

const Footer = () => (
  <Menu fluid widths={1} fixed='bottom' id='footer'>
    <Menu.Item>
      <h5>© 1998 PIZZA PIE<span role='img' aria-label='pizza'> Made by <a href='https://github.com/Herizpatel' target="_blank">Heriz Patel</a></span></h5>
    </Menu.Item>
  </Menu>
);

export default Footer;
