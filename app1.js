import express from "express";
import jwt from "jsonwebtoken";
import fetch from "node-fetch";
import _ from "lodash";
import axios from "axios";
import cors from "cors";
// const bodyParser = require('body-parser');
import request from 'request';
import needle from 'needle';


const app = express();

app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.json()); // not needed

const urlReddit = "https://www.reddit.com/api/v1";


// var messages = [{user: "Jim", text: "yes"}, {user: "Jim" , text: "messages"}];
// var users = [{userName: "Jim", password: "1"}];

// makes it easier to export out
const routes = (app) => {
  app
    .route("/test")

    .get((req, res) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
    });

  // .get((req, res, next) => {

  // })
};

// app.route('/test2', (req, res) => {
//   const api_res = await fetch(urlReddit);
//   const data = await api_res.json();

// })



const options = {
  method: 'POST',
  url: 'https://www.reddit.com/api/v1/access_token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: {
    grant_type: 'password',
    username: 'jacreddit18',
    password: process.env.PASSWORD,
    client_id:  process.env.CLIENT_ID,
    client_secret: process.env.SECRET_ID,
    redirect_uri: 'https://www.linkedin.com/in/joshua-carpentier/',
  }

}

// axios.request(options).then(function (response) {
//     console.log("SUCCESS ",response.data);
//   }).catch(function (err) {
//     console.error('ERROR ',err)
//   })
  

// const auths = request.get(urlReddit, (err, response) =>{

// }).auth(process.env.CLIENT_ID, process.env.SECRET_ID);


//  const data = {
//       grant_type: 'password',
//       username: 'jacreddit18',
//       password: process.env.PASSWORD,
//     }
  

//  const headers = {'User-Agent':'MyAPI/0.0.1'}


// audience: 'https://www.reddit.com/api/v1'



// app.post(urlReddit, auths, data, headers);/
  

// let option = { username: process.env.CLIENT_ID, password: process.env.SECRET_ID };
// const test = needle.get(urlReddit, option, (err, resp, body) => {
//    // Whatever
// });

// console.log(test);


const tok = 'https://www.reddit.com/api/v1/access_token';


const token = app.post(tok, (req, res) => {

//   const head = {'content-type': 'application/x-www-form-urlencoded'};
//   req.header('Authorization');
  const token = req.header(process.env.CLIENT_ID, process.env.SECRET_ID);
  const userData = {
    'grant_type': 'password',
    'username':'jacreddit18',
    'password': process.env.PASSWORD
    }

    const headers = {'User-Agent':'MyAPI/0.0.1'}

  const userId = jwt.decode(token);
  // const user = users[userId];

// res.send();

// res = req.post(tokengetter, token, userData, headers);
res.json()

})

console.log(token)






// app.get('/messages', (req, res) => {
//     res.send(messages);
// });

// app.get('/messages/:id', (req, res) => {
//     res.send(messages[req.params.id]);
// });

// app.post('/messages', (req, res) => {
//     const token = req.header('Authorization');
//     const userId = jwt.decode(token, '123');
//     const user = users[userId];
//     let msg = {user: user.userName, text: req.body.message};
//     messages.push(msg);
//     res.json(msg);
// });


// app.post('/register', (req, res) => {
//     let registerData = req.body;
//     let newIndex = users.push(registerData);
//     let userId = newIndex - 1;

//     let token = jwt.sign(userId, '123');

//     res.json(token);
// });



export default app;
// export default routes;
