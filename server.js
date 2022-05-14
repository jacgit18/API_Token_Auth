import app from './app';
// import app from './MainAppTest';
// import app from './appNoAuth';
// import app from './appPrev';
// import app from './appTokenPost';
// import app from './appUrlDestruct';



const port = process.env.PORT || 3000; 
// const port = process.env.PORT || 3001; 



app.listen(port, () => {
    console.log(`Starting server at ${port}`);
  });

