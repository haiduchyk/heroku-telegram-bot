const TelegramBot = require('node-telegram-bot-api');
const vm = require('vm');

const token = '775424871:AAGQNyjEDlkzflgQQD1Ovq4Y5iqdhqN_Ay0';

const bot = new TelegramBot(token, {polling: true});


bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `hello`);
});
