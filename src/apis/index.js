import axios from 'axios'

// make fetch request and return promise
export const fetch = () => axios.get('https://jsonplaceholder.typicode.com/posts')
