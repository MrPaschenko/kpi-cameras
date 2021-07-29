'use strict';

const fs = require('fs');

const array = {};

function makejson(string) {
  const array = string.split('\n');
  array.sort();
  return array;
}

const result = makejson('https://streams.kpi.ua/video/webcam-b1-cam12.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b1-cam7.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b1-cam5.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b1-cam10.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b1-cam8.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b7-cam9.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b7-cam3.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b7-cam5.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b1-cam14.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b1-cam13.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b1-cam4.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b1-cam6.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b1-cam11.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b1-cam9.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b1-cam1.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b4-cam1.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b4-cam6.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b4-cam3.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b1-cam3.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b6-cam3.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b6-cam4.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b7-cam8.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b7-cam6.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b6-cam2.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b7-cam2.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b7-cam11.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b7-cam4.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b7-cam7.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b7-cam10.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b12-cam4.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b12-cam3.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b14-cam1.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b12-cam1.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b12-cam2.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b16-cam1.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b17-cam1.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b18-cam3.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b18-cam2.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b4-cam2.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b4-cam5.m3u8\n' +
  'https://streams.kpi.ua/video/webcam-b6-cam1.m3u8\n');

console.log(result.join('\n'));
