const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var prefix = "test.";
    if (message.content === prefix+'ping') {
    	message.reply('pong');
  	}
    
    if(message.content === prefix+'time') {
        var currentdate = new Date(); 
var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        message.reply(datetime);
    }
    
    if(message.content === prefix+'hallo') {
        message.reply("hallo " + message.author.username + ",");
    }
    
    if(message.content === prefix+'last') {
        message.reply("hallo " + message.author.lastMessage.content + ",");
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
