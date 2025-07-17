// const catMe = require('cat-me')

// console.log(catMe());


const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // res.end('hello world')


    // creating routing
    if (req.url == "/about") {
        res.end('the about page');
    }

    if (req.url == "/profile") {
        res.end("the profile page")
    }

    if (req.url == '/') {
        res.end('the home page')
    }

})

// server.listen(3000)


// express
const express = require('express');
const app = express();  //that tool present in it is now open when we call it that the date or tool is now present in ap


// creating routing through express
app.get('/', (req, res) => {
    res.send('hellow world from express!')
})

app.get('/about', (req, res) => {
    res.send('the about page')
})

app.get('/profile', (req, res) => {
    res.send('the profile Page')
})

app.listen(3000)