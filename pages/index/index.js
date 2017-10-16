// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:"/img/open.png",//开锁图片
    bgShow:false,//背景是否显示
    listShow: false, //开锁列表弹框是否显示
    loginShow:false,//登录是否显示
    checkedIcon:'',
    checkedLock: { //选中的电子锁
      id: "001001",
      address: "上海市杨浦区星汇广场xxx号xxx室",
      sf:"户主"
    },
    lockList: [   //开锁列表
      {
        id : "001001",
        address: "上海市虹口区水电路385号",
        sf:"户主"
      },
      {
        id : "001002",
        address: "上海市浦东新区人民路888号",
        sf: "临时用户"
      },
      {
        id : "001003",
        address: "上海市徐汇区大连路234号",
        sf: "临时用户"
      },
      {
        id : "001004",
        address: "上海市新江湾城国安路999号",
        sf: "临时用户"
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
  showAlert: function () {
    this.setData({
      bgShow: true,
      listShow: true
    })
  },
  hideAlert: function () {
    this.setData({
      bgShow: false,
      listShow: false,
      loginShow: false
    })
  },
  checkLock:function(e){
    var that=this
    var checkedLock={}
    checkedLock.id = e.currentTarget.dataset.id
    checkedLock.address  = e.currentTarget.dataset.address
    checkedLock.sf  = e.currentTarget.dataset.sf
    that.setData({
      checkedIcon: e.currentTarget.dataset.id,
      checkedLock: checkedLock,
      bgShow: false,
      listShow: false
    })
  },
  touchStart:function(e){
    this.setData({
      imgUrl: "/img/opening.png"
    })
  },
  touchEnds:function(e){
    this.setData({
      imgUrl: "/img/open.png"
    })
  },
  openlock:function(e){
    this.setData({
      bgShow: true,
      loginShow: true
    })
  },
  overlock:function(e){
    this.setData({
      bgShow: false,
      loginShow: false
    })
    wx.showToast({
      title: '等待开锁中',
      icon: 'loading',
      duration: 4000
     
    })
  }
})