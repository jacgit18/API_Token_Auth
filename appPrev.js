import express from "express";
import jwt from "jsonwebtoken";
import {signJWT} from "./src/jwt";
import fetch from "node-fetch";
import _ from "lodash";
import axios from "axios";
import cors from "cors";



const app = express();
app.use(cors());





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


const tokenUrl = 'https://www.reddit.com/api/v1/access_token';
const urlReddit = "https://www.reddit.com/api/v1/me";
const urlReddit1 = "https://oauth.reddit.com/api/v1/me";



app.get("/test", async (req, res) => {

  try{
    const code = req.query.code;
    const encodedHeader = Buffer.from(`${process.env.CLIENT_ID}:${process.env.SECRET_ID}`).toString("base64");
    let response = await fetch(tokenUrl, {
      method: 'POST',
      body: `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/test/callback`,
      headers: {authorization: `Basic ${encodedHeader}`, 'Content-Type': 'application/x-www-form-urlencoded'}
    });

    let body = await response.json();
    response = await fetch(urlReddit1, {
      method: 'GET',
      headers: {authorization: `bearer ${body.access_token}`}

    });
    console.log(response);

    let user = await response.json();
    // await signInUser(user['id'],user['name'],body['access_token'], body['refresh_token']) // db store
 
    let tempDb = await {id: user['id'], name:user['name'], token:body['access_token'], refresh_token:body['refresh_token'] }


    // let token = await signJWT(user['id'])
     let token = await signJWT(tempDb)

    res.json({token})
    

 
  } catch(e){

    res.send({msg: 'Something wrong'})
  }
  

})




// const token = app.post(tokenUrl, (req, res) => {
//   const tokens = req.setHeader(process.env.CLIENT_ID, process.env.SECRET_ID);
//   const userData = {
//     'grant_type': 'password',
//     'username':process.env.USERNAME,
//     'password': process.env.PASSWORD
//     }

//   // const userId = jwt.decode(token);
//   // const user = users[userId];

// // res.send();

// // res = req.post(tokengetter, token, userData, headers);
// // res.json()

// })






// var config = {
//   method: 'get',
//   url: urlReddit,
//   headers: { 
//     'Content-Type': 'application/x-www-form-urlencoded', 
//     'Authorization': `Bearer ${token}`
//   },
//   data : {"body": raw}
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });



// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };



// app.get('/test', async (req, res) => {
//   await req.setHeader('content-type', 'application/x-www-form-urlencoded');
//   await req.setHeader('Authorization', `Bearer ${token}`); // after you have token
//   const request = await fetch(urlReddit, req.headers);
// //  const request = await axios.get(urlReddit, requestOptions)

// const data = await request.json();
// // const data = await request;


//   // body stuff if needed

//     res.send(data);
// });


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
