import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-type': 'application/json',
  },
})

class DataService {
  getAll() {
    return http.get('/articles')
  }
  get(year) {
    return http
      .get('/articles')
      .filter((article) => article.YearPublished == year)
  }
}

export default new DataService()
