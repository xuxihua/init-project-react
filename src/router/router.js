/*
 * @Descripttion: router
 * @Author: xxh
 * @Date: 2020-11-06 13:43:42
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-06 15:30:30
 */
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import Detail from "@/pages/detail";

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default BasicRoute;
