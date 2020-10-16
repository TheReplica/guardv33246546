const Discord = require('discord.js');
const codeming = require('quick.db')
const moment = require("moment")
exports.run = async(client, message, args) => { 
  
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Bu komuta erişim sağlamak için '**ADMINISTRATOR**' yetkisine sahip olmalısın.")
  
let değer = args[0]  


if(!değer) return message.reply("Koruma sistemini aktive/deaktive etmek için **açık** veya **kapalı** yazmalısın.")  
if(değer !== "açık" && "kapalı") return message.reply("Koruma sistemini aktive/deaktive etmek için **açık** veya **kapalı** yazmalısın.")  


moment.locale("tr")  
let veri = await codeming.fetch(`reklamkoruma_${message.guild.id}`)
let date = moment(Date.now()).add(3, "hours").format("LLLL")  

if(değer === "açık") {
 
  if(veri) return message.reply(":x: **reklam-koruma** sistemi zaten aktif halde.")
  
 
  
  message.channel.send("**reklam-koruma** sistemi aktif hale getirildi.")
  message.guild.owner.send("**reklam-koruma** sistemi **"+message.author.username+"** tarafından **"+date+"** tarihinde **Aktif** hale getirildi.")
  
 codeming.set(`reklamkoruma_${message.guild.id}`, Date.now()) 
} else {
  let açılma = moment(veri).format("LLLL")
  if(!veri) return message.reply(":x: **reklam-koruma** sistemi zaten devre-dışı halde.")
    message.channel.send("**reklam-koruma** sistemi devre-dışı hale getirildi; En son **"+açılma+"** tarihinde aktif hale getirilmişti.")
  message.guild.owner.send(":warning: **reklam-koruma** sistemi **"+message.author.username+"** tarafından **"+date+"** tarihinde **Devre-dışı** hale getirildi.")

 codeming.delete(`reklam-koruma_${message.guild.id}`) 

} 
  
  
  
  
  
  
  
  
  // **CODEMİNG** \\
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'reklam-koruma',
  description: 'taslak', 
  usage: 'reklam-koruma'
};
