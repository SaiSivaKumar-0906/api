const express= require('express')
const server=express()
const port=5685


server.get('/json',
(req, res)=>{
res.send({
'✈':'aeroplane',
'🚕':'cab',
'🏚':'house'
})
}
)


server.listen(
port,()=>{
console.log('server running at http://www.localhost:'+port)
})