// This is the built-in package for writing to a text file using fs.writeFile.  Takes in three arguments: destination, data, and the error if unsuccessful
const fs = require('fs')
const API = require('./API/api.js')

// This function writes data to the commits.txt file
const writeData = (data) => {
    fs.writeFile('./data/commits.txt', data, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Successfully printed to commits.txt")
        }
    })
}

// This function formats the data received into something nice to look at
const formatData = (data) => {
    let commitArray = []
    let i
    for (i = 0; i < data.values.length; i++) {
        commitArray.push(` Commit: ${data.values[i].message} (${data.values[i].date})`)
    }
    writeData(commitArray)
}

// This function routes to the API folder to get the BitBucket API data
const getData = () => {
    API.getCommits()
        .then(res => {
            formatData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

getData()