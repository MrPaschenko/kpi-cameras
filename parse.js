'use strict';

const https = require('https');

for (let b = 0; b <= 25; b++) {
  for (let c = 0; c <= 15; c++) {
    const url = `https://streams.kpi.ua/video/webcam-b${b}-cam${c}.m3u8`;
    https.get(url, res => {
      if (res.statusCode === 200) {
        console.log(url);
      }
    });
  }
}
