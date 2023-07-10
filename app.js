const express = require("express");
const path = require("path");




//aca repasar midelware
const app = express();

//probando un get
app.get("/",(req, res) => {
    //res.send("Hello World");   //comentamos porque ya no lo usaremos con texto plano
    //res.sendFile("E:/NODE_JS/Back_1/index.html"); //esta no es una muy buena practica
    //necesitamos una forma automatica con el path como ?
    res.sendFile(path.join(__dirname + "/index.html"));
})

//aqui estara escuchando
app.listen(3000, () => {
    console.log("Server runnig on port", 3000, "Probando que sigue funcionando Nodemon");
});

//siempre hay que estar refrescando manualmente el servidor para eso es NODEMON