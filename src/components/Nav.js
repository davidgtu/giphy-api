import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>Trending</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/cats'>Cats</NavLink>
      </li>
    </ul>
    )
  }
}
