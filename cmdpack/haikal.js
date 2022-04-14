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

const {WAConnection,MessageType,Presence,MessageOptions,Mimetype,WALocationMessage,WA_MESSAGE_STUB_TYPES,WA_DEFAULT_EPHEMERAL,ReconnectMode,ProxyAgent,GroupSettingChange,waChatKey,mentionedJid,processTime,} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')

//----------------- Bagian Lib --------------------------------------------------------\

const { fetchJosn, kyun, fetchText } = require('../lib/fetcher')
const { color, bgcolor } = require('../lib/color.js')
const { forks, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('../lib/functions.js')


//------------- Bagian Tempatdata --------------------------------------------------------------------\

const _welcome = JSON.parse(fs.readFileSync('./cmdpack/tempatdata/welcome.json'))
const _antilink = JSON.parse(fs.readFileSync('./cmdpack/tempatdata/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./cmdpack/tempatdata/antivirtex.json'))
const setting = JSON.parse(fs.readFileSync('./cmdpack/setting/setting.json'))
const ApikeyNya = JSON.parse(fs.readFileSync('./cmdpack/setting/Apikeynya.json'))
const mess = JSON.parse(fs.readFileSync('./cmdpack/setting/mess.json'))



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
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		
//------------------------------------------------ Bagian Const虏 ------------------------------\\

const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const Verived = "0@s.whatsapp.net"
const txt = mek.message.conversation
const timestamp = speed();
const c = args.join(' ')
const botNumber = haikal.user.jid
const ownerNumber = [`${ownernum}@s.whatsapp.net`, `6289609927539@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
let senderr = mek.key.fromMe ? haikal.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : 
mek.key.remoteJid
const totalchat = await haikal.chats.all()
const groupMetadata = isGroup ? await haikal.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.ownername : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = mek.key.fromMe ? haikal.user.jid : haikal.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? haikal.user.name : conts.notify || conts.vname || conts.name || '-'
const arg = budy.slice(command.length + 2, budy.length)
const isAntiLink = isGroup ? _antilink.includes(from) : false
const isWelkom = isGroup ? _welkom.includes(from) : false
const latensi = speed() - timestamp
const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
const isOwner = ownerNumber.includes(sender)
const isMybot = isOwner || mek.key.fromMe
const reply = (teks) => {
haikal.sendMessage(from, teks, text, {quoted:ftrol})
}
const sendMess = (hehe, teks) => {
haikal.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? haikal.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : haikal.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
const sendWebp = async(to, url) => {
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
const ofrply = await getBuffer(pporang)
const thubb = fs.readFileSync('./cmdpack/image/thumb.jpg')
const sekarang = new Date().getTime();


//--------------------------------- Connect 1 ----------------------------------------------\\

const sendStickerFromUrl = async(to, url) => {
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
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
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
						
		
		
//-------------- Bagian Const Mess ----------------------------------------------------------\

wait = mess.wait
sucsess = mess.Sucsess
error = mess.Error
sticker = mess.Stick
adminonly = mess.Adminmess
Grouponly = mess.Groupmess


//---------- Bagian Fake虏 ---------------------------\\

faketeks = '漏 haikal'

const fakelink = (teks) => {
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

const ftrol = {
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

const fvid = {
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

const ftok = {
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

//------------------------------ Bagian Color -----------------------

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, 
color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, 
color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))


//=========================== SWTCH IN COMMAND ======================================\\

switch(command) {
case 'menu':
reply('belom ada menu')
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



                                                                                
