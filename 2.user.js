// ==UserScript==
// @name         定时打开网页2
// @description  订阅自动打开网页
// @version      0.1.0
// @author       You
// @grant        GM_openInTab
// @background
// ==/UserScript==
const endTime = 1641398400000;  // 设定时间戳  1月8号 最新一次
const targetURL = 'https://taobao.com';
let nowTime = '';  // 当前时间戳
let timer = null;
let nowDate = new Date().getTime();

return new Promise((resolve, reject) => {
    timer = setInterval(function() {
        nowTime = new Date().getTime();
        // 倒计时结束
        console.log(nowTime, endTime)
        if(nowTime >= endTime) {
            GM_openInTab(targetURL, {active: true, insert: true, setParent: true});
            console.log('倒计时结束-- 新打印');
            
            resolve('倒计时结束-- 新打印');
            clearInterval(timer);
        }
    }, 1000);
    // Your code here...
});
