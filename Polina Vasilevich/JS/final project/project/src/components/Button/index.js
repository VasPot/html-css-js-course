import React from "react";
import { Button, Icon } from "./styles";
import { setHandleButton } from "./handlers";
class ButtonComponent extends React.Component {
  render() {
    const {
      settings,
      buttonIcon,
      buttonLabel,
      handleButton,
      link,
      id,
    } = this.props;

    return (
      <Button
        {...settings}
        // onClick={setHandleButton(handleButton)}
        onClick={handleButton}
        value={link}
        id={id}
      >
        {buttonIcon && <Icon className={buttonIcon}></Icon>}
        {buttonLabel}
      </Button>
    );
  }
}

export default ButtonComponent;
