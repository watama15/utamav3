
let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner }) => {
    if (!args[0]) return m.reply('Link?')
    const sections = [
	{
	title: "đď¸ Audio",
	rows: [
	    {title: "Get Audio", rowId: `${usedPrefix}getaud ${args[0]} audio`},
	    {title: "Yt Audio", rowId: `${usedPrefix}yta ${args[0]}`},
	    {title: "Yt Audio Yes", rowId: `${usedPrefix}yta ${args[0]} yes`}
	]
    },
    {
	title: "đĽ Video",
	rows: [
	    {title: "Get Video 1080p", rowId: `${usedPrefix}getvid ${args[0]} 1080`},
{title: "Get Video 720p", rowId: `${usedPrefix}getvid ${args[0]} 720`},
{title: "Get Video 480p", rowId: `${usedPrefix}getvid ${args[0]} 480`},
{title: "Get Video 360p", rowId: `${usedPrefix}getvid ${args[0]} 360`},
{title: "Yt Mp4", rowId: `${usedPrefix}ytmp4 ${args[0]}`},
{title: "Yt Mp4 Yes", rowId: `${usedPrefix}ytmp4 ${args[0]} yes`}
	]
    },
   
]

const listMessage = {
  text: `${htjava}  á´ŠĘá´á´ęąá´ ęąá´Ęá´á´á´ yá´á´Ę á´á´á´ÉŞá´ á´yá´Šá´...`,
  footer: wm,
  title: " đĽ đŹđ§ đđ˘đŞđĄđđ˘đđđđĽ",
  buttonText: "Click Here !",
  sections
}

return conn.sendMessage(m.chat, listMessage, { quoted: fakes  })
}

handler.help = ['ytd']
handler.tags = ['premium']
handler.command = /^ytd(mp[34]|[av])?$/i
handler.exp = 3

handler.premium = true

export default handler
