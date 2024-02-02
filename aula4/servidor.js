const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
    console.log('um usuario conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
})

aplicacao.use(express.static('public'));


servidorHttp.listen(1000);

// PARA O PROJETO FUNCIONAR:
// No terminal do projeto(VsCode) rodar o comando: 
// node --watch ./nome do arquivo backend
// Neste caso servidor.js

// Para usar a rede do local:
// 1 - Abrir cmd
// 2 - rodar ipconfig
// 3 - copiar o Endereço IPv4
// 4 - servidorHttp.listen(1000, 'colar o endereço ipv4 dentro das aspas');


