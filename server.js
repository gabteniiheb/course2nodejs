//const http = require('http');
//const msg = 'server is runnig';
//create server
//const server = http.createServer((req,res)=>{
    //console.log(req);
   // console.log(res);
   
  /* if (res.statusCode ==200){
  //  res.setHeader('content-type','text/html');
    res.write('Welcome to my server\n');
    
   res.write('iheb server \n')
   res.write(req.url);
   res.end()

   

   } else {
    console.log('Error')
   }*/
   /* if (req.url=='/home'){
    res.statusCode=200
    res.write('Welcome to home page');
    res.end();
   } else if(req.url=='/profile'){
    res.statusCode=200
    res.write('welcome to profile page');
    res.end();
   } else {
    res.statusCode=403
    res.write('<h1>Not Found <br> 404  </h1>  ');
    res.end();
   }
   
})

server.listen(5000, ()=>{
    console.log(msg);
}); */

// use of express js
const express = require('express');
var bodyParser = require('body-parser').urlencoded({extended:true})
const port =5000;

const app = express();
const path = require('path');
//app.use(express.json())
/*app.use((req,res,next)=>{
    console.log('welcome to home');
    next()
})
app.use((req,res)=>{
    console.log('welcome to profile');
    
})*/
/*app.use((req,res,next)=>{
    console.log('welcome to home');
    next()
},
(req,res,next)=>{
    console.log('welcome to about');
    next()
},
(req,res)=>{
    console.log('welcome to profile');
    
}
)*/
/*app.use('/',(req,res,next)=>{
    res.send('<h1>welcome to home</h1>');
})
app.use('/about',(req,res,next)=>{
    res.send('<h1>welcome to about</h1>');
})
app.use('/profile',(req,res,next)=>{
    res.send('<h1>welcome to profile</h1>');
})*/

/*app.all('/',(req,res,next)=>{
    res.redirect('/about');
    
})
app.all('/about',(req,res,next)=>{
    res.send('<h1>welcome to about</h1>');
})
app.all('/profile',(req,res,next)=>{
    res.send('<h1>welcome to profile</h1>');
})

*/
/*app.get('/',(req,res)=>{
    res.send('<form action="/form" method="POST"><input type="text" name="firstname" placeholder="fname"/> <input type="Number" name="age" placeholder="age"/> <button type="submit">Send</button></form>')
})
app.post('/form',bodyParser,(req,res)=>{
    res.send(req.body.firstname +''+Number(req.body.age));
})*/

/*app.get('/profile/:name/:id',bodyParser,(req,res)=>{
    res.send(req.params.name +''+req.params.id);
})
*/
/*app.get('/profile',(req,res)=>{
    res.send(req.query.name+' '+req.query.id);
})*/
app.get('/profile',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})



app.listen(port,()=>{
    console.log('Server is runig in port 5000');
})
