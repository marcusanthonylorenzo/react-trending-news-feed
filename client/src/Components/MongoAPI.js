import axios from 'axios'

const MongoAPI = async (dataToPost, res) => {
  return await axios.post('http://localhost:3002/addArticles', { articlesList: dataToPost })
    .then((response) => console.log(dataToPost, response))
}

export default MongoAPI