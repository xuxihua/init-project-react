/*
 * @Descripttion: axios请求类型配置文件
 * @Author: xxh
 * @Date: 2020-11-05 09:20:09
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-05 18:53:28
 */
import request from "./request";

const http = {
  get(url, params) {
    const config = {
      method: "get",
      url: url,
    };
    if (params) config.params = params;
    return request(config);
  },
  post(url, params, headers = { "Content-Type": "application/json" }) {
    const config = {
      method: "post",
      url: url,
      headers,
    };
    if (params) config.data = params;
    return request(config);
  },
  put(url, params, headers = { "Content-Type": "application/json" }) {
    const config = {
      method: "put",
      url: url,
      headers,
    };
    if (params) config.params = params;
    return request(config);
  },
  delete(url, params, headers = { "Content-Type": "application/json" }) {
    const config = {
      method: "delete",
      url: url,
      headers,
    };
    if (params) config.params = params;
    return request(config);
  },
  form(url, params, headers = { "Content-Type": "multipart/form-data" }) {
    const config = {
      method: "post",
      url: url,
      headers,
    };
    if (params) config.data = params;
    return request(config);
  },
};

export default http;
