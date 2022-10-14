import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `「 Anya Bot 𝗔𝗞𝗧𝗜𝗙 」`
await conn.reply(m.chat, info, m, { quoted: fakes, contextInfo: { externalAdReply: { showAdAttribution: true, title: botdate, body: bottime, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.customPrefix = /^(anya|bot|test)$/i
handler.command = new RegExp

export default handler
