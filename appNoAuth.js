import fetch from "node-fetch";
import _ from "lodash";
import axios from "axios";
import express from "express";
import jsonData from './json/song.json';
import cors from "cors";


const app = express();
app.use(cors());

const apiFullUrlWithEndpoint = 'https://swapi.dev/api/planets';




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





