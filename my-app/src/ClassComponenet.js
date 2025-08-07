import React, {Component} from "react";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: ,
      hasError: false,
    };
    console.log("constructor");
  }
}

componentDidMount() {
  console.log("componentDidMount(처음 렌더링 완료)");
};

shouldComponentUpdate(nextProps, nextState) {
  console.log("should
}