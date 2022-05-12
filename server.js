import app from './app';

// const port = process.env.PORT || 3000; 
const port = process.env.PORT || 3001; 



app.listen(port, () => {
    console.log(`Starting server at ${port}`);
  });

