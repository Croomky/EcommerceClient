import React, { Component, PropTypes } from "react";
import { Image } from "react-native";

export default class ScaledImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: { uri: this.props.uri }
    };
  }

  componentWillMount() {
    Image.getSize(this.props.uri, (width, height) => {
      if (this.props.width && !this.props.height) {
        this.setState({
          width: this.props.width,
          height: Math.round(height * (this.props.width / width))
        });
      } else if (!this.props.width && this.props.height) {
        this.setState({
          width: Math.round(width * (this.props.height / height)),
          height: this.props.height
        });
      } else {
        this.setState({ width: width, height: height });
      }
    });
  }

  render() {
    return (
      <Image
        source={this.state.source}
        style={{ height: this.state.height, width: this.state.width }}
      />
    );
  }
}

// ScaledImage.propTypes = {
//     uri: PropTypes.string.isRequired,
//     width: PropTypes.number,
//     height: PropTypes.number
// };