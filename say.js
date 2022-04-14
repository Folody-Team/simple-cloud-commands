const text = args.slice().join("");
if(text.includes("@everyone" || "@here")) return message.reply("Please don't ping everyone");
message.reply(`Say: ${text}`);
