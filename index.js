const Eris = require('eris')
const keepAlive = require('./server.js')
const config = require('./config.json');
keepAlive()

const bot_yisedoiih = new Eris(config.yisedoiihh_token)
const bot_kanehiza = new Eris(config.kanehiza_token)
const bot_ganboou = new Eris(config.ganboou_token)

try { bot_yisedoiih.connect()  
} catch (e) { console.log('bot yisedoiih off') }

try { bot_kanehiza.connect()
} catch (e) { console.log('bot kanehiza off') }

try { bot_ganboou.connect()
} catch (e) { console.log('bot ganboou off') }

bot_yisedoiih.on("ready", () => {
  console.log("bot_yisedoiih Ready!");
});
bot_ganboou.on("ready", () => {
  console.log("bot_ganboou Ready!");
});
bot_ganboou.on("ready", () => {
  console.log("bot_ganboou Ready!");
});

process.on('uncaughtException', (error, origin) => {
})
process.on('unhandledRejection', (reason, promise) => {
})