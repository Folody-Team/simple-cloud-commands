const text = args.slice().join(" ");
if(!text) return message.reply("Please enter something to say!")
if(text.includes("@everyone" || "@here")){
  return message.reply("Please don't ping everyone");
}
message.reply(`Say: ${text}`);
