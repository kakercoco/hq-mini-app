//app.js
App({
  onLaunch: function() {
    //调用登录接口
    wx.getUserInfo({
      success: function (res) {
        wx.setStorage({
          key: 'userInfo',
          data: res.userInfo ,
        }) 

      }
    })
   
  },

  
})
