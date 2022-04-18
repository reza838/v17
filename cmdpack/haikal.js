/* 
Assalamualaikum
 
Info Sc :
• Base ; haikal
• Penyusun : haikal

[©] Tq To =>
• Allah swt
• My Ortu
• Adwajshing
• Baileys
• Whatsapp
• Kahfz
• Ridho
• Dhani
• Arifirazzaq
• AldiFauzi
• Mhakbarbar
• Nurutomo
• Dan All Creator Bot 
• All Partner

∆ Maaf Jika Banyak Error, Karena Saya Baru Belajar Buat Base
Belum Jauh Jauh Ini.

Folow My Sosialmedia :
 
 • Github : https://github.com/Haikalbotz
 • Youtibe : https://youtube.com/channel/UCYDZpsK1w7hWYInmyZowrUA
 • Instagram : @haikal_aja
 • Tiktok : @bot
 
#SupportCreatorBotWa
 
*/

//---------------- Bagian node_modules ---------------------------------------------------\

var {WAConnection,MessageType,Presence,MessageOptions,Mimetype,WALocationMessage,WA_MESSAGE_STUB_TYPES,WA_DEFAULT_EPHEMERAL,ReconnectMode,ProxyAgent,GroupSettingChange,waChatKey,mentionedJid,processTime,} = require("@adiwajshing/baileys")
var fs = require("fs")
var axios = require('axios')
var speed = require("performance-now")
var util = require('util')
var crypto = require('crypto')
var request = require('request')
var { exec, spawn } = require('child_process')
var fetch = require('node-fetch')
var moment = require('moment-timezone')
var ffmpeg = require('fluent-ffmpeg')
var { removeBackgroundFromImageFile } = require('remove.bg')
var brainly = require('brainly-scraper')

//----------------- Bagian Lib --------------------------------------------------------\

var { fetchJosn, kyun, fetchText } = require('../lib/fetcher')
var { color, bgcolor } = require('../lib/color.js')
var { forks, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('../lib/functions.js')


//------------- Bagian Tempatdata --------------------------------------------------------------------\

var user = JSON.parse(fs.readFileSync('./cmdpack/tempatdata/user/user.json'))
var _welkom = JSON.parse(fs.readFileSync('./cmdpack/tempatdata/welcome.json'))
var _antilink = JSON.parse(fs.readFileSync('./cmdpack/tempatdata/antilink.json'))
var _antivirtex = JSON.parse(fs.readFileSync('./cmdpack/tempatdata/antivirtex.json'))
var setting = JSON.parse(fs.readFileSync('./cmdpack/setting/setting.json'))
var Apikeynya = JSON.parse(fs.readFileSync('./cmdpack/setting/Apikeynya.json'))
var mess = JSON.parse(fs.readFileSync('./cmdpack/setting/mess.json'))

//-------- Bagian Setting Folder ------------------------\

ownernum = setting.ownernum
botname = setting.botname
ownername = setting.ownername
humankey = Apikeynya.humankey

//--------- Bagian Export Modules --------------------------------\

module.exports = haikal = async (haikal, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.blocked
 mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
var content = JSON.stringify(mek.message)
var from = mek.key.remoteJid
var { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var type = Object.keys(mek.message)[0]        
var cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		
//------------------------------------------------ Bagian Const虏 ------------------------------\\

var command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var q = args.join(' ')
var Verived = "0@s.whatsapp.net"
var txt = mek.message.conversation
var timestamp = speed();
var c = args.join(' ')
var botNumber = haikal.user.jid
var ownerNumber = [`${ownernum}@s.whatsapp.net`, `6289609927539@s.whatsapp.net`]
var isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
let senderr = mek.key.fromMe ? haikal.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : 
mek.key.remoteJid
var totalchat = await haikal.chats.all()
var groupMetadata = isGroup ? await haikal.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupDesc = isGroup ? groupMetadata.desc : ''
var groupOwner = isGroup ? groupMetadata.ownername : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isGroupAdmins = groupAdmins.includes(sender) || false
var conts = mek.key.fromMe ? haikal.user.jid : haikal.contacts[sender] || { notify: jid.replace(/@.+/, '') }
var pushname = mek.key.fromMe ? haikal.user.name : conts.notify || conts.vname || conts.name || '-'
var arg = budy.slice(command.length + 2, budy.length)
var isAntiLink = isGroup ? _antilink.includes(from) : false
var isWelkom = isGroup ? _welkom.includes(from) : false
var latensi = speed() - timestamp
var isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
var isOwner = ownerNumber.includes(sender)
var isMybot = isOwner || mek.key.fromMe
var reply = (teks) => {
haikal.sendMessage(from, teks, text, {quoted:ftrol})
}
var sendMess = (hehe, teks) => {
haikal.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? haikal.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : haikal.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
var sendWebp = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" 
${asw}`, (err) => {
fs.unlinkSync(filess)
if (err) return reply(`${err}`)
exec(`webpmux -set exif ./mediadata/data.exif ${asw} -o ${asw}`, async (error) => {
if (error) return reply(`${error}`)
haikal.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:false, quoted:mek})
fs.unlinkSync(asw)
});
});
});
}

//------------------------------ Function Antilink Dan Antivirtex ----------------------------------\\

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
fakelink(` *「 Group Link Terdeteksi 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
haikal.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS DI JADIKA ADMIN :)`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *Virtext Terdeteksi* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[MENG KICK]', 'red'), color('Received a virus text!', 'green'))
haikal.groupRemove(from, [sender])
}     


//======================== Bagian Jam ======================

let runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

var ase = new Date();
var jamm = ase.getHours();
switch (jamm) {
case 0: jamm = "Jangan gadang kak😁"; 
break;
case 1: jamm = "Jangan gadang kak😁";
break;
case 2: jamm = "Jangan gadang kak😁"; 
break;
case 3: jamm = "Jangan gadang kak😁"; 
break;
case 4: jamm = "Pagi 🌄 Jangan lupa sholat Subuh kak😇"; 
break;
case 5: jamm = "Selamat pagi🌅"; 
break;
case 6: jamm = "Selamat pagi 🌄"; 
break;
case 7: jamm = "Selamat pagi🌄"; 
break;
case 8: jamm = "Selamat pagi🌄"; 
break;
case 9: jamm = "Selamat pagi🌄"; 
break;
case 10: jamm = "Selamat pagi🌄"; 
break;
case 11: jamm = "Selamat siang🌞"; 
break;
case 12: jamm = "Siang 🌞 Jangan lupa sholat Zuhur kak😇"; 
break;
case 13: jamm = "Selamat siang🌞"; 
break;
case 14: jamm = "Selamat sore🌇"; 
break;
case 15: jamm = "Sore🌇Jangan lupa sholat Ashar kak😇"; 
break;
case 16: jamm = "Selamat sore🌇"; 
break;
case 17: jamm = "Selamat sore🌇"; 
break;
case 18: jamm = "Selamat malam🌙"; 
break;
case 19: jamm = "Malam 🌙 Jangan lupa sholat Isya kak😇"; 
break;
case 20: jamm = "Selamat malam🌙"; 
break;
case 21: jamm = "Selamat malam🌙"; 
break;
case 22: jamm = "Selamat malam 🌙"; 
break;
case 23: jamm = "Selamat malam🌙"; 
break;
}

var tampilUcapan = "" + jamm;
let locale = "id";
let d = new Date();
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
var weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d);
let week = d.toLocaleDateString(locale, { weekday: "long" });
let date = d.toLocaleDateString(locale, {
day: "numeric",
month: "long",
year: "numeric",
});
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')


//---------------------------- CONSOLE UPDATE USER --------------------------\\

//console update
setInterval(() => {
fs.writeFileSync('./cmdpack/tempatdata/User/user.json', JSON.stringify(global.db, null, 2))
console.log('Updating Database 😗 .. Nakano-Base')
}, 60 * 1000)

						
//----------------- Bagian Const Image -----------------------------------\

pporang = 'https://telegra.ph/file/17875e22f33e9ca27d8ed.jpg'
var ofrply = await getBuffer(pporang)
var thubb = fs.readFileSync('./cmdpack/image/thumb.jpg')
var kalimage = fs.readFileSync('./cmdpack/image/haikal.jpg')

//-------------- Bagian Mess ----------------------------------------------------------\

wait = mess.wait
sucsess = mess.Sucsess
error = mess.Error
sticker = mess.Stick
adminonly = mess.Adminmess
Grouponly = mess.Groupmess

//---------------------------------- Bagian Button --------------------------\\

const listmsg = (from, title, desc, list) => {
let po = haikal.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "NAKANO-BOT","footerText": ` _HELLO I'M NAKANO BOT NEW BASE_✋ 
*Bot Ini Menggunakan Base Baru, Jadi Maklum Jika Menu Sedikit Dan Banyak Error*
© ${week} ${weton} ${date}`,"listType": "SINGLE_SELECT","sections": list}}, {})
return haikal.relayWAMessage(po, {waitForAck: true})
}

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
haikal.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: fgif
})
}
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await haikal.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
haikal.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: ftrol,
contexInfo: kalimage
})
}

const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await haikal.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
haikal.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

but1 = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }, 
{ buttonId: `${prefix}command`, buttonText: { displayText: 'SIMPLE' }, type: 1 }
]


but2 = [
{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'ALLMENU' }, type: 1 }, 
{ buttonId: `${prefix}command`, buttonText: { displayText: 'COMMAND' }, type: 1 }
]

but3 = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
]


var menunya = `
👋 Hai Kak *${pushname}* ${tampilUcapan} Kak...


*Info Bot* :
🌐 Base : Haikal
💌 Creator : Haikal
👻 Nama Bot : ${botname}
🌀 Nama Owner : ${ownername}
💠 Libray : () Baileys @3.5.3
📱 Nomer Owner : ${ownernum}

*Indonesian Time Zone* :
🌏 Wib : ${wib}
🌏 Wit : ${wit}
🌏 Wita : ${wita}


*Hadist* :

يَا بَنِي آدَمَ قَدْ أَنْزَلْنَا عَلَيْكُمْ لِبَاسًا يُوَارِي سَوْآتِكُمْ وَرِيشًا

“Hai anak Adam, sesungguhnya Kami telah menurunkan 
kepadamu pakaian untuk menutup auratmu dan
pakaian indah untuk perhiasan” (QS. Al A’raf: 32)

©haikal ${date} ${week} - ${dateIslamic}
`



//---------- Bagian Fake虏 ---------------------------\\

faketeks = `©haikal - ${dateIslamic}`

var fakelink = (teks) => {
haikal.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hai Kak ${pushname} ${tampilUcapan}`,
"body": `${dateIslamic}`,
"mediaType": "10",
"mediaUrl": `https://youtube.com/channel/UCYDZpsK1w7hWYInmyZowrUA`,
"thumbnailUrl": "https://telegra.ph/file/ecac94e418534db656dd0.jpg",
"thumbnail": kalimage,
"sourceUrl": `https://youtube.com/channel/UCYDZpsK1w7hWYInmyZowrUA`,
},mentionedJid:[sender]}, quoted : mek})
};   

var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount: 2022,
status: 1,
surface : 1, 
message: `馃悾 JAM : ${time}`, //Ubah aja jadi nama kamu
thumbnail: thubb, //Gambarnye
sellerJid: '0@s.whatsapp.net' 
}
}
}                 

var fvid = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `Haikal`,
"h": `OWNER KU JELEK馃槃`,
'duration': '99999', 
'caption': `OWNER KU JELEK馃槃`,
'jpegThumbnail': thubb
}
}
}  

var ftok = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": thubb //Gambarnye
},
"title": `HAI馃憢 ${pushname}`, //Kasih namalu 
"description": `馃拃My Bot`, 
"currencyCode": "Rp",
"priceAmount1000": "1.00",
"retailerId": `HAI馃憢 ${pushname}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}


//--------------------------------- Connect 2 ----------------------------------------------\\

var sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 
0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
haikal.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
equest.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
haikal.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}   
						
haikal.updatePresence(from, Presence.recording)

//------------------------------ Bagian console -----------------------

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//------------------- Bagian Console In Logs Terminal Run ----------------------\\

//bagian console Command in terminal logs ( console pribadi =>
if (!isGroup && isCmd) console.log('=>[ CMD [=>', '[PRIBADI[ COMMAND [FROM]', time, 
color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
//args.sender.split('@')[0] EXEC => ${command}
/*
}
*/

//bagian console Command in terminal logs (console group => {
if (isCmd && isGroup) console.log('=>[ CMD [=>', '[GROUP[ COMMAND [FROM]', time, 
color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
//args.sendersplit('@')[0] EXEC => ${command}
/*
}
*/

//=========================== SWTCH IN COMMAND ======================================\\

switch(command) {
case 'menu':
menuku =`
*MENU*
`
sendButImage(from, menuku, `${menunya}`, kalimage, but2)
sound = fs.readFileSync('cmdpack/Whatsapp/audiovn/anyavn.mp3')
haikal.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break

case 'allmenu':
menusaya = `
Allmenu

☠︎︎ *GROUP Menu*
• _${prefix}antilink_
• _${prefix}welcome_
• _${prefix}antivirtex_
• _${prefix}group_
• _${prefix}linkgroup_
• _${prefix}promote_
• _${prefix}demote_
• _${prefix}add_
• _${prefix}kick_
• _${prefix}setpp_
• _${prefix}setdesc_
• _${prefix}setname_
• _${prefix}hidetag_

☠︎︎ *ISLAM Menu*
• _${prefix}alquran_
• _${prefix}asmaulhusna_
• _${prefix}alquranaudio_
• _${prefix}jadwalsholat_
• _${prefix}kisahnabi_
• _${prefix}listsurah_

`
sendButImage(from, menusaya, faketeks, kalimage, but1)
break

//------------------------- Bagian List Message --------------------------\\

case 'command':
case 'c':
list = []
listmenu = [`groupmenu`,`islammenu`,]
listmenuu = [`Group Menu 👥`,`Islam Menu 🌙`,]
nombor = 1
startnum = 0
for (let x of listmenu) {
const yy = {title: `${dateIslamic}` + nombor++,
rows: [
{
title: `${listmenuu[startnum++]}`,
description: `${dateIslamic}`,
rowId: `${prefix}${x}`
}
]
}
list.push(yy)
}
listmsg(from, `${tampilUcapan}`,   `Hai kak *${pushname} ini CommandNya`, list)
break
               

//--------------------------------- Bagian Command Menu ----------------------------

case 'groupmenu':
group = `
☠︎︎ *GROUP Menu*
• _${prefix}antilink_
• _${prefix}welcome_
• _${prefix}antivirtex_
• _${prefix}group_
• _${prefix}linkgroup_
• _${prefix}promote_
• _${prefix}demote_
• _${prefix}add_
• _${prefix}kick_
• _${prefix}setpp_
• _${prefix}setdesc_
• _${prefix}setname_
• _${prefix}hidetag_
`
sendButImage(from, group, faketeks, kalimage, but3)
break

case 'islammenu':
islam = `
☠︎︎ *ISLAM Menu*
• _${prefix}alquran_
• _${prefix}asmaulhusna_
• _${prefix}alquranaudio_
• _${prefix}jadwalsholat_
• _${prefix}kisahnabi_
• _${prefix}listsurah_
`
sendButImage(from, islam, faketeks, kalimage, but3)
break


//------------------- Bagian Group Menu ---------------------------\\

case 'welcome':
if (!isGroup) return reply(`${Grouponly}`)
if (args.length < 1) return reply(`Hai kak ${pushname}\nKetik .welcome on Untuk Mengaktifkan fitur welcome\nKetik .welcome of Untuk Menonaktifkan fitur welcome`)
if ((args[0]) === 'on') {
if (isWelkom) return reply(`WELCOME SUDAH AKTIF`)
_welkom.push(from)
fs.writeFileSync('./tempatdata/welcome.json', JSON.stringify(_welkom))
reply(`Selamat 🎉, Berhasil Mengaktifkan Fitur Welcome Di Group *${groupMetada.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return fakelink(`WELCOME SUDAH DI AKTIFKAN SEBELUMNYA`)
_welkom.splice(from, 1)
fs.writeFileSync('./tempatdata/welcome.json', JSON.stringify(_welkom))
reply(`Selamat 🎉, Berhasil Menonaktifkan Fitur Welcome Di Group *${groupMetada.subject}*`)
} else {
reply('Ketik On Untuk aktifkan Of Untul Menonaktifkan')
}
break
case 'antilink' :
haikal.updatePresence(from, Presence.recording)
if (!isGroup) return reply(`${Grouponly}`)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Sillahkan Kak Pilih Mode Antilinknya", faketeks, but, mek)
break
case 'antilinkon' :
haikal.updatePresence(from, Presence.recording)
if (!isGroup) return reply(`${Grouponly}`)
if (!isBotGroupAdmins) return reply(`${adminonly}`)
if (isAntiLink) return reply('Antilink Sudah Aktif')
_antilink.push(from)
fs.writeFileSync('./tempatdata/antilink.json', JSON.stringify(_antilink))
reply(`Selamat 🎉, Berhasil Mengaktifkan Fitur Antilink Di Group *${groupMetada.subject}*`)
break
case 'antilinkoff' :
haikal.updatePresence(from, Presence.recording)
if (!isGroup) return reply(`${Grouponly}`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin :)`)
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./tempatdata/antilink.json', JSON.stringify(_antilink))
reply(`Selamat 🎉, Berhasil Menonaktifkan Fitur Antilink Di Group *${groupMetada.subject}*`)
break
case 'antivirtex' :
haikal.updatePresence(from, Presence.recording)
if (!isGroup) return reply(`${Grouponly}`)
if (!isGroupAdmins) return reply(`${adminonly}`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin :)`)
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk mode antivirtex", faketeks, but, mek)
break
case 'antivirtexon' :
haikal.updatePresence(from, Presence.recording)
if (!isGroup) return reply(`${Grouponly}`)
if (!isGroupAdmins) return reply(`${adminonly}`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin :)`)
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./tempatdata/antivirtex.json', JSON.stringify(_antivirtex))
reply(`Selamat 🎉, Berhasil Mengaktifkan Fitur Antivirtex Di Group *${groupMetada.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(`${Grouponly}`)
if (!isGroupAdmins) return reply(`${adminonly}`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin :)`)
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./tempatdata/antivirtex.json', JSON.stringify(_antivirtex))
reply(`Selamat 🎉, Berhasil Menonaktifkan Fitur Antilink Di Group *${groupMetada.subject}*`)
break
case 'group' :
if (!isGroup) return reply(`${Grouponly}`)
if (!isGroupAdmins) return reply(`${adminonly}`)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!grouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
haikal.updatePresence(from, Presence.recording)
if (!isGroup) return reply(`${Grouponly}`)
if (!isGroupAdmins) return reply(`${adminonly}`)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`Selamat 🎉, Berhasil Membuka Group *${groupMetada.subject}*`)
haikal.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
haikal.updatePresence(from, Presence.recording)
if (!isGroup) return reply(`${Grouponly}`)
if (!isGroupAdmins) return reply(`${adminonly}`)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`Selamat 🎉, Berhasil Membuka Group *${groupMetada.subject}*`)
haikal.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
haikal.updatePresence(from, Presence.recording)
if (!isGroup) return reply(`${Grouponly}`)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await haikal.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
haikal.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
haikal.updatePresence(from, Presence.recording)
if (!isGroup) return reply(`${Grouponly}`)
if (!isGroupAdmins) return reply(`${adminonly}`)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :D :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
haikal.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
haikal.groupMakeAdmin(from, mentioned)
}
break


case 'owner':
case 'done':
vcard3 = 'BEGIN:VCARD\n' +
'VERSION:3.0\n' +
'N:Sy;Bot;;;\n' +
`FN:${ownername}\n` +
`item1.TEL;waid=${ownernum}:${ownernum}\n` +
`item1.X-ABLabel:💌 Creator\n` +
`item2.EMAIL;type=INTERNET:priadihaikal125@gmail.com\n` +
`item2.X-ABLabel:💌 Email\n` +
`item3.URL:https://youtube.com/c/MORISHIMA OFC/\n` +
`item3.X-ABLabel:💌Channel Owner\n` +
`item4.ADR:;;💌 Indonesia;;;;\n` +
`item4.X-ABADR:ac\n` +
`item4.X-ABLabel:💌 Country\n` +
`item5.X-ABLabel:💌 Neko Botz Owner\n` +
 'END:VCARD'.trim()
haikal.sendMessage(from, {displayName: `© Haikal`, vcard: vcard3}, contact, 
{ quoted: ftrol,
})
button = [
{buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1},
{buttonId: '.rulesbot', buttonText: {displayText: 'RULES'}, type: 1}
]
buttons = {
contentText: 'Nih Owner Ku Mau Tanya? Jangan Malu-Malu, Save Aja Kalo Boleh :)',
footerText: faketeks,
buttons: button,
headerType: 1
}
await haikal.sendMessage(from, buttons, MessageType.buttonsMessage,)
break


//-------------------------- Bagian Fitur Islam -----------------------------------------------\\
//---------------------------------------------------------------------------------------------------------\\

case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${humankey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `📖${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'alquran':
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${humankey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(ini_txt)
break
case 'alquranaudio':
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
reply('Sabar Sedang Proses...')
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${humankey}`)
await haikal.sendMessage(from, ini_buffer, audio, { quoted: fgif, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${humankey}`)
get_result = get_result.result
txt_nya = `💌 No : ${get_result.index}\n`
txt_nya += `📖 Latin: ${get_result.latin}\n`
txt_nya += `🌏 Arab : ${get_result.ar}\n`
txt_nya  += `🌏 Indonesia : ${get_result.id}\n`
txt_nya += `🌏 English : ${get_result.en}`
reply(txt_nya)
break
case 'kisahnabi':
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${humankey}`)
get_result = get_result.result
txt_nya = `💌 Name : ${get_result.name}\n`
txt_nya += `😇 Lahir : ${get_result.thn_kelahiran}\n`
txt_nya += `😇 Umur : ${get_result.age}\n`
txt_nya += `🌏 Tempat : ${get_result.place}\n`
txt_nya += `📖 Story : \n${get_result.story}`
reply(txt_nya)
break
case 'jadwalsholat':
haikal.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${humankey}`)
get_result = get_result.result
txt_nya = `🌏 Wilayah : ${get_result.wilayah}\n`
txt_nya += `💌 Tanggal : ${get_result.tanggal}\n`
txt_nya += `🍴 Sahur : ${get_result.sahur}\n`
txt_nya += `🎑 Imsak : ${get_result.imsak}\n`
txt_nya += `🌅 Subuh : ${get_result.subuh}\n`
txt_nya += `🌅 Terbit : ${get_result.terbit}\n`
txt_nya += `🌝 Dhuha : ${get_result.dhuha}\n`
txt_nya += `🌞 Dzuhur : ${get_result.dzuhur}\n`
txt_nya += `🌇 Ashar : ${get_result.ashar}\n`
txt_nya += `🌆 Maghrib : ${get_result.imsak}\n`
txt_nya += `🌃 Isya : ${get_result.isya}`
reply(txt_nya)
break

//-=================== AKHIR IN ALL FITUR ====================================\\

default:
if (budy.includes(`bot`)) {
kal = `Untuk Mengakses Bot Silakan ketik ${prefix}menu`
reply(kal)
}
if (budy.includes(`Bot`)) {
kal = `Untuk Mengakses Bot Silakan ketik ${prefix}menu`
reply(kal)
}
if (budy.includes(`haikal`)) {
kal = `Iya kak ${pushmame} Ada apa Panggil Owner saya?`
reply(kal)
}
if (budy.includes(`Haikal`)) {
kal = `Iya kak ${pushmame} Ada apa Panggil Owner saya?`
reply(kal)
}
if (isOwner) {
if (budy.startsWith('>')) {
 console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return haikal.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
} catch (err) {e = String(err)
reply(e)
}
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
}
}



                                                                               
