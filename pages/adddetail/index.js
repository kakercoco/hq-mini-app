// pages/adddetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime:'2015-01-01',
    endTime:'2018-12-31',
    userId:"1",
    imgIcon:'/img/user.png',
    mortime:{
      value1:"06:01",
      value2:"12:01",
    },
    afttime:{
      value1:"12:01",
      value2:"17:01",
    },
    nigtime:{
      value1:"17:01",
      value2:"22:01",
    },
    chooseList:[
      "001001", "001002", "001003", "001004",
    ],
    choosed:'请选择锁号',
    showHide:false
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
    console.log("加载完毕")
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
  bindchangeStart:function(e){
    this.setData({
      startTime:e.detail.value
    })
  },
  bindchangeEnd:function(e){
    this.setData({
      endTime:e.detail.value
    })
  },
  bindchangeId:function(e){
    console.log(e)
    this.setData({
      userId: e.detail.value
    })
  },
  chooseImg:function(){
    var that=this
    wx.chooseImage({
      count: 1,
      success: function(res) {
        //console.log(res)
        that.setData({
          imgIcon: res.tempFilePaths
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  morTimeChange1: function (e) {
    var mortime=this.data.mortime
    mortime.value1= e.detail.value
    this.setData({
      mortime: mortime
    })
  },
  morTimeChange2: function (e) {
    var mortime=this.data.mortime
    mortime.value2= e.detail.value
    this.setData({
      mortime: mortime
    })
  },
  aftTimeChange1: function (e) {
    var afttime = this.data.afttime
    afttime.value1= e.detail.value
    this.setData({
      afttime: afttime
    })
  },
  aftTimeChange2: function (e) {
    var afttime = this.data.afttime
    afttime.value2= e.detail.value
    this.setData({
      afttime: afttime
    })
  },
  nigTimeChange1: function (e) {
    var nigtime = this.data.nigtime
    nigtime.value1= e.detail.value
    this.setData({
      nigtime: nigtime
    })
  },
  nigTimeChange2: function (e) {
    var nigtime = this.data.nigtime
    nigtime.value2= e.detail.value
    this.setData({
      nigtime: nigtime
    })
  },
  chooseId:function(e){
    this.setData({
      choosed: e.currentTarget
.dataset.id,
      showHide:false
    })
  },
  showChoose:function(){
    this.setData({
      showHide:true
    })
  }
})