const http = require('http');
const msg = 'server is runnig';
//create server
const server = http.createServer((req,res)=>{
    //console.log(req);
   // console.log(res);
   
  /* if (res.statusCode ==200){
  //  res.setHeader('content-type','text/html');
    res.write('Welcome to my server\n');
    
   res.write('iheb server \n')
   res.write(req.url);

   res.end();

   } else {
    console.log('Error')
   }*/
   if (req.url=='/home'){
    res.statusCode=200
    res.write('Welcome to home page');
    res.end();
   } else if(req.url=='/profile'){
    res.statusCode=200
    res.write('welcome to profile page');
    res.end();
   } else {
    res.statusCode=404
    res.write('<h1>Not Found <br> 404 ERROR </h1>  ');
    res.end();
   }
   
})

server.listen(5000, ()=>{
    console.log(msg)
});