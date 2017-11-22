import React, { Component } from 'react';
import CatSearchBar from './CatSearchBar';
import CatImage from './CatImage';
import API from '../util/api';

export default class Cats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catTerm: '',
      catURL: '',
    }

    this.getCat = this.getCat.bind(this);
  }

  componentWillMount() {
    this.loadCats('silly');
  }

  loadCats(startingTerm) {
    API.giphy.getCats(startingTerm)
      .then(res => this.setState({ catURL: res.data.image_original_url }))
  }

  getCat(term) {
    API.giphy.getCats(term)
      .then(res => this.setState({
        catTerm: term,
        catURL: res.data.image_original_url,
      }))
  }

  render() {
    return (
      <div className="cat--container">
        <CatSearchBar term={this.getCat}/>
        <div className="cat--img-container">
          <CatImage imgURL={this.state.catURL}/>
        </div>
      </div>
    );
  }
}
