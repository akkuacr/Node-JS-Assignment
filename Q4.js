var fs=require('fs');
fs.appendFile('nodeJS_archietecture.txt',"A typical web application consists of the following components:Client: A client refers to the user who interacts with the server by sending out requests.Server: The server is in charge of receiving client requests, performing appropriate tasks, and returning results to the clients. It serves as a bridge between the front-end and the stored data, allowing clients to perform operations on the data.Database: A database is where a web application’s data is stored. Depending on the client’s request, the data can be created, modified, and deleted.VPS servers offer base capabilities and environment to integrate Node.js apps with developer tools and APIs. Hostinger’s VPS gives you more control and flexibility over your hosting environment and offers you much more than what you are paying for. It has template build for Node.js – Ubuntu 22.04 with Node.js. This makes it super easy and swift to start. It also comes with OpenLiteSpeed server. Besides, they also offer CloudPanel template which allows Node.js applications creation, making it easier to start and manage Node.js apps. With a slick, easy-to-use interface, you can figure everything out quickly even with no experience with VPS. ",
(data,err)=>{
    if(err)
    {
        console.log('error!');
    }
    console.log('done');
})

var res=fs.readFileSync('nodeJS_archietecture.txt')
console.log('data:',res.toString());
