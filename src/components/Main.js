import React, { Component } from 'react';
import Searchbar from './Searchbar';
import GifContainer from './GifContainer';
import History from './History';
import API from '../util/api';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cachedQuery: [],
      gifs: [],
      query: '',
    }

    this.handleQuery = this.handleQuery.bind(this);
    this.handleDelayCache = this.handleDelayCache.bind(this);
  }

  componentWillMount() {
    this.getTrendingGifs();
  }

  handleQuery(query) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=2Nh2SlqSmuJr96ysomo5sTSmG2I3u6Bu&q=${query}&limit=3&offset=0&rating=PG-13&lang=en`
    const cache = this.processQuery(query);

    API.utils.get(url)
      .then(res => this.setState({ gifs: res.data, query: query}));

      this.handleDelayCache(cache);
  }

  getTrendingGifs() {
    API.giphy.getTrending()
      .then(res => this.setState({ gifs: res.data }));
  }

  handleDelayCache(arr) {
    const self = this;

    setTimeout(() => {
      self.setState({
        cachedQuery: arr
      })
    }, 2500)
  }

  processQuery(query) {
    return [...this.state.cachedQuery, query];
  }

  render() {
    const queryIsEmpty = this.state.query.length === 0;
    let trendTitle;
    if (queryIsEmpty) trendTitle = <h1 className="text-center">Currently Trending Gifs</h1>;

    return (
      <div className="main-container">
        <Searchbar cache={this.handledelayCache} value={this.state.query} query={this.handleQuery} />
        <History click={this.handleQuery} list={this.state.cachedQuery} />
        {trendTitle}
        <GifContainer value={this.state.query} gifs={this.state.gifs} />
      </div>
    );
  }
}
