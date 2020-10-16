const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let embed = new Discord.RichEmbed()
  .setTitle("**▬▬ | Botflix Guard Bot Yardım Menüsü | ▬▬**")
  .setImage("https://cdn.discordapp.com/attachments/761177291773706281/761321823236784128/ezgif-3-1f1a25c16548.gif")
  .addField("```g!log```", "Size gelmesi gereken uyarıların atılacağı kanalı ayarlar.")
  .addField("```g!reklam-koruma```","Sunucuda reklam yapılmasını engeller. Yapılan reklamları siler.")
  .addField("```g!rol-koruma```", "Yetkililerin veya saldırganların rol açmasını / silmesini engeller.Silinen rol tekrar açılır.")
  .addField("```g!küfür-engel```","Yazılı kanallarda küfür edilmesini engeller.")
  .addField("```g!rol-verme-engel```", "Sunucunuz da üyelerin/yetkililerin birine rol vermesini engeller.Verilen rol geri alınır.")
  .addField("```g!kanal-koruma```","Sunucudaki kanalların silinmesini veya yeni kanal oluşturulmasını engeller.")
  .addField("```g!say```","Sunucudaki üye ve bot sayısını gösterir.")
  .addField("```g!sil```","Belirttiğiniz sayı kadar mesajı siler.")
  .setColor("RED")
  .setThumbnail("https://cdn.discordapp.com/attachments/761177291773706281/761177369067126801/ezgif-3-fc53eab74d7c.gif")
  message.channel.send(embed)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['h','help'], 
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'taslak', 
  usage: 'yardım'
};
