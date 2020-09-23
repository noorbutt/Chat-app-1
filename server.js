const express = require('express')
const path = require('path')


const app = express()
const http = require('http').createServer(app)


app.use(express.static(path.join(__dirname, 'public')))

 app.get('/',(req,res)=>{
   res.send('hello text')
 })


const PORT = process.env.PORT || 3000
http.listen(PORT,()=>{
    console.log('Server is running on port',PORT)
})



// socket

const io = require('socket.io')(http) 

 io.on('connection', socket =>{
   console.log('Connected Ready...')

   socket.on('message',(msg)=>{
   socket.broadcast.emit('message',msg)
   })
})


