// function Browser() {
  const userAgent = navigator.userAgent;
  /**
   * 浏览器信息
   * @type {{infos: {isIE: boolean; isOpera: boolean; isWebKit: boolean; isGecko: boolean; isMobile: boolean; isIOS: boolean; isAndroid: boolean; isIPhone: boolean; isIPad: boolean; isWebApp: boolean}; language: string}}
   */
  const browser = {
    infos: function () {
      const appVersion = navigator.appVersion;
      return {
        isIE: userAgent.indexOf('Trident') > -1, // IE内核
        isOpera: userAgent.indexOf('Presto') > -1, // Opera内核
        isWebKit: userAgent.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
        isGecko: userAgent.indexOf('Gecko') > -1 && userAgent.indexOf('KHTML') === -1, // 火狐内核
        isMobile: !!userAgent.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
        isIOS: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
        isAndroid: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1, // android终端或uc浏览器
        isIPhone: userAgent.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
        isIPad: userAgent.indexOf('iPad') > -1, // 是否iPad
        isWebApp: userAgent.indexOf('Safari') === -1 // 是否web应该程序，没有头部与底部
      };
      }(),
    language: (navigator.language).toLowerCase(),
    };
  /***
   * 判断什么方式打开的
   * @returns {string}
   */
  const openWay = function () {
    if (this.browser.infos.isMobile) {// 判断是否是移动设备打开
      const ua = userAgent.toLowerCase();
      /**
       * 微信打开
       */
      if (ua.match(/MicroMessenger/i)) {
        return 'weixin';
      }
      if (ua.match(/WeiBo/i)) {
        return 'weibo';
      }
      if (ua.match(/QQ/i)) {
        return 'QQ';
      }
      if (this.browser.isIOS) {
        return 'IOS';
      }
      if (this.browser.infos.isAndroid) {
        return 'Android';
      }else {
        return 'Browser';
      }
    }else {
      return 'PC';
    }
  };
// }
const Browser = {
  browser : browser,
  openWay: openWay,
};
exports.Browser = Browser;

