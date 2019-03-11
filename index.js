const express = require('express');
const http=require('http');

const morgan =require('morgan');// we use morgan  for static webpage serve by server 
const hostname ='localhost';

const port= 3000;

const app =express();
app.use(morgan('dev'));// dev means develpoed tool

app.use(express.static(__dirname+ '/public'));//is code acees the page from public folder and used it



app.use((req,res,next)=>{
    console.log(req.header);
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.end('<html><body><h1> this an express server</h1></body></html>');
});
 const server =http.createServer(app);
 
 server.listen(port,hostname,()=>{
           console.log(`server running at http://${hostname}:${port}`);
 });