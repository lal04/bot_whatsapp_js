const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('message_create', message => {
	console.log(message.body);
    if (message.body === 'Hola') {
		// send back "pong" to the chat the message was sent in
		//client.sendMessage(message.from, 'mundo');
        message.reply('como estas?');
	}
    
});


client.initialize();