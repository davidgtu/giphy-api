import React, { Component } from 'react';

export default class CatSearchbar extends Component {
  enterQuery(term) {
    this.setState({
      catTerm: term
    });

    this.props.term(term);
  }

  render() {
    return (
      <div className="searchbar--container">
        <span className="searchbar--flavor-text">Give me</span>
      <input value={this.props.value} className="searchbar--input cat" placeholder="silly" onChange={event => this.enterQuery(event.target.value)} />
        <span className="searchbar--flavor-text">kitties.</span>
      </div>
    );
  }
}
