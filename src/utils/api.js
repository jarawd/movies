class Api {
  constructor({ apiKey, baseUrl }) {
    this._apiKey = apiKey;
    this._baseUrl = baseUrl;
  }

  async getNowPlaying() {
    try {
      const response = await fetch(
        `${this._baseUrl}/now_playing?api_key=${this._apiKey}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`Error: ${error.message}`);
      throw error;
    }
  }

  async getPopular() {
    try {
      const response = await fetch(
        `${this._baseUrl}/popular?api_key=${this._apiKey}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`Error: ${error.message}`);
      throw error;
    }
  }

  async getTopRated() {
    try {
      const response = await fetch(
        `${this._baseUrl}/top_rated?api_key=${this._apiKey}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`Error: ${error.message}`);
      throw error;
    }
  }

  async getUpcoming() {
    try {
      const response = await fetch(
        `${this._baseUrl}/upcoming?api_key=${this._apiKey}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`Error: ${error.message}`);
      throw error;
    }
  }

  async morePopular() {
    try {
      const response = await fetch(
        `${this._baseUrl}/popular?api_key=${this._apiKey}`
      );
      const data = await response.json();
      const arr = data.results;
      const morePopular = arr.reduce((max, current) =>
        current.popularity > max.popularity ? current : max
      );
      return morePopular;
    } catch (error) {
      console.log(error);
    }
  }

  //function just to test API (Delete before to launch)
  async showDataInConsole() {
    const response = await fetch(
      `${this._baseUrl}/upcoming?api_key=${this._apiKey}`
    );
    const data = await response.json();
    console.log(data);
  }
}

const api = new Api({
  apiKey: 'b358325842c58b68e6d66c46a99facf1',
  baseUrl: 'https://api.themoviedb.org/3/movie',
});

export default api;
