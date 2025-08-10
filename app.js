// const CatMe = require('cat-me');
// console.log(CatMe())


// server is created not run
// const http = require('http')

// const server = http.createServer((req, res) => {


//     if (req.url == '/about') {
//         res.end('welcome to the abpout page')
//     }
//     if (req.url == '/profile') {
//         res.end('wecome to the profile page');

//     }
//     if(req.url == "/"){
//         res.end("the home page");
//     }
//     if(req.url == "/Contact"){
//         res.end("thanks for contact me")
//     }

// });

// server.listen(3000)


// express is like a tool box
const express = require('express');
const app = express();
const morgan = require('morgan');

const dbConnection = require('./config/db')
const userModel = require('./models/user')


// morgan logger
// third party middle ware
app.use(morgan('dev'))

// built-in middleware
// usig it for getting date from the req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


app.set("view engine", 'ejs')

// middleware
// custom middleware
// app.use((req, res, next) => {

//     console.log("this is middleware");
//     // res.send("middleware")

//     const a = 34;
//     const b = 21;

//     console.log("sum of the number : " + a + b);

//     return next()
// })


app.get('/',
    
//     (req, res, next) => {
//     const a = 3;
//     const b = 4;
//     console.log(a + b);

//     next();  // it will pass the control over the other functions or statment 
// }, 

(req, res) => {
    res.render('index')
})

app.get('/', (req, res) => {
    res.send('hello world priyanka')
});

app.get('/about', (req, res) => {
    res.send('the about papge')
});

app.get('/profile', (req, res) => {
    res.send("the Profile page")
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {

    const { username, email, password } = req.body;

 const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    })
    // console.log(req.body)
    res.send(newUser)
});

app.get('/get-users', (req, res) => {
    userModel.find({
        username: 'a'
    }).then((users) => {
        res.send(users)
    })
})


app.get('/update-user', async (req, res) => {
   await userModel.findOneAndUpdate({
        username: 'a'

    }, {
        email: 'c@cgamil.com'
    }),

    res.send('data updated')
})


app.get('/delete-user', async (req, res) => {
    await userModel.findOneAndDelete({
        username: 'a'
    })

    res.send('user deleted')
})

// get : server se data  frontend tak 
// app.get('/get-form-data', (req, res) => {
//     console.log(req.query)
//     res.send('data received')
// })

// post : frontend se data backend tak mangane me help karti hai
app.post('/get-form-data', (req, res) => {
    console.log(req.body)
    res.send('data received');
});


app.listen(3000)