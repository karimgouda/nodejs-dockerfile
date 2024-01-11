const express = require('express');
 const PORT = 5000;

 const app = express();
 app.get('/',(req,res)=> res.send('<h1> ٍSimple Project as Node.Js !  </h1>'));

 app.listen(PORT , ()=> console.log(`app is up and running on port:${PORT}`));