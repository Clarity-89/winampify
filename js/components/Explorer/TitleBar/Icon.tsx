import { FaTimes } from "react-icons/fa";
import React from "react";
import {
  greyLight,
  greyDark,
  greyMedium,
  redError,
  redErrorDark
} from "../../../colors";

interface Props {
  src: string;
  onClick: () => void | null;
}

interface State {
  backgroundColor: string;
}

class Icon extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      backgroundColor: "transparent"
    };
  }

  render() {
    return (
      <div
        className="icon"
        onClick={this.props.onClick}
        style={{
          color: "white",
          backgroundColor: this.state.backgroundColor
        }}
      >
        <FaTimes
          onMouseEnter={() =>
            this.setState({
              // color: greyMedium,
              backgroundColor: redError
            })
          }
          onMouseLeave={() =>
            this.setState({
              backgroundColor: "transparent"
            })
          }
          onMouseDown={() =>
            this.setState({
              backgroundColor: redErrorDark
            })
          }
          onMouseUp={() =>
            this.setState({
              backgroundColor: redError
            })
          }
          id="disallow-on-top"
          style={{ cursor: "pointer" }}
          size={20}
        />
      </div>
    );
  }
}

export default Icon;
