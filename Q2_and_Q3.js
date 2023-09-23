




//for writing a file
var fs=require('fs');
fs.writeFile('nodeJS_archietecture.txt','Node.js is a JavaScript-based platform that is mainly used to create I/O-intensive web applications such as chat apps, multimedia streaming sites, etc. It is built on Google Chrome’s V8 JavaScript engine. A web application is software that runs on a server and is rendered by a client browser that accesses all of the application’s resources through the internet.',
(data,err)=>{
    if(err)
    {
        console.log('error!');
    }
    console.log('done');
})






//For reading a file

var res=fs.readFileSync('nodeJS_archietecture.txt')
console.log('data:',res.toString());
