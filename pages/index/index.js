//index.js
//获取应用实例
var app = getApp()
console.log('app globalData.name: ' + app.globalData.name)
Page({
  data: {
    motto: 'Hello World11111111',
    userInfo: {
      nickName:'Neal Caffery',
      name: '123'
      // age: 10,
    },
    buttonText: 'button'
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
    console.log('onLoad')
    console.log('why i not get userInfo')
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
    alert('can i alert')
  }
})
