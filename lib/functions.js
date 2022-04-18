/*

Assalamualaikum, hey this world is a funtion base bot wa,
Please don't change it if you don't understand the program language, because it causes the bot to crash

Please support me by: 
#follow my social media :)

• Github : https://github.com/Haikalbotz
• Youtube : https://youtube.com/c/Haikal Aja
• Instagram : @Haikal_Aja
   
*/
const fetch = require('node-fetch')
const axios = require('axios')
const CFonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')

const wait = async (media) => new Promise(async (resolve, reject) => {
const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
if (!response.ok) reject(`Gambar tidak ditemukan!`);
const result = await response.json()
try {
const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
let belief = () => similarity < 0.89 ? "Saya memiliki keyakinan rendah dalam hal ini : " : ""
let ecch = () => is_adult ? "Iya" : "Tidak"
resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
~> Ecchi : *${ecch()}*
~> Judul Jepang : *${title}*
~> Ejaan Judul : *${title_romaji}*
~> Judul Inggris : *${title_english}*
~> Episode : *${episode}*
~> Season  : *${season}*`});
} catch (e) {
console.log(e)
reject(`Saya tidak tau ini anime apa`)
}
})
const simih = async (text) => {
try {
const sami = await fetch(`https://simsumi.herokuapp.com/api?text=${text}`, {method: 'GET'})
const res = await sami.json()
return res.success
} catch {
return 'Sumpah :), Simi ga tau apa yang anda ngomong, bahasa alien yah kak?'
}
}
const h2k = (number) => {
var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}
const getBuffer = async (url, options) => {
try {
options ? options : {}
const res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}
}
const randomBytes = (length) => {
return Crypto.randomBytes(length)
}
const generateMessageID = () => {
return randomBytes(10).toString('hex').toUpperCase()
}
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
i.isAdmin ? admins.push(i.jid) : ''
}
return admins
}
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
"interval": 120,
"frames": [
"ANYA-BOT-LOAD🌸",
"ANYA-BOT-LOAD🌸🌸",
"ANYA-BOT-LOAD🌸🌸🌸",
"ANYA-BOT-LOAD🌸🌸🌸🌸",
"ANYA-BOT-LOAF🌸🌸🌸🌸🌸",
"ANYA-BOT-LOAF🌸🌸🌸🌸🌸🌸",
"ANYA-BOT-LOAD🌸🌸🌸🌸🌸",
"ANYA-BOT-LOAD🌸🌸🌸🌸",
"ANYA-BOT-LOAF🌸🌸🌸",
"ANYA-BOT-LOAD🌸🌸",
"ANYA-BOT-LOAD🌸"
]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)
const start = (id, text) => {
spins.add(id, {text: text})
/*setTimeout(() => {
spins.succeed('load-spin', {text: 'Suksess'})
}, Number(wait) * 1000)*/
}
const info = (id, text) => {
spins.update(id, {text: text})
}
const success = (id, text) => {
spins.succeed(id, {text: text})
}
const close = (id, text) => {
spins.fail(id, {text: text})
}
const banner = 
CFonts.say('Memuat Script...', {
font: 'console',
align: 'left',
gradient: ['blue', 'red']
})

/*
I Please Don't Change the Names Below
Appreciate the Maker
Respect people if you want to be respected

Please !! :)

Saya Mohon Jangan Mengganti Nama² 
Di Bawah
Hargai Creator Nya
Hargai Orang Jika Kamu Ingin Di Hargai
*/

CFonts.say('IKAL BASE', {
font: 'simple3d',
color :'system',
align: 'center',
gradient: ['white', 'blue']
})
CFonts.say(`WELCOME USER BOT\n━━━━━━━━━━━\n━━━━━━━━━━━\nHALO✋ KAK😸 WELCOME 🌈TO SCRIPT SIMPLE-BOT🐧\n━━━━━━━━━━━\nSEMOGA HARI² KAMU MENYENANGKAN💕😍\━━━━━━━━━━━\nBASE BYE : @ikalbase `, {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
})
  
const loger = 
CFonts.say('=============[ HAI USER ]============\nScript By : Haikal\nBase : Haikal-Base\nServer : Internasional-Net Baileys@3.5.3\n\n NB : DILARANG MENJUAL SCRIPT INI KARENA SCRIPT INI GRATIS BUAT SEMUA ORANG\n==========[ DI AWASI ]==========', {
font: 'console',
align: 'left',
gradient: ['blue', 'blue']
})  

module.exports = { wait, simih, getBuffer, h2k, generateMessageID, banner, loger, getGroupAdmins, getRandom, start, info, success, close }
