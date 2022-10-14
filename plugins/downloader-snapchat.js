import { snapchat } from "social_media_downloader"
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)
if (!args[0]) throw 'Masukkan Link'
try {
let p = await snapchat(text)
throw p
} catch (e) {
    throw eror
    }
  }
handler.help = ['cocofun'].map(v => v + ' <url>')
handler.tags = ['premium']

handler.command = /^snap(chat|dl)$/i

handler.premium = true

export default handler
