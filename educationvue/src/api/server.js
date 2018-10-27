const express = require('express')
const app = express()
const fs = require('fs')
let bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.listen(8090)
app.get('/',function(req,res){
    res.send('首页')
})
app.get('/navData.json',function (req,res) {
    fs.readFile('./data/navData.json', 'utf-8' , (err,data) => {
        if (err) {
            res.send('文件读取失败')
        } else {
            if (JSON.parse(data).length == 0) {
                res.send('暂无数据')
            } else{
                res.send(JSON.parse(data))
            }
        }
    })
})
