import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'https://infinite-chamber-88917.herokuapp.com'
})

export default instance
