const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
client.queue = new Map()
const chalk = require('chalk');
const fs = require('fs');
const Jimp = require('jimp');
const db = require('quick.db');
const Canvas = require('canvas')
const ms = require('parse-ms')
const moment = require('moment');
const saldırıtokeni = ayarlar.koruma_tokeni
require('./util/eventLoader')(client);

///////////
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200)
  //response.sendFile(path.join(__dirname+'/index.html'))
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://boşyapı.glitch.me/`);
}, 10000);
///////////

  let a = "<!C"
  let b = "odE"
var prefix = ayarlar.prefix;
  let ç = "_HST"
  let l = "k1"
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

  let c = "mingF"

  let bot_join;
  if(saldırıtokeni !== a+b+c+ç+l) bot_join = "reverse"
 else bot_join = "true" 

  if(bot_join !== "true") {
   
    console.error('SİSTEM: ayarlar koruma tokeni hatalı.')
   process.exit(0);
  } else {
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  console.error(`CE | ${files.length} Adet komut bot'a doldurulacak!`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
  }


client.on("guildMemberAdd", async (codeming) => {
  
let ce = await db.fetch(`bot-koruma_${codeming.guild.id}`)  
if(!ce) return   
  
if(!codeming.user.bot) return   
  
codeming.guild.ban(codeming, 2)  

let log = await db.fetch(`log_${codeming.guild.id}`)  
  
if(log) {  
 client.channels.get(log).send("**"+codeming.username+"** adlı **BOT** sunucuya giriş sağlamaya çalıştı.Ancak koruma engeline takıldı.")   
}

})


client.on("channelDelete", async(codeming) => {
let veri = await db.fetch(`kanalkoruma_${codeming.guild.id}`)
if(!veri) return
let entry = await codeming.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
let user = client.users.get(entry.executor.id)

if(user.id === codeming.guild.owner.id) return
if(user.id === client.user.id) return  
  
codeming.guild.createChannel(codeming.name, {type: codeming.type, parent: codeming.parentID, userLimit: codeming.userLimit, topic: codeming.topic, position: codeming.position})
  
let member = codeming.guild.members.get(user.id)  

member.roles.forEach(ce => {
member.removeRole(ce)    
}) 
let log = await db.fetch(`log_${codeming.guild.id}`)  

if(log) {  
 client.channels.get(log).send(":warning: **"+user.username+"**,**"+codeming.name+"** Adlı kanalı silmeye çalıştı.Silinen kanal onarıldı! Ve kullanıcının tüm rolleri alındı.")   
} 
  
  
});

client.on("channelCreate", async(codeming) => {
if(!codeming.guild) return
  let veri = await db.fetch(`kanalkoruma_${codeming.guild.id}`)
if(!veri) return
let entry = await codeming.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first())
let user = client.users.get(entry.executor.id)

if(user.id === codeming.guild.owner.id) return
if(user.id === client.user.id) return  
  
codeming.delete()
  
let member = codeming.guild.members.get(user.id)  

member.roles.forEach(ce => {
member.removeRole(ce)    
}) 
let log = await db.fetch(`log_${codeming.guild.id}`)  

if(log) {  
 client.channels.get(log).send(":warning: **"+user.username+"**,**"+codeming.name+"** Adlı kanalı açmaya çalıştı.Açılan kanal silindi! Ve kullanıcının tüm rolleri alındı.")   
} 
  
  
});







//-----------------------------------------------Reklam Engel

client.on("message",async(codeming) => {
  
if(!codeming.guild) return  
  
let veri = await db.fetch(`reklam-koruma_${codeming.guild.id}`)  
if(!veri) return  
 
if(codeming.member.hasPermission("ADMINISTRATOR"))  return   
if(codeming.author.bot) return  
  
let links = [
    "https://", 
    "discord.gg/",  
    ".org", 
    ".cf", 
    ".tk", 
    ".xyz", 
    "c0m",
    "com"
] 

if(!codeming.content.includes(links)) return  
  
codeming.delete() 
  
let rol =codeming.guild.roles.find(s => s.name === "Susturuldu")  

if(rol) codeming.member.addRole(rol.id)
  
let log = await db.fetch(`log_${codeming.guild.id}`)  

if(log) {  
 client.channels.get(log).send(":warning: **"+codeming.author.username+"**,Link içeren bir mesaj göndermeye çalıştı! Mesaj içeriği: \n\n```"+codeming.content+"```")   
}  
})


//-------------------------------------------------Küfür Engel



client.on("message", message => {
  if (!message.guild) return;
  let küfürler = [
    "amk",
    "anani",
    "Anani",
    "Amk",
    "AMK",
    "oç",
    "ananı",
    "sik",
    "sikerim",
    "bacını",
    "anani",
    "bacini",
    "sıkerım",
    "orospi",
    "oçu",
    "Oç",
    "Ananı",
    "Sik",
    "Sikerim",
    "Bacını",
    "Cnani",
    "Bacini",
    "Sıkerım",
    "Orospi",
    "oçu",
    "gay",
    "piç",
    "pic",
    "pıc",
    "yavşak",
    "yavsak",
    "yarak",
    "yarrak",
    "yarag",
    "yarragim",
    "yarrağım",
    "amcık",
    "aspect",
    "göt",
    "totoş",
    "Oçu",
    "Gay",
    "Piç",
    "Pic",
    "Pıc",
    "Yavşak",
    "Yavsak",
    "Yarak",
    "Yarrak",
    "Yarag",
    "Yarragim",
    "Yarrağım",
    "Amcık",
    "Aspect",
    "Göt",
    "Totoş",
    "oc cocugu",
    "ananı sıkıyım",
"anani sikiyim",
"Ananı ıkıyım",
 "Oc cogugu",
"öç cocugu",
"amk salgı",
"amk salagı",
"amk evladı",
"amk cocugu",
"anan",
"baban",
"bacın",
"sikiyim",
"sıkıyım",
"Sikiyim",
"Sıkıyım",
"SİKİYİM",
"SIKIYIM",
"aq evladı",
"AQ evladı",
"Aq evladı",
"orospu cocugu",
 "orospu cogugu"
  ];
    if (küfürler.some(küfür => message.content.includes(küfür))) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
      message.delete();
      return message.channel
        .send(
          "Küfür etmemelisin " +
            "<@!"+message.author+">"
        )
        .then(a=>{
setTimeout(function(){
a.delete()
},6000)
})
    }
  }
});






//-------------------------------------------------Gelene DM atma

client.on('guildMemberAdd', member => {
    const batucode = new Discord.RichEmbed()
      .setColor("0x808080")
      .addField('Aramıza, hoşgeldin!',':tada: :wave:')
      .addField('Botunu buradan ekle', '<#760849290678763570>')
      .addField('Kanalları görmek için rolünü al', '<#760975202124955715>')
      .addField('15 ücretsiz altyapı', '<#761359220544110602>')
      .setColor('RED')
    member.send(batucode);
  });



client.on("roleCreate", async(codeming) => {
let veri = await db.fetch(`rolkoruma_${codeming.guild.id}`)  
if(!veri) return  
let entry = await codeming.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first())
let user = client.users.get(entry.executor.id)
if(user.id === codeming.guild.owner.id) return
if(user.id === client.user.id) return
codeming.delete()


  
 let log = await db.fetch(`log_${codeming.guild.id}`)  

if(log) {  
 client.channels.get(log).send(":warning: **"+user.username+"**,**"+codeming.username+"** adlı rolü açmaya çalıştı.Rol silindi! ")   
}   
  
});



client.on("roleDelete", async(codeming) => {
let veri = await db.fetch(`rolkoruma_${codeming.guild.id}`)  
if(!veri) return  
let entry = await codeming.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first())
let user = client.users.get(entry.executor.id)
if(user.id === codeming.guild.owner.id) return
if(user.id === client.user.id) return

  codeming.guild.createRole({name: codeming.name, color: codeming.color, position: codeming.position, permissions: codeming.permissions})
 let log = await db.fetch(`log_${codeming.guild.id}`)  

if(log) {  
 client.channels.get(log).send(":warning: **"+user.username+"**,**"+codeming.name+"** adlı rolü silmeye çalıştı.Rol tekrar açıldı! ")   
}   
  
});







client.on("roleUpdate", async(oldRole, newRole) => {

  let codeming = await db.fetch(`ceyöneticiengel_${oldRole.guild.id}`)
  if(!codeming) return
  if (oldRole.hasPermission("ADMINISTRATOR"))  return
   if (!oldRole.hasPermission("ADMINISTRATOR")) 
    if (newRole.hasPermission("ADMINISTRATOR")) {
      
      
   newRole.setPermissions(oldRole.permissions)   
      
      
    } else {
      return
    }  
    
  
  
});


//////////////////////////

client.on("guildMemberAdd", async (codeming) => {
let data = await db.fetch(`sayac_${codeming.guild.id}`)  
 
if(!data) return
let kanalveri = data.kanal
let count = data.count  
let ksayı = codeming.guild.memberCount
let kanal = client.channels.get(kanalveri)
let sayı = count-ksayı
if(ksayı >= count) {
kanal.send("📥 **"+codeming.user.username+"** Adlı kullanıcı **"+codeming.guild.name+"** sunucumuza giriş yaptı! :tada: Sunucu sayaç olan **"+count+"** üye sayısına ulaştı.Sayaç durduruldu! `"+count+" / "+ksayı+"`")   
db.delete(`cesayaç_${codeming.guild.id}`)
  return
} else {
  
kanal.send("📥 **"+codeming.user.username+"** Adlı kullanıcı **"+codeming.guild.name+"** sunucumuza giriş yaptı! Şu anda **"+ksayı+"** üyeyiz,**"+count+"** üye olmamız için **"+sayı+"** üye kaldı!")   
   
}
  
})

client.on("guildMemberRemove", async (codeming) => {
let data = await db.fetch(`cesayaç_${codeming.guild.id}`)  
 
if(!data) return
let kanalveri = data.kanal
let count = data.count  
let ksayı = codeming.guild.memberCount
let kanal = client.channels.get(kanalveri)
let sayı = count-ksayı

kanal.send("📤 **"+codeming.user.username+"** Adlı kullanıcı **"+codeming.guild.name+"** sunucumuzdan çıkış yaptı! Şu anda **"+ksayı+"** üyeyiz,**"+count+"** üye olmamız için **"+sayı+"** üye kaldı!")   
   

  
})





////////////////////////
client.on('message', msg => {

if (!msg.content.startsWith(prefix)) {
    return;
  }

  });


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);