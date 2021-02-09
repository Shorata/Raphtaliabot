const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hallo, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

Creator:

-❥ *${prefix}cooltext*
-❥ *${prefix}logopornhub*
-❥ *${prefix}sticker*
-❥ *${prefix}stickergif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}meme*
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*

18+:
-❥ *${prefix}nekopoi*

Fun Menu (Group):
-❥ *${prefix}tod*
-❥ *${prefix}katakasar*
	┷-❥ *${prefix}klasmen*

Download:
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytmp4*
-❥ *${prefix}facebook*

Primbon:
-❥ *${prefix}cekzodiak*
-❥ *${prefix}artinama*
-❥ *${prefix}cekjodoh*

Search Any:
-❥ *${prefix}dewabatch*
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}stalkig*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}play*
-❥ *${prefix}movie*
-❥ *${prefix}whatanime*

Random Teks:
-❥ *${prefix}motivasi*
-❥ *${prefix}howgay*
-❥ *${prefix}fakta*
-❥ *${prefix}pantun*
-❥ *${prefix}katabijak*
-❥ *${prefix}quote*
-❥ *${prefix}cerpen*
-❥ *${prefix}cersex*
-❥ *${prefix}puisi*

Random Images:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*

Lain-lain:
-❥ *${prefix}tts*
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*
-❥ *${prefix}ceklokasi*
-❥ *${prefix}shortlink*
-❥ *${prefix}bapakfont*
-❥ *${prefix}hilihfont*
-❥ *${prefix}grouplink*
-❥ *${prefix}revoke*

Tentang Bot:
-❥ *${prefix}tnc*
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*
-❥ *${prefix}join*
-❥ *${prefix}raphilink*
-❥ *${prefix}botinfo*

_-_-_-_-_-_-_-_-_-_-_-_-_-_
Owner Only :
-❥ *${prefix}ownermenu

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textOwner = () => {
    return `
Owner Menu 
-❥ *${prefix}ban* - banned
-❥ *${prefix}bc* - promosi
-❥ *${prefix}leaveall* - keluar semua grup
-❥ *${prefix}clearall* - hapus semua chat`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}mutegrup*
-❥ *${prefix}tagall*
-❥ *${prefix}setprofile*
-❥ *${prefix}del*
-❥ *${prefix}welcome*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
-❥ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Halo~, termakasih sudah menggunakan layanan kami^^ untuk mendukung kami, kalian tidak perlu mengeluarkan uang
cukup dengan mebaca artikel buatan kami itu sudah sangat membantu kami dalam mengembangkan situs berita anime di indonesia

Dan jangan lupa juga untuk mendukung sang pembuat/author bot ini!
Dia lah ArugaZ
Trakteer dia ^^ : https://trakteer.id/arugabot
Silakan Berikan traktir dia agar bot ini bisa lebih berkembang ^^`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textlink = () => {
    return `
Jika kalian ingin menanyakan sesuatu seputar berita yang saya bagikan
atau kalian ingin menanyakan sesuatu ke Master saya silakan klik link group
yang saya bagikan ini ^^
https://chat.whatsapp.com/IiyZV1cNtjZISDHYe5Z9lX`
}

exports.textinfo = () => {
    return `
    Saya biasanya bisa online dan melayani anda setiap hari tergantung kondisi internet di sini
    jika bot sangat lambat saat melayani anda mohon dimaklumi karena internet di daerah saya sangat buruk T^T 
    Jika kalian ingin saya online terus tanpa halangan dan dengan kecepatan internet yang bagus, silakan support saya dengan
    membaca artikel yang saya bagikan setiap hari ^^

    Informasi Tentang bot :
     Bot ini merupakan bot yang aslinya merupakan karya ArugaZ bersama teman temannya
    jika kalian ingin membuat bot kalian sendiri, silakan kunjungi Github ArugaZ
    https://github.com/ArugaZ/whatsapp-bot
    Namun kalian mungkin akan sedikit kebingungan jika ini pertama kalinya kalian melihat codingan Java scriot
    Tapi jika kalian punya tekad kuat kalian pasti bisa ^^ `
}