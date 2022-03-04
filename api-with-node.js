const express=require('express')
const server=express()
const path=require('path')

server.use(express.json())

server.post('/data', (req, res)=>{
console.log(req.body)
})

// server.get('/',(req, res)=>{
// re.send('fine')
// })

const port=process.env.PORT || 9966

server.listen(
port,()=>{
console.log('server running at http://www.localhost:'+port)
})