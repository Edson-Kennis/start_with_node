const express = require("express");
const app = express();

app.get("/", (require, response) => {
    response.send("Bem vindo ao guia do programador")
});
app.get("/blog/:bobo?", (require, response) => {
    response.send("Bem vindo ao meu blog")
});
app.get("/canal/youtube", (require, response) => {
    let canal = require.query["canal"];
    response.send(canal)
});
app.get("/ola/:nome", (require, response) => {
    response.send("oi! " + require.params.nome)
});

app.listen(4000,function(error) {
    if(error) {
        console.log('Ocorreu um erro');
    }else{
        console.log('servidor iniciando com sucesso!');
    }
})