/*
 * @Descripttion: home action
 * @Author: xxh
 * @Date: 2020-11-06 15:44:29
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-06 16:12:40
 */
import * as home from './action-type';

// 保存表单数据
export const saveFormData = (value) => {
  return {
    type: home.SAVEFORMDATA,
    value
  }
}

// 清除表单数据
export const clearForm = () => {
  return {
    type: home.CLEARFORM
  }
}