const {registerFont, createCanvas, loadImage} = require('canvas')
const fs = require('fs');
const FONT_NAME = 'IPA Gothic'
registerFont('./ipaexg.ttf', { family: FONT_NAME });

// https://blanktar.jp/blog/2020/05/nodejs-write-text-on-image
// https://note.crohaco.net/2018/js-async-await/
// https://qiita.com/PianoScoreJP/items/8b477a2bb09dd1db7826
// base64のトリムするやつが大事
// https://moji.or.jp/ipafont/

// Write "Awesome!"
// ctx.font = '30px Impact'
// ctx.rotate(0.1)
// ctx.fillText('Awesome!', 50, 100)

// Draw line under text
// var text = ctx.measureText('Awesome!')
// ctx.strokeStyle = 'rgba(0,0,0,0.5)'
// ctx.beginPath()
// ctx.lineTo(50, 102)
// ctx.lineTo(50 + text.width, 102)
// ctx.stroke()

// process.on('unhandledRejection', console.dir);

gen()


// // Draw cat with lime helmet
// loadImage('image.jpg').then((image) => {
//     const canvas = createCanvas(1000, 1000)
//     const ctx = canvas.getContext('2d')
//     ctx.drawImage(image, 0, 0, image.width, image.height);
//     ctx.font = '30px Impact'
// // ctx.rotate(0.1)
//     ctx.fillText('Awesome!', 50, 100)
//     // console.log( canvas.toDataURL() )
//     var base64 = canvas.toDataURL().replace(/^data:image\/png;base64,/, "")
//     fs.writeFile('output2.jpg', base64, 'base64', function(err){
//         // console.log(err);
//
//         // res.send(req.body.path+"書き込み完了");
//     })
//     // console.log('<img src="' + canvas.toDataURL() + '" />')
// })

async function gen() {
    const image = await loadImage('layout.jpg')
    const canvas = createCanvas(image.width, image.height)
    const ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0, image.width, image.height);
    ctx.font = `${image.width / 20}px ${FONT_NAME}`
    // ctx.rotate(0.1)
    ctx.fillText('間取り図ダミー画像', 10, image.height / 10)
    // console.log( canvas.toDataURL() )
    var base64 = canvas.toDataURL().replace(/^data:image\/png;base64,/, "")
    fs.writeFile('layout2.jpg', base64, 'base64', function (err) {
        // console.log(err);

        // res.send(req.body.path+"書き込み完了");
    })
    // console.log('<img src="' + canvas.toDataURL() + '" />')
}