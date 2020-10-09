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

//適当な元画像から5枚のダミー画像を生成するサンプル
async function generateImages() {
    for (i = 1; i <= 34; i++) {
        let canvas = await createImageCanvas('./resources/images/ot.jpg')
        const color = getRandomColor()
        await fillCanvasWithColor(canvas, color)
        await addTextToCanvas(canvas, `その他ダミー画像_${i}`)
        await saveCanvasImage(canvas, `./outputs/ot_dummy_${i}.jpg`)
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
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
    ctx.fillRect(0, canvas.height - canvas.height / 4, canvas.width, canvas.width / 4)
    ctx.fillStyle = 'red'
    ctx.fillText(text, 10, canvas.height - canvas.height / 10)
}

async function fillCanvasWithColor(canvas, color) {
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

async function saveCanvasImage(canvas, saveFilePath) {
    let base64 = canvas.toDataURL("image/jpeg").replace(/^data:image\/jpeg;base64,/, "")
    fs.writeFile(saveFilePath, base64, 'base64', error => {
    })
    console.log(`saved : ${saveFilePath}`)
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},1)`;
};
