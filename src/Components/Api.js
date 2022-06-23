import axios from 'axios'

const Api = () => {
  axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=6DEu53L9NhPF2LZRAHnYZ5SA4ckszGHt`)
  .then(response => localStorage.setItem("news", JSON.stringify(response.data.results)))
}

export default Api