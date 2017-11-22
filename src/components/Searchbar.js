import React, { Component } from 'react';

export default class Searchbar extends Component {
  enterQuery(term) {
    this.setState({
      query: term
    });

    this.props.query(term);
  }

  delayCache(arr) {
    this.setState({
      cachedQuery: arr
    })
  }

  render() {
    return (
      <div className="searchbar--container">
        <input value={this.props.value} className="searchbar--input" placeholder="Search GIFs!" onChange={event => {
            this.delayCache(event.target.value);
            this.enterQuery(event.target.value)
            }} />
      </div>
    );
  }
}
