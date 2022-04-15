const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const  { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success,
close } = require('./lib/functions.js')
const { color } = require('./lib/color.js')
const _welkom = JSON.parse(fs.readFileSync('./cmdpack/tempatdata/welcome.json'))
const { version } = require('./cmdpack/Whatsapp/version.js') 
require('./cmdpack/haikal.js')
nocache('./cmdpack/haikal.js', module => console.log(`${module} telah di update!`))
const starts = async (haikal = new WAConnection()) => {
haikal.logger.level = 'warn'
haikal.version = [2, 2142, 12]
haikal.browserDescription = [ 'Ikal', 'Browser', '3.0' ]
console.log(color('SCRIPT INI 100% AMAN'))
console.log(color('DALAM PENGAWASAN HAIKAL'))
console.log(color('┌─────── THX TO ────'))
console.log(color('│‣ ALLAH SWT'))
console.log(color('│‣ ADIWAJSHING'))
console.log(color('│‣ Baileys'))
console.log(color('│‣ Nurutomo'))
console.log(color('│‣ Mhankbarbar'))
console.log(color('│‣ haikal'))
console.log(color('│‣ Lolhuman'))
console.log(color('│‣ HydraThrow Team'))
console.log(color('└➤─────────────'))
console.log(banner)
haikal.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Silahkan Scan Kode Qr Nya Kak...!'))
})
fs.existsSync('./session/sessionWaweb.json') && haikal.loadAuthInfo('./session/sessionWaweb.json')
haikal.on('connecting', () => {
start('2', 'Menghubungkan...')
})
haikal.on('open', () => {
success('2', 'Done Udah Nyambung')
})
await haikal.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session/sessionWaweb.json', JSON.stringify(haikal.base64EncodedAuthInfo(), null, '\t'))
haikal.on('chat-update', async (mek) => {
require('./cmdpack/haikal.js')(haikal, mek)
})
}


function nocache(module, cb = () => { }) {
console.log('Module', `'${module}'`, 'Sekarang Sedang Diawasi Untuk Perubahan')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()
