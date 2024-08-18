const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID|| "sdZhDJjY#bM6l8gzdgvtO6shqyHJyJtCx3jqzH_ILNLKJKfe04ZM",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/c2e4fe813f18339da904a.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*🙋🏼✨ Hey, User......!*                   ____________________________                                    💃 𝐐𝐔𝐄𝐄𝐍 𝐊𝐄𝐍𝐙𝐈 𝐌𝐃 🤍╭─•••••••••••••••••••••••••◯                              │🛟                 *A MULTI DEVICE         WHATSAPP BOT*           ╰─•••••••••••••••••••••••••◯",
};
