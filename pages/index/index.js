var langFrom = ['en', 'zh', 'fra', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'slo','th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'];

var langTo = ['en', 'zh', 'fra', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'slo','th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'];

Page({
  data: {
    arrayFrom: ['英语', '中文', '法语', '阿拉伯语', '爱沙尼亚语', '保加利亚语', '波兰语', '丹麦语', '德语', '俄语', '法语', '芬兰语', '韩语', '荷兰语', '捷克语', '罗马尼亚语', '葡萄牙语', '斯洛文尼亚语',
     '泰语', '文言文', '西班牙语', '希腊语', '匈牙利语', '意大利语', '粤语', '中文繁体', '越南语'],
    arrayTo: ['英语', '中文', '法语', '阿拉伯语', '爱沙尼亚语', '保加利亚语', '波兰语', '丹麦语', '德语', '俄语', '法语', '芬兰语', '韩语', '荷兰语', '捷克语', '罗马尼亚语', '葡萄牙语', '斯洛文尼亚语',
     '泰语', '文言文', '西班牙语', '希腊语', '匈牙利语', '意大利语', '粤语', '中文繁体', '越南语'],
    indexFrom: 1,
    indexTo: 0,
    sourceLan: "zh",
    targetLan: "en",
    sourceText: '',
    targetText: ''
  },


  changefrom: function(e) {
    console.log(langFrom[e.detail.value]);
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexFrom: e.detail.value,
      wordFrom: langFrom[e.detail.value]
    })
  },


  changeto: function(e) {
    console.log(langTo[e.detail.value]);
    this.setData({
      indexTo: e.detail.value,
      wordTo: langTo[e.detail.value]
    })  
    if(this.data.wordsTotranslate != "") {
      var baseUrl = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyAqyqMWOhUYGAkX1MR4lZp-SbbawoVPqjE&';
      var source = 'source=' + this.data.wordFrom + '&';
      var target = 'target=' + this.data.wordTo + '&';
      var query = 'q=' + encodeURI(this.data.wordsTotranslate)
      var url = baseUrl + screen + target + query;
      console.log('url: ' + url);
        if(this.data.wordFrom != this.data.wordTo && this.data.wordsTotranslate != "") {
          this.setData({
            loading: true
          })
          console.log("send");
          wx.request({
            url: url,
            header: {
              'content-type': 'application/json'
            },
            success: function(res) {
              console.log(res.data);
              target = res.data.translations[0].translatedText;
          }
        })
        setTimeout(() => (function(str, that) {
          //console.log("lala")
          if(str != "") {
          // console.log("yes");
            that.setData({
              loading: false,
              DisplayResult: "block",
              DisplayButton: "none",
              resultRords: str,
              src: "http://tts.baidu.com/text2audio?lan=" + that.data.wordTo + "&ie=UTF-8&text=" + str
            })
            if(that.data.wordTo == "zh" || that.data.wordTo == "en") {
              that.setData({
                DisplayAudio: "block"
              })
            }
            else {
              that.setData({
                DisplayAudio: "none"
              })         
            }
          } 
        })(target, this), 1000)
        }
        }
  },

  translate: function(e) {
    var baseUrl = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyAqyqMWOhUYGAkX1MR4lZp-SbbawoVPqjE&';
    var source = 'source=' + this.data.wordFrom + '&';
    var target = 'target=' + this.data.wordTo + '&';
    var query = 'q=' + encodeURI(this.data.wordsTotranslate)
    var url = baseUrl + source + target + query;
    console.log('url: ' + url);
    var that = this;
      wx.request({
        url: url,
        header: {
          'content-type': 'application/json'
        },
        success: function(res) {
          console.log(res.data);
          that.setData({target: res.data.data.translations[0].translatedText, display: 'block'});
       }
     })
  },

  onShareAppMessage: function () {
    return {
      title: '翻译助手',
      desc: '打开微信轻松翻译',
      path: '/pages/index/index'
    }
  },







})
