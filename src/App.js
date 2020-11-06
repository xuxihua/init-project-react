/*
 * @Descripttion: app页面文件
 * @Author: xxh
 * @Date: 2020-11-02 20:22:15
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-06 16:17:49
 */
import "./App.css";
import Router from "@/router/router";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import store from '@/store/store';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default process.env.NODE_ENV === "development" ? hot(module)(App) : App;
