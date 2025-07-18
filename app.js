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
const morgan = require('morgan')

const app = express();  //that tool present in it is now open when we call it that the date or tool is now present in app

app.use(morgan('dev'))

// custom middlware (built by own)

app.set("view engine", 'ejs')

app.use((req, res, next) => {
    console.log("midddleWare")

    a = 23;
    b = 23;

    console.log(a + b);

    return next()
})



app.get('/', 
    (req, res, next) =>{

    const a = 3
    const b = 3

    console.log(a + b)

    next()

},

(req, res) => {
    res.render('index')
})


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

// app.listen(3000)