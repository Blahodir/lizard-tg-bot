const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Вітаю в LizardOS! Я твій персональний менеджер.'));
bot.help((ctx) => ctx.reply('Надішліть мені текст, і я його запам’ятаю.'));

bot.on('text', (ctx) => {
    ctx.reply(`Завдання отримано: "${ctx.message.text}"`);
});

bot.launch();

// Плавна зупинка
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
