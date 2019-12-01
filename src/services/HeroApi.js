import axios from 'axios';

const HeroApi = axios.create({
  baseURL: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/',
});

export default HeroApi;
