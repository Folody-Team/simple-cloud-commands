const text = args.slice().join(" ");
if(text.includes("@everyone" || "@here")){
  return false;
}
message.reply(`Say: ${text}`);
