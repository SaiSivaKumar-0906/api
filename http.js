const express=require('express')
const put=express()
const port=6969

put.use(express.json());
put.use(express.urlencoded({extended: false}))

put.post('/one', (req, res)=>{
res.json(req.body.name)
})

put.listen(port, ()=>{
console.log('api')
})