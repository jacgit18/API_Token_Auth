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

function dictionaryCheck(dict) {
  let results = {}; // can use array or something else
  let currKey = "";
   function recTraverse(dict) {
 
    Object.keys(dict).forEach(key => {
  // array would be considered object
      let DataVal = dict[key];
      let objectType = typeof(DataVal) === 'object'
      let booleanType = typeof(DataVal) === 'boolean'
      let stringType = typeof(DataVal) === 'string'
      let numberType = typeof(DataVal) === 'number'

    // typeof(DataVal) === "string" ? "string" : "number"

      if (objectType) {
  // do something then pass current obj recursively  
        results[dict] = DataVal
        recTraverse(dict[key]);
      } else if(booleanType|| stringType || numberType) {
       // do other things then check next key  
       if(stringType) console.log(key)

      }
    });
  }
   recTraverse(dict);
  return results;
}




//CRUD

// const ReqData = () =>{
//    return 
   app.get('/test', async (request, response) => {
  try{
   const api_res = await fetch(urlroute2);
   const data = await api_res.json(); 
  // Data doesnt render in browers 
  //  const api_res = await axios.get(urlroute2);
  //  const data = await api_res; 
  //  console.log(data.data)

    let options = {
      success: true,
    status: api_res.status,
    statusText: api_res.statusText
    }

   response.send(data.results)
  } catch (e) {

  }
 

});

// }

// let test = ReqData();
// console.log(test)

module.exports = app

