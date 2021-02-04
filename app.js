// This is the built-in package for writing to a text file using fs.writeFile.  Takes in three arguments: destination, data, and the error if unsuccessful
const fs = require('fs')
const API = require('./API/api.js')


// This function routes to the API folder to get the BitBucket API data
const getData = () => {
    API.getCommits()
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}


// This function writes data to the commits.txt file
const writeCommits = (data) => {
    fs.writeFile('./data/commits.txt', data, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Successfully printed to commits.txt")
        }
    })
}

getData()