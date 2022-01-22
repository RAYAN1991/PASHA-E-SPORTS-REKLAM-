const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + "hostemprator");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

////Code Streming////
client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  ); 
  let statuses = [
    `Servers: ${client.guilds.size} Users: ${client.users.size}`,
    `By RAYAN 1991`,
    `PASHA E-SPORTS`
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "https://www.twitch.tv/faith"
    });
  }, 3000);
});

//////Code jwab//////
client.on("message", msg => {
  if (msg.content === "REKLAM") {
    msg.reply(
      "bomn freka"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "reklam") {
    msg.reply(
      "bomn freka"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "Reklam") {
    msg.reply(
      "bomn freka"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "Reklam?") {
    msg.reply(
      "bomn freka"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "سڵاو ڕیکلام ئەگوڕنەوە") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "ڕیکلام") {
    msg.reply(
      "بــنــێــرە بــۆ مـــن گـــیــان"
    );
  }
});
/////Reklam////
client.on('ready' , (waravc) => { 
var join = client.channels.get("933824495452565545")/// ئاید ڤۆیس
if (join) join.join()
})

client.on("message" , message => {
 
if(message.channel.type === 'rayan1991') {
 
if (message.content.startsWith("https://discord.gg/")) {
 
  message.author.send(`> https://discord.gg/4cDNd4ZJh8`)/// لینکە سیرڤەرە خۆت
 
  client.channels.get("930503993497616414").send(
`> Nerdra la layan <@${message.author.id}> 
${message.content}`)
}
    }
        })

client.login("OTM0MjQzOTgwMjc3ODYyNDQx.YetQgg.XolgO3Hb-_eTr3V2GYNUD_UB99g");

