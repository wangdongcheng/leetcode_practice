"use strict";

const fs = require('fs')
const path = 'g:/My Documents/My Pictures/影像日记/photo_temp_pool/meta/';
// 异步打开文件
var buf = new Buffer.alloc(1024);

let arr = [];

let oldn = "",
    newn = "",
    tmp = "",
    date = "",
    time = "";
const model = "iPhone X";

fs.open(path + "meta.txt", 'r', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }
        console.log(bytes + "  字节被读取");

        // 仅输出读取的字节
        if (bytes > 0) {
            //  console.log(buf.slice(0, bytes).toString());
            arr = buf.slice(0, bytes).toString().split('\r\n');
            arr = arr.slice(1);

            arr.forEach(element => {
                if (element.length > 15) {
                    oldn = element.substr(1, 12);
                    tmp = element.substr(element.indexOf(",") + 2, 21);
                    newn = "";
                    for (let i = 0; i < tmp.length; i++) {
                        if ("0123456789:- ".indexOf(tmp.charAt(i)) !== -1) { // remove the invalid characters
                            newn += tmp.charAt(i);
                        }
                    }
                    date = newn.substr(0, 10).replace(/-/g, "");
                    time = newn.substr(11, 5).replace(":", "") + "00";
                    newn = date + "_" + time + "_" + oldn.replace("IMG_", "").replace(".MOV", "") + "_" + model + ".MOV";

                    fs.rename(path + oldn, path + newn, (error) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(oldn, "->", newn, "OK");
                        }
                    });
                }

            });
        }
    });
});
