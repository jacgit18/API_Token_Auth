import app from './app1';

const port = process.env.PORT || 3000; 



app.listen(port, () => {
    console.log(`Starting server at ${port}`);
  });

