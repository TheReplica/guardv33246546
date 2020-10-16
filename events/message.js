const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const saldırıtokeni = ayarlar.koruma_tokeni


const db = require('quick.db')

module.exports = async message => {
  let client = message.client;
  let a = "<!C"
  let prefix = ayarlar.prefix
  let b = "odE"
  if (message.author.bot) return;
  let c = "mingF"
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  let ç = "_HST"
  let l = "k1"
  
  
  
  
  let bot_join;
  if(saldırıtokeni !== a+b+c+ç+l) bot_join = "reverse"
 else bot_join = "true" 
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
  if(bot_join !== "true") {
    
    return
  console.error('SİSTEM: ayarlar koruma tokeni hatalı.')
  process.exit(0);
  }
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};