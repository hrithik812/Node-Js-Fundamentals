//http module

const http=require('http');
const port=3000;

const server=http.createServer((req,res)=>{
        if(req.url=='/'){
       res.write('Hello Programmers');
       res.end();
        }else if(req.url=='/about'){
       res.write('How are you???');
       res.end();
       }else{
           res.write('Not found')
           res.end();
       }
});
//listening on event
// Internally when a req with port is requste then this happens internally
// server.on('connection',()=>{
//     console.log('Listening on port',port);

// })

server.listen(port);


