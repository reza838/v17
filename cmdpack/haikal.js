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
 • Tiktok : bot
 
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

var _welcome = JSON.parse(fs.readFileSync('./cmdpack/tempatdata/welcome.json'))
var _antilink = JSON.parse(fs.readFileSync('./cmdpack/tempatdata/antilink.json'))
var _antivirtex = JSON.parse(fs.readFileSync('./cmdpack/tempatdata/antivirtex.json'))
var setting = JSON.parse(fs.readFileSync('./cmdpack/setting/setting.json'))
var ApikeyNya = JSON.parse(fs.readFileSync('./cmdpack/setting/Apikeynya.json'))
var mess = JSON.parse(fs.readFileSync('./cmdpack/setting/mess.json'))

//-------- Bagian Setting Folder ------------------------\

ownernum = setting.ownernum
botname = setting.botname
ownername = setting.ownername


//--------- Bagian Export Modules --------------------------------\

module.exports = haikal = async (haikal, mek, _welkom) => {
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
        

//----------------- Bagian Const Image -----------------------------------\

pporang = 'https://telegra.ph/file/17875e22f33e9ca27d8ed.jpg'
var ofrply = await getBuffer(pporang)
var thubb = fs.readFileSync('./cmdpack/image/thumb.jpg')

//-------------- Bagian Mess ----------------------------------------------------------\

wait = mess.wait
sucsess = mess.Sucsess
error = mess.Error
sticker = mess.Stick
adminonly = mess.Adminmess
Grouponly = mess.Groupmess

//---------- Bagian Fake虏 ---------------------------\\

faketeks = '漏 haikal'

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
						

//------------------------------ Bagian Conect3 -----------------------

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, 
color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, 
color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))


//=========================== SWTCH IN COMMAND ======================================\\

switch(command) {
case 'menu':
reply('BLOM ADA')
break





//-=================== AKHIR IN ALL FITUR ====================================\\

default:
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



                                                                                