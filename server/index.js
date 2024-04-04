// документация в socket.io

const express = require('express');
const http = require('http')
const {Server} = require('socket.io');
const cors = require('cors')

const route = require('./route')

const app = express()
app.use(route)

app.use(cors({origin: '*'}));

const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    

    io.on('disconnect', () => {
        console.log('disconnect')
    })
})

server.listen(3000, () => {
    console.log('server is running')
})





