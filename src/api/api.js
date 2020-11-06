/*
 * @Descripttion: api接口文件
 * @Author: xxh
 * @Date: 2020-11-05 09:21:00
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-06 11:05:55
 */
import http from "@/utils/http";

// eslint-disable-next-line
export default {
    getHome(params) {
      return http.get(`/home`, params);
    },
    getData(params) {
        return http.get(`/getData`, params);
    },
    setData(params) {
        return http.post(`/setData`, params);
    },
    uploadImages(params) {
        return http.form(`/uploadImages`, params)
    }
}