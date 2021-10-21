const websocket=require('ws')

const wss= new websocket.Server({port:8080});

wss.on("connection" , ws=>{
    console.log("new user connected :) ");

    ws.on("message",(data)=>{
    console.log(`user send message ${data} `);
    ws.send(data.toUpperCase());
})
ws.on("close",()=>{
    console.log("user disconnected :(");
})
})

