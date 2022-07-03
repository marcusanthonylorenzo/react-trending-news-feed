import axios from 'axios'

const Api = () => {
  return axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=6DEu53L9NhPF2LZRAHnYZ5SA4ckszGHt`)
}

export default Api