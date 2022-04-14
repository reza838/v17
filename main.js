const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success,
close } = require('./cmd/lib/functions')
const { color } = require('./cmd/lib/color')
const _welkom = JSON.parse(fs.readFileSync('./cmd/tempatdata/welcome.json'))
const versionWaweb = JSON.parse(fs.readFileSync('./cmd/Whtasapp/versionWaweb.json'))
version = versionWaweb.WawebVersion
require('./cmd/case/haikal.js')
nocache('./cmd/case/haikal.js', module => console.log(`${module} telah di update!`))
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await simple.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
haikal.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: mek,
contexInfo: ikal
})
}
const starts = async (haikal = new WAConnection()) => {
haikal.logger.level = 'warn'
haikal.version = `${version}`
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
console.log(color('└➤ | ─────────────'))
console.log(banner)
haikal.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Silahkan Scan Kode Qr Nya Kak...!'))
})
fs.existsSync('./sessionWaweb.json') && haikal.loadAuthInfo('./sessionWaweb.json')
haikal.on('connecting', () => {
start('2', 'Menghubungkan...')
})
haikal.on('open', () => {
success('2', 'Done Udah Nyambung')
})
await haikal.connect({timeoutMs: 30*1000})
fs.writeFileSync('./sessionWaweb.json', JSON.stringify(haikal.base64EncodedAuthInfo(), null, '\t'))
haikal.on('chat-update', async (message) => {
require('./cmd/case/haikal.js')(haikal, message, _welkom)
})

haikal.on('group-participants-update', async (anu) => {
try {
const isWelkom = _welkom.includes(anu.jid)
var mdata = await haikal.groupMetadata(anu.jid)
groupMet = await haikal.groupMetadata(anu.jid)
groupMembers = groupMet.participants
groupAdmins = getGroupAdmins(groupMembers)
mem = anu.participants[0]
console.log(anu)
try {
pp_user = await haikal.getProfilePicture(mem)
} catch (e) {
pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
}
try {
pp_grup = await haikal.getProfilePicture(anu.jid)
} catch (e) {
pp_grup =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
if (anu.action == "add" && mem.includes(haikal.user.jid)) {
haikal.sendMessage(anu.jid, "_*Makasih Udah Add Saya, Hay Semua Saya Adalah Z BOT Silahkan ketik .menu Untuk Memulai*_")
}
      
if (anu.action == 'add') {
num = anu.participants[0]
let v = haikal.contacts[num] || { notify: num.replace(/@.+/, "") }
anu_user = v.vname || v.notify || num.split("@")[0]
try {
ppUr = await haikal.getProfilePicture(num)
} catch {
ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
}
img = await getBuffer(ppUrl)
teks = `Hallo @${anu_user}\nSelamat Datang Di Group: ${mdata.subject}\n\n*INFO USER*\n馃崸 _*NAMA : @${anu_user}*_\n馃崸 _*NOMER : @${num.split('@')[0]}*_\n馃崸 _*UMUR : GUA BUKAN BAPAKNYA*_\n馃崸 _*KELAS : DAH PUNYA ANAK*_\n\n_*Semoga Hari虏 Mu Menyenangkan*_`
sendButImage(anu.jid, teks, `漏 Di Buat Oleh : Haikal Jelek`, img,but = [{buttonId:`hallo`, 
buttonText:{displayText: 'WELCOME馃憢!'},type:1}], options = {contextInfo: {mentionedJid: [num, number]},thumbnail: Buffer.alloc(0)})
} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppUrl = await haikal.getProfilePicture(num)
} catch {
ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
}
img = await getBuffer(ppUrl)
teks = `Bye 馃憢@${num.split('@')[0]}\nSemoga Amal IBdahnya Si Terima Di sisi Tuhan Yang Maha Esa Selamat Tinggal Di Group: ${mdata.subject}`
sendButImage(anu.jid, teks, `漏 Di Buat Oleh : HaikalJelek`, img,but= [{buttonId: `byebye`, buttonText: {displayText: `See You Broo?馃憢!`}, type: 1}], options = {contextInfo: {mentionedJid: [num, number]}, thumbnail: Buffer.alloc(0)})
} if (anu.action == "promote") {
const mdata = await haikal.groupMetadata(anu.jid)
anu_user = haikal.contacts[mem]
num = anu.participants[0]
try {
ppimg = await haikal.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(ppimg)
teks = `@${num.split("@")[0]} Telah dipromote`
haikal.sendMessage(mdata.id, teks, MessageType.text)
}

if (anu.action == "demote") {
anu_user = haikal.contacts[mem]
num = anu.participants[0]
const mdata = await haikal.groupMetadata(anu.jid)
try {
ppimg = await haikal.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
teks = `@${num.split("@")[0]} Telah didemote`
haikal.sendMessage(mdata.id, teks, MessageType.text)
}
} catch (e) {
console.log("Error : %s", color(e, "red"))
}
})
}



/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
console.log('Module', `'${module}'`, 'Sekarang Sedang Diawasi Untuk Perubahan')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
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