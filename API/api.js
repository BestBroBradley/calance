// We are using axios for our API call
const axios = require('axios')


module.exports = {
    getCommits: function () {
        return axios.get('https://api.bitbucket.org/2.0/repositories/calanceus/interviews17/commits')
    }
}