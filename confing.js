const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,|| 
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/c2e4fe813f18339da904a.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*🙋🏼✨ Hey, User......!*💃 𝐐𝐔𝐄𝐄𝐍 𝐊𝐄𝐍𝐙𝐈 𝐌𝐃 🤍*🙋🏼✨ Hey, User......!* ╭─•••••••••••••••••••••••••◯> │🛟 *A MULTI DEVICE WHATSAPP BOT*╰─•••••••••••••••••••••••••◯",
};
