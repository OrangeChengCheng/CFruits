//index.js
//获取应用实例
const app = getApp()

Page({

    data: {
        hello: '',
    },

    onLoad: function (e) {
        console.log("发起请求");
        var that = this;
        wx.request({
            url: 'http://orangeade.top:8080/hello', //仅为示例，并非真实的接口地址
            method: 'GET',
            header: {
                'content-type': 'application/json; charset=UTF-8; text/html' // 默认值
            },
            success (res) {
              console.log("success");
                console.log("请求成功");
                console.log(res.data);
                that.loadDataT(res.data);
            },
            fail (error) {
                console.log("error");
                console.log(error);
            }

        })
    },


    loadDataT: function (data) {
        this.setData({
            hello: data,
        })
    }


})
