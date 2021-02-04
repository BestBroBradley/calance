// We are using axios for our API call
const axios = require('axios')


module.exports = {
    getCommits: function () {
        console.log("Woo")
        return axios.get('https://stash.atlassian.com/rest/api/1.0/projects/JIRA/repos/jira/commits')
    }
}