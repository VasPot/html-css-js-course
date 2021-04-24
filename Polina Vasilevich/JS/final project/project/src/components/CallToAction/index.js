import PropTypes from "prop-types";

import MainContainer from "../MainContainer";
import Button from "../Button";
import { Text } from "./styles";
import { FlexContainer } from "../../mainStyles";
import { handleLink } from "../Button/handlers";

export default function CallToAction({ items, settings }) {
  const contentContainer = (
    <FlexContainer heightFlexContainer="callTo" mediaFlexBlock="callTo">
      <Text>{items.text}</Text>
      <Button
        buttonLabel={items.buttonLabel}
        settings={settings}
        handleButton={(e) => handleLink(e, "blog")}
      ></Button>
    </FlexContainer>
  );

  return (
    <MainContainer settings={settings} contentContainer={contentContainer} />
  );
}

CallToAction.propTypes = {
  items: PropTypes.object,
  settings: PropTypes.object,
};

CallToAction.defaultProps = {
  items: {
    text: "",
    buttonLabel: "",
  },
  settings: {},
};
