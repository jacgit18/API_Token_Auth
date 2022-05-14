// import express from 'express';
const express = require('express');
require('dotenv').config();
const fetch = require('node-fetch');
const _ = require('lodash');
const axios = require('axios');
// const cors = require('cors');

const app = express();

// app.use(cors());

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

const protocol = 'https://'; // 1
const sub_domain ='www.' // not required 2
const top_level_domain = '.io' // 4
const domain = `api.hatchways${top_level_domain}` // 3
const hostname = protocol + domain; // 1 + (3 + 4)
const path = '/assessment/blog/posts'; // 6
const queryString ='?tag=tech' // 7
const fullPath = path + queryString
const fragmentIdentifier = '' // 8
const urlroute = hostname + fullPath; // 
const urlroute2 = 'https://swapi.dev/api/planets';

// console.log(urlroute);

// const secret = process.env.SECRET
// const id = process.env.ID




//CRUD

// const ReqData = () =>{
//    return 
   app.get('/test', async (request, response) => {
  try{
   const api_res = await axios.get(urlroute2);
   const data = await api_res; 

    let options = {
      success: true,
    status: api_res.status,
    statusText: api_res.statusText
    }

   response.send(data)
  } catch (e) {

  }
 

});

// }

// let test = ReqData();
// console.log(test)

module.exports = app

