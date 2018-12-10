const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"


console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
});



		

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('Pong!');
  }
});

/*

client.on('message', message => {
    if(message.content.startsWith(prefix + 'new')) {
        let args = message.content.split(' ').slice(1).join(' ');
        let support = message.guild.roles.find("name","• Alpha » Support");
		let Admin = message.guild.roles.find("name","Support Team");
		
        let ticketsStation = message.guild.channels.find("name", "TICKETS");
        if(!args) {
            return message.channel.send('-new [سبب الشكوى]');
        };
		
		let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ share system ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**- A لطلب مساعدة السبورتات اختر**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- B لطلب مساعدة الأدمنية اختر**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha codes`)
        .setTimestamp()
    
    
        message.channel.sendEmbed(embed).then(msg => {
		msg.react('🇦').then( r => {
		msg.react('🇧')
		
		let helpsFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
        let helpapyFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
		
		let helps = msg.createReactionCollector(helpsFilter, { time: 20000});
        let helpa = msg.createReactionCollector(helpaFilter, { time: 20000});
           



})



helpa.on('collect', r => {
		   if(!ticketsStation) {
                message.guild.createChannel("support TICKETS", "category");
            };
                message.guild.createChannel(`ticket-${message.author.username}`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`
						لقد تم انشاء طلب مساعدتك

						اضغط ليحولك مباشرة
						[ ${ticket} ]
						
						System By Abokhalil.
						`);
                    ticket.setParent(ticketsStation);
                    ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed = new Discord.RichEmbed()
                                .setTitle('**تذكرة جديدة.**')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField('السبب', args)
                                .addField('صاحب التذكرة', message.author)
                                .addField('الروم', `<#${message.channel.id}>`);
 
                                ticket.sendEmbed(embed);
    if(message.content.startsWith(prefix + 'يغلق')) {
        if(!message.channel.name.startsWith("support ticket")) {
            return;
        };  
                            message.channel.delete();
message.channel.send('**لقد تم اغلاق هذا الطلب !**') .then((c) => {
                                    c.delete(4000);
                                })
                                   
                           
                        }
		
 
                    })
 
          
   



helps.on('collect', r => {
		   if(!ticketsStation) {
                message.guild.createChannel("support TICKETS", "category");
            };
                message.guild.createChannel(`ticket-${message.author.username}`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`
						لقد تم انشاء طلب مساعدتك

						اضغط ليحولك مباشرة
						[ ${ticket} ]
						
						System By Abokhalil.
						`);
                    ticket.setParent(ticketsStation);
                    ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed = new Discord.RichEmbed()
                                .setTitle('**تذكرة جديدة.**')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField('السبب', args)
                                .addField('صاحب التذكرة', message.author)
                                .addField('الروم', `<#${message.channel.id}>`);
 
                                ticket.sendEmbed(embed);
    if(message.content.startsWith(prefix + 'يغلق')) {
        if(!message.channel.name.startsWith("support ticket")) {
            return;
        };  
                            message.channel.delete();
message.channel.send('**لقد تم اغلاق هذا الطلب !**') .then((c) => {
                                    c.delete(4000);
                                })
                                   
                           
              }
        
    })	
         
        });
    
});    
    
	*/
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let support = message.guild.roles.find("name","• Alpha » Support");
	let Admin = message.guild.roles.find("name","• Alpha » Admin");
    let command = messageArray[0];
    let ticketsStation = message.guild.channels.find("name", "Support TICKETS");
	let ticketsStation2 = message.guild.channels.find("name", "Admin TICKETS");
    
    if (command === `${prefix}new`) {
		let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ share system ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**- A لطلب مساعدة السبورتات اختر**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- B لطلب مساعدة الأدمنية اختر**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha codes`)
        .setTimestamp()
    
    
        message.channel.sendEmbed(embed).then(msg => {
    msg.delete(20000);
            msg.react('🇦').then( r => {
                msg.react('🇧')

    
                
                    // 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳
    
            let suphelpFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
            let adminjsFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;

    
    
            let suphelp = msg.createReactionCollector(suphelpFilter, { time: 20000});
            let adhelp = msg.createReactionCollector(adminjsFilter, { time: 20000});
            
              
 
    
            adhelp.on('collect', r => {
				if(!ticketsStation2) {
                message.guild.createChannel("ADMIN TICKETS", "category");
            };
       message.guild.createChannel(`ticket-${message.author.username}`, "text").then(ticket => {
                        message.channel.send(`
لقد تم انشاء طلب مساعدتك**

		اضغط ليحولك مباشرة
				[ ${ticket} ]
						
		System By Abokhalil.
						**
						`);
 ticket.setParent(ticketsStation2);
 ticketsStation2.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(Admin.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed2 = new Discord.RichEmbed()
                                .setTitle('Help System By Abokhalil')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
								.addField('**تم إنشاء طلب مساعدة الأدمنية**', "=-=-=-=-=-=-=-=-=-")
								.addField('**يرجى الإنتظار إلى حين يتم الرد عليك**', "=-=-=-=-=-=-=-=-=-")
                                .addField('**تم طلب المساعدة بواسطة**', message.author)
 
                                ticket.sendEmbed(embed2);
                }) .catch();

	 })            

             suphelp.on('collect', r => {
                 
if(!ticketsStation) {
                message.guild.createChannel("Support TICKETS", "category");
            };
message.guild.createChannel(`ticket-${message.author.username}`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`
لقد تم انشاء طلب مساعدتك**

		اضغط ليحولك مباشرة
				[ ${ticket} ]
						
		System By Abokhalil.
						**
						`);
 ticket.setParent(ticketsStation);
 ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed2 = new Discord.RichEmbed()
                                .setTitle('Help System By Abokhalil')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
								.addField('**تم إنشاء طلب مساعدة السبورت**', "=-=-=-=-=-=-=-=-=-")
								.addField('**يرجى الإنتظار إلى حين يتم الرد عليك**', "=-=-=-=-=-=-=-=-=-")
                                .addField('**تم طلب المساعدة بواسطة**', message.author)
 
                                ticket.sendEmbed(embed2);
                }) .catch();			
			
             })
        
    })	
         
        });
    }
	
});


client.on('message', message => {
	let channel = message.client.channels;
    if(message.content.startsWith(prefix + 'يغلق')) {
        if(!message.channel.name.startsWith("ticket")) {
            return;
        };  
                let embed = new Discord.RichEmbed()
                    .setAuthor("[Yes] or [No]  |هل انت متأكد من اغلاق هذه التذكرة ؟")
                    .setColor("RANDOM");
                    message.channel.sendEmbed(embed) .then(del => {
 
                   
                        const filter = msg => msg.content.startsWith(prefix + 'Yes');
                        message.channel.awaitMessages(response => response.content === prefix + 'Yes', {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                        })
                        .then((collect) => {
                            message.channel.delete();
							channel.delete()
                        }) .catch(() => {
                            del.delete()
                                .then(message.channel.send('**سوف يتم حذف الروم بعد 10 ثواني**')) .then((c) => {
                                    c.delete(10000);
                                })
                                  
                           
                        })
 
 
                    })
 
 
           
    }
});





client.login(process.env.BOT_TOKEN);
