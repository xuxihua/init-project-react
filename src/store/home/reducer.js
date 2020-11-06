/*
 * @Descripttion:
 * @Author: xxh
 * @Date: 2020-11-06 15:44:34
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-06 16:21:41
 */
import * as home from "./action-type";

let defaultState = {
  name: "",
  sex: "",
  phoneNo: "",
};

export const formData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case home.SAVEFORMDATA:
      return { ...state, ...action.value };
    case home.CLEARFORM:
      return { ...state, ...defaultState };
    default:
      return state;
  }
};
