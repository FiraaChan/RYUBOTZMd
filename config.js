/**
   * Base Ori By : Dika Ardnt.
   * Recode By : RyukaTeam
   * Source Base : https://github.com/DikaArdnt
   * Source Recode : https://youtube.com/channel/UCjxavxEQa1Wd9A4J9tOmATA
   * No Enc? Ga Dijual Om 🤣
   * Gausah Reupload Kontol!
   * */

const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
    
    //Status Bot
    global.autoread = false // auto read pesan / message
    global.autorecording = true //status auto merekam ( auto record )
    global.autoketik = false //status auto mengetik (auto typing)
    global.available = false //status online (online)
    
    //===> GAUSAH DIUBAH
    global.owner = [`${setting.nomerowner}`,`${setting.nomerowner}`,`${setting.nomerowner}`]
    global.packname = `${setting.namaowner}`
    global.author = `© ${setting.namaowner}`
    global.sessionName = `${setting.sessionname}`
    global.donasi = `${setting.donasi}`
    global.prefa = ['','!','/','#','.']
    global.sp = '⭔'
    
    //===> EDIT SESUAI KEMAUANMU
    global.mess = {
    admin: '*LU ADMIN? 🤨*',
    botAdmin: '*BOT BUKAN ADMIN 😔*',
    owner: '*LU BUKAN OWNER GW 😠*',
    group: '*KHUSUS GROUP 😏*',
    private: '*KHUSUS PRIVATE CHAT*',
    bot: '*KHUSUS PENGGUNA NOMER BOT*',
    wait: '*SABAR SEDANG DI PROSES ...*',
    done: '*DONE NGAB 🤗*',
    }
    global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
    //===> INI JUGA GAUSAH DIUBAH
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
    })
