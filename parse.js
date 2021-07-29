'use strict';

const https = require('https');

for (let b = 30; b <= 40; b++) {
  for (let c = 40; c <= 80; c++) {
    const url = `https://streams.kpi.ua/video/webcam-b${b}-cam${c}.m3u8`;
    https.get(url, res => {
      if (res.statusCode === 200) {
        console.log(url);
      }
    });
  }
}
