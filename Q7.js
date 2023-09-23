 var http=require('http');
 const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('<h1>I am good boy </h1>');
    }
    res.end();
 })

 server.listen(5000);
 console.log('Server done:');
