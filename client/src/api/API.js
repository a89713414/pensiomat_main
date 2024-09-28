import axios from 'axios'

const baseURL = 'https://pensiomat.org/'

const apiServerRequest = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const API = {
  request: apiServerRequest.request,
  routes: '/api/routes',
  navs: '/api/navs',
  texts: '/api/texts',
}

export default API
