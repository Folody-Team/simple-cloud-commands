import fetch from "node-fetch";
import { Client, Intents } from "discord.js"

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
});

client.login("TOKEN HERE").then(() => {
    console.log("Logged in!");
    client.user.setActivity("cloud commands example");
    client.on("messageCreate", async (message) => {
        if (message.content.startsWith("!")) {
            const args = message.content.slice(1).split(" ");
            const command = args.shift().toLowerCase();
            if (command) {
                fetch(`https://raw.githubusercontent.com/Folody-Team/simple-cloud-commands/commands/${command}.js`).then(res => {
                    if (res.status === 200) {
                        res.text().then(code => {
                            eval('(function() {' + code + '}())');
                        });
                    } else {
                        message.channel.send("Command not found!");
                    }
                });
            }
        }
    });

})

