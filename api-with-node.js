const http = require('http')
const port=6969
const json =require('./new.json')

const server=http.createServer((req, res)=>{
if(req.url === 'restapi/something' && req.method === 200){
res.writeHead(200, {'Content-Type':'application/json'})
res.end(JSON.stringify(json))
}
else{
res.writeHead(404, 'not found')
}
})

server.listen(port,()=>{
console.log(`server running at:${'http://localhost:'}${port}${"/restapi/something"}`)
})
