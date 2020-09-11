let token = "";
/**
 * 全局请求封装
 * @param url
 * @param data
 * @param request  在没有token的时候是否需要继续发送接口, 默认true
 * @param method 请求方法
 * @returns {Promise<unknown>}
 */
export default function (url, data, request = true, method = "get") {
  token = token || uni.getStorageSync(process.env.VUE_APP_TOKEN_KEY) || "";
  method = method.toUpperCase();
  return new Promise((res, rej) => {
    if (!token && !request) {
      return rej({ data: "用户未登录", statusCode: 401 });
    }
    uni
      .request({
        url: process.env.VUE_APP_BASE_URL + url,
        method,
        data,
        header: {
          authorization: token,
        },
      })
      .then((r) => {
        let [err, data] = r;
        if (err) {
          return rej(new Error("出错了"));
        }
        let { statusCode } = data;
        let { message } = data.data;
        switch (statusCode) {
          case 404:
            rej(new Error("404"));
            break;
          case 401:
            uni.showToast({
              title: message,
              icon: "none",
            });
            rej(new Error("auth失败"));
            let pages = getCurrentPages();
            let currentPages = pages[pages.length - 1].route;
            if ("pages/user/login/index" !== currentPages) {
              uni.navigateTo({
                url: "/pages/user/login/index?type=auth",
              });
            }
            break;
          case 403:
            rej(data.data);
            break;
          /*case 422:
            // 表单不完整
            rej(data.data);
            break;*/
          case 400:
            rej(data.data);
            break;
          case 500:
            /*uni.showToast({
              title: message,
              icon: "none",
            });*/
            rej(new Error("500"));
            break;
          case 200:
            res(data.data);
            break;
          default:
            res(data);
        }
      });
  });
}
