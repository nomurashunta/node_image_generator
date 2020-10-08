const {registerFont, createCanvas, loadImage} = require('canvas')
const fs = require('fs');
const FONT_NAME = 'IPA Gothic'
registerFont('./resources/font/ipaexg.ttf', {family: FONT_NAME});

// -----------------参考-----------------------------------------
// https://blanktar.jp/blog/2020/05/nodejs-write-text-on-image
// https://note.crohaco.net/2018/js-async-await/
// https://qiita.com/PianoScoreJP/items/8b477a2bb09dd1db7826
// base64のトリムするやつが大事
// https://moji.or.jp/ipafont/
// -------------------------------------------------------------

generateImages()

async function generateImages() {
    for (i = 1; i <= 5; i++) {
        let canvas = await createImageCanvas('./resources/images/out.jpg')
        await addTextToCanvas(canvas, `ダミー画像_${i}`)
        await saveCanvasImage(canvas, `./outputs/dummyImage_${i}.jpg`)
    }
}

async function createImageCanvas(filePath) {
    const image = await loadImage(filePath)
    const canvas = createCanvas(image.width, image.height)
    const ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0, image.width, image.height);
    return canvas
}

async function addTextToCanvas(canvas, text) {
    const ctx = canvas.getContext('2d')
    ctx.font = `${canvas.width / 10}px ${FONT_NAME}`
    ctx.fillStyle = 'red'
    ctx.fillText(text, 10, canvas.height - canvas.height / 10)
}

async function saveCanvasImage(canvas, saveFilePath) {
    let base64 = canvas.toDataURL("image/jpeg").replace(/^data:image\/jpeg;base64,/, "")
    fs.writeFile(saveFilePath, base64, 'base64', error => {
    })
    console.log(`saved : ${saveFilePath}`)
}