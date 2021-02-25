import axios from 'axios';

axios.get('https://api.github.com/users/sozinhoL').then(e => {
  const data = {name : e.data.name, avatar_url: e.data.avatar_url}
  console.log(data);
  module.exports = data;
})

