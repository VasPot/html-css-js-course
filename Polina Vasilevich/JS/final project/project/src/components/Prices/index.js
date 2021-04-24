import React from "react";
import MainContainer from "../MainContainer";
import PropTypes from "prop-types";

import { GridContainer } from "../../mainStyles";
import Typography from "../Typography";
import Button from "../Button";

import {
  PriceContainer,
  InfoContainer,
  ItemInfoContainer,
  TextContainer,
} from "./styles";

export default function Prices({ items }) {
  return (
    <MainContainer
      isTitle
      items={items.header}
      contentContainer={
        <GridContainer widthItemGridContainer="220px" gridGap="0">
          {items.items.map((item) => {
            return (
              <PriceContainer key={item.title}>
                <Typography
                  items={item}
                  isLine
                  settings={{
                    stylesText: "mainTable",
                  }}
                />
                <InfoContainer>
                  <TextContainer>
                    {item.list.map((elem, index) => {
                      return (
                        <ItemInfoContainer key={`tablePrice${index}`}>
                          <Typography
                            items={elem}
                            settings={{
                              stylesText: "table",
                            }}
                            icon={item.icon}
                          />
                        </ItemInfoContainer>
                      );
                    })}
                  </TextContainer>
                  <Button
                    settings={{ stylesButton: "priceTable" }}
                    buttonLabel={item.buttonLabel}
                    buttonIcon={item.buttonIcon}
                  ></Button>
                </InfoContainer>
              </PriceContainer>
            );
          })}
        </GridContainer>
      }
    />
  );
}

Prices.propTypes = {
  header: PropTypes.object,
  items: PropTypes.object,
};

Prices.defaultProps = {
  header: {
    title: "",
    subTitle: "",
  },
  items: [
    {
      title: "",
      subTitle: "",
      buttonLabel: "",
      list: [
        {
          iconTitle: "",
          title: "",
          text: "",
        },
      ],
    },
  ],
};
