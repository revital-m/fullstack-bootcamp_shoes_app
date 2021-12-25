import React, { Component } from "react";
import Button from "../Button/Button";
import './Textarea.css'

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = { textareaValue: "" };

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleInputChange = (e) => {
    this.setState({ textareaValue: e.target.value });
  };

  handleClick = () => {
    this.inputRef.current.select();
    document.execCommand('copy');
  }

  render() {
    return (
      <div className="textarea">
        <label className="textarea-label">{this.props.labelName}</label>
        <textarea className="textarea-info"
          onChange={this.handleInputChange}
          name={this.props.name}
          cols={this.props.cols}
          rows={this.props.rows}
          value={this.state.textareaValue}
          ref={this.inputRef}
        ></textarea>
        <Button categoryBtnClass="" name="submit" btnText="Copy" handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default Textarea;
