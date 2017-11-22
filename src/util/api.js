const API = {
  utils: {
    get: (url) => {
      return fetch(url)
        .then(API.utils.handleErrors)
        .then((res) => res.json())
        .then((json) => json)
        .catch((err) => console.log(err));
    },
    handleErrors: (res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    }
  },
  giphy: {
    getTrending: () => {
      return API.utils.get('https://api.giphy.com/v1/gifs/trending?api_key=2Nh2SlqSmuJr96ysomo5sTSmG2I3u6Bu&limit=9&rating=G')
    },
    getCats: (term) => {
      const url = encodeURI('https://api.giphy.com/v1/gifs/random?api_key=2Nh2SlqSmuJr96ysomo5sTSmG2I3u6Bu&tag='+term+' cat&rating=G')
      return API.utils.get(url)
    }
  }
}

export default API;
