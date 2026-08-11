const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/vihangabot44/vihanga_md_bot/blob/main/images/file_000000006f7c820dafaebee302cc4607.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 VIHANGA-MD BOT Is Alive Now😍*",
BOT_OWNER: '94786053450',  // Replace with the owner's phone number



};
