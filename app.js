// This is the built-in package for writing to a text file using fs.writeFile.  Takes in three arguments: destination, data, and the error if unsuccessful
const fs = require('fs')


const getData = () => { }


const writeCommits = (data) => {
    fs.writeFile('./data/commits.txt', data, (err) => {
        if (err) {
            throw err
        } else {
            console.log("Successfully printed to commits.txt")
            }
    })
}

writeCommits("hello")