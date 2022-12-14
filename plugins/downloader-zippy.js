
import fetch from 'node-fetch'
import { szippydl } from '../lib/scrape.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
   let res = await szippydl(args[0])
   let done = `*title:* ${res.title}
*extension:* ${res.extension}
*filesize:* ${res.filesize}
*upload:* ${res.upload}
*link:* ${res.link}`
 if (res.link) return conn.send2ButtonDoc(m.chat, done, author, 'đ Get', usedPrefix + 'get ' + res.link, 'âšī¸ Menu', '.menu', fakes, adReply)
 else throw eror
}
handler.help = ['zippyshare'].map(v => v + ' <url>')
handler.tags = ['premium']

handler.command = /^(zippy(share)?(ser)?(sher)?(sare)?)$/i

handler.premium = true

export default handler
