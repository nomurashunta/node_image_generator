// import { loadImage } from 'canvas';
const { createCanvas, loadImage } = require('canvas')

const canvas = createCanvas(640, 480);  // 640x480の空のキャンバスを作る
// const canvas = document.querySelector('#canvas');  // 上の一行はブラウザの場合のコレに相当します

const ctx = canvas.getContext('2d');  // ここからはブラウザと共通

const image = await loadImage('./image.jpg');  // ここはURLを渡しても平気
ctx.drawImage(image, 0, 0, 640, 480);
ctx.fillText('hello world', 10, 10);  // (10, 10)の位置に"hello world"を書き込む
await image.save()
console.log('end');