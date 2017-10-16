// pages/lockList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked:'',
    lockList:[
      {
        id:"001001",
        address:"11:22:33:44:55:66"
      },
      {
        id:"001002",
        address:"11:22:33:44:55:66"
      },
      {
        id:"001003",
        address:"11:22:33:44:55:66"
      },
      {
        id:"001004",
        address:"11:22:33:44:55:66"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  ck:function(e){
    this.setData({
      checked:e.currentTarget.dataset.id
    })
    wx.navigateBack({
     
    })
  }
})