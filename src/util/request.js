let token = uni.getStorageSync("apiToken") || "";

export default function (url, data, method = "get") {
  method = method.toUpperCase();
  return new Promise((res, rej) => {
    uni
      .request({
        url: url,
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
        switch (statusCode) {
          case 404:
            rej(new Error("404"));
            break;
          case 401:
            rej(new Error("auth失败"));
            uni.redirectTo({
              url: "/pages/user/login/index?type=auth",
            });
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
