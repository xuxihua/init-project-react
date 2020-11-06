import React, { Component } from "react";
import PropTypes from "prop-types";
import { is, fromJS } from "immutable";
import { connect } from "react-redux";
import { saveFormData, clearForm } from "@/store/home/action";
import API from "@/api/api";
import { Button } from "antd";

class Home extends Component {
  // 静态类型检查
  static propTypes = {
    formData: PropTypes.object.isRequired,
    saveFormData: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      msg: "无",
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 性能优化：比较新旧props或state确定是否需要更新，减少重渲染
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }

  getHome = async () => {
    let result = await API.getHome();
    this.props.saveFormData(result.data);
    this.setState({
      msg: "发送了异步请求，更新了redux formData",
    });
  };

  clearForm = () => {
    this.setState({
      msg: "清空了redux formData",
    });
    this.props.clearForm();
  };

  render() {
    return (
      <div>
        <Button onClick={this.getHome}>获取Home数据</Button>
        <Button onClick={this.clearForm}>清空Home数据</Button>
        <div>{this.props.formData.name}</div>
        <div>{this.props.formData.sex}</div>
        <div>{this.props.formData.phoneNo}</div>
        <div>redux状态变化：{this.state.msg}</div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    formData: state.formData,
  }),
  {
    saveFormData,
    clearForm,
  }
)(Home);
