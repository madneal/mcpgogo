//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array: ['中文', '英语'],
    objectArray: [
      {
        id: 0,
        name: '中文'
      },
    ],
    index: 0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeword: function() {
    this.setData({
      buttonText: 'chagend button'
    })

  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.dir(userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShow: function () {
    console.log('I have showed')
  }
})
