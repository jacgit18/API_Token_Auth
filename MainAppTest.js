import express from "express";
import jwt from "jsonwebtoken";
import fetch from "node-fetch";
import _ from "lodash";
import axios from "axios";
import cors from "cors";



const app = express();
app.use(cors());



const tokenUrl = 'https://www.reddit.com/api/v1/access_token';
const urlReddit = "https://www.reddit.com/api/v1/me";
const urlReddit1 = "https://oauth.reddit.com/api/v1/me";


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

app.route().post((req, res)=>{ res.send('Post test no action')})

async function fetchAccessToken(data, setAccessToken, setRefreshToken) {
  return new Promise(async (resolve, reject)=>{
      // console.log('fetching access token', data)
      var url = 'https://www.reddit.com/api/v1/access_token'
      var form = new FormData()
      form.append('code', data.authorization_code)
      form.append('grant_type', 'authorization_code')
      form.append('redirect_uri', data.redirect_uri)

      
      if (!data.authorization_code) return

      // const basic = base64.encode(`${data.client_id}:`)
      const basic = base64.encode(data.client_id + ':')
      
      var options = {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `Basic ${basic}`,
              'User-Agent': 'reddit95'
          },
      }
      // console.log('auth', data.authorization_code, url, form, options)

      try {
          const access_response = await axios.post(url, form, options)
          // console.log('access response', access_response.data)
          setAccessToken(access_response.data.access_token)
          if (access_response.data.refresh_token) {
              setRefreshToken(access_response.data.refresh_token)
          }

          resolve()
          // goToFrontPage()
      } catch (e) {
          console.log('failed to fetch access token', e)
          // reject()
          resolve(fetchNewAccessToken(data, setAccessToken))
      }
  })   
}


export default app;
// export default routes;
