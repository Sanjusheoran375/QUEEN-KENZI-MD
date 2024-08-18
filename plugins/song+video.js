const {cmd , commands} = require('../command')
const fg = require (`api-dylux`)
const yts = tequire (`yt-search`)

cmd({
    pattern: "song",
    desc: "Download songs",
    category: "download ",
    filename: __filename
    
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!p) return reply ("please give me url or titel")
const search = await yts(q)
const data = search.videos[o];
const url = data.url 

let dese = ` 💃𝐐𝐔𝐄𝐄𝐍 𝐊𝐄𝐍𝐙𝐈 𝐌𝐃 🤍 SONG DOWNLOADER 🧚  


ㄒ丨ㄒㄥ乇: ${data.title}
ᗪ乇丂匚尺丨卩ㄒ丨ㄖ几: {data.discription}
ㄒ丨爪乇: ${data.timestamp}
卂Ꮆㄖ: ${data.ago}
ᐯ丨乇山丂: ${data.views}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋɴᴇᴏɴᴄʏʙᴇʀꜱ •
`
await conn.sendMessage (from,{image:{url: data.thumbnail},caption:desc}{quoted:mek}),
    // download audio


let down = await fg.yta(url)
let downloadUrl = down.dl_url

// send audio + document message
await conn.sendMessage (form{audio:{url:downloadUrl}mimetype: "audio/mpeg",{quoted:mek});
await conn.sendMessage (form{document:{url:downloadUrl}mimetype: "audio/mpeg",fileName:data.title + "mp3",caption:"QUEEN KENZI AUDIO DOWNLOAD...🧚"},{quoted:mek});


                             

                            
}catch (e) {
console.log(e)
reply(`${e}`)
}
})

//============video_dl===============

cmd({
    pattern: "video",
    desc: "Download videos",
    category: "download ",
    filename: __filename
    
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!p) return reply ("please give me url or titel")
const search = await yts(q)
const data = search.videos[o];
const url = data.url 

let dese = ` 💃𝐐𝐔𝐄𝐄𝐍 𝐊𝐄𝐍𝐙𝐈 𝐌𝐃 🤍 VIDEO DOWNLOADER 🌟  


ㄒ丨ㄒㄥ乇: ${data.title}
ᗪ乇丂匚尺丨卩ㄒ丨ㄖ几: {data.discription}
ㄒ丨爪乇: ${data.timestamp}
卂Ꮆㄖ: ${data.ago}
ᐯ丨乇山丂: ${data.views}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋɴᴇᴏɴᴄʏʙᴇʀꜱ •
`
await conn.sendMessage (from,{image:{url: data.thumbnail},caption:desc}{quoted:mek}),
    // download video


let down = await fg.ytv(url)
let downloadUrl = down.dl_url

// send vudeo + document message
await conn.sendMessage (form{video:{url:downloadUrl}mimetype: {"video/mp4"},{quoted:mek});
await conn.sendMessage (form{document:{url:downloadUrl}mimetype: "video/mp4",fileName:data.title + "mp4",caption:"QUEEN KENZI VIDEO DOWNLOAD...🧚"},{quoted:mek});


                             

                            
}catch (e) {
console.log(e)
reply(`${e}`)
}
})
