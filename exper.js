const fetch = require('node-fetch');
const _ = require('lodash');
const axios = require('axios');
const jsonData = require('./json/song.json')



const urlroute2 = 'https://swapi.dev/api/planets';

let redditClient = process.env.CLIENT_ID;
let redditSecret = process.env.SECRET_ID;
const urlReddit = 'https://www.reddit.com/api/v1';


// fetch is a method that returns a promise that resolves to a Response object.
// fetch(urlroute2)
// .then(res => res.json())
// .then(json => console.log("Promise test:  ",json))
// .catch(err => {throw new Error(err)}) 



// console.log(jsonData.song);

// let tester = JSON.parse(jsonData.song);
// tester.sort();

// console.log(tester);


const ReqData = async () => {
try {
    const api_res = await fetch(urlroute2);
    const data = await api_res.json();
    
    // let manipulation = JSON.parse(data.results);
    let test = data.results;
    
    console.log('Fetch METH: ', test)
    
} catch (error) {}


}




const ReqDataAx = async () => {
    try {

    const api_res = await axios.get(urlroute2);
    const data = await api_res.data.results; 
    
    console.log('Axios METH: ', data)
    
    // let manipulation = JSON.parse(data);
    // let manipulation = JSON.parse(data);
    
    // console.log(manipulation)
    } catch(error){}
    
    }



ReqData();
// ReqDataAx();





