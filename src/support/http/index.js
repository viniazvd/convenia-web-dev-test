import axios from 'axios'
import { BASE_URL } from '../enviroment/baseUrl'

export default axios.create({
  baseURL: BASE_URL
})
