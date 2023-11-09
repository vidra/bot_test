const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();
const fs = require('fs');
const port = 8080;

// replace the value below with the Telegram token you receive from <strong i="6">@BotFather</strong>
const token = '6136917496:AAHyI3XzIpw2wV3GrQo1BtBfZymqXqoX44Q';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Hi, Received your message');
});
// New code
app.get('/', function (req, res) {
    res.send('the REST endpoint test run!');
});

app.listen(port, function() {
  console.log('Server running at http://127.0.0.1:%s', port);
});
