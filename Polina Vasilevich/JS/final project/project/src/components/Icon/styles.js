import styled from "styled-components";
import { TextContainer } from "../Typography/styles";

const setColorIconContainer = (colorIconContainer) => {
  switch (colorIconContainer) {
    case "gradient":
      return `
              background-image: linear-gradient(48deg, #00f0ff -22%, #ebacfd 122%)

            `;

    default:
      return "";
  }
};

const setFormIcon = (formIcon) => {
  switch (formIcon) {
    case "circle":
      return `
              border-radius: 50%;
              margin: 0 auto;
            `;
    case "rectangle":
      return `      
              width: 100%;
              height: 40px;
              border-radius: 3px;
            `;
    default:
      return "";
  }
};

const setSizeIconContainer = (sizeIconContainer) => {
  switch (sizeIconContainer) {
    case "small":
      return `      
                    width: 50px;
                    height: 50px;
        
            `;
    case "middle":
      return `      
                    width: 150px;
                    height: 150px;
            `;
    default:
      return "";
  }
};

export const IconContainer = styled.div`
  ${(props) => setFormIcon(props.formIcon)};

  ${(props) => setColorIconContainer(props.colorIconContainer)};
  ${(props) => setSizeIconContainer(props.sizeIconContainer)};
  ${(props) =>
    props.multicoloredIcon && `background-color: ${props.multicoloredIcon};`}

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  cursor: pointer;
`;

const setColorIcon = (colorIcon) => {
  switch (colorIcon) {
    case "gradient":
      return `
                    display: inline-block;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-image: linear-gradient(48deg, #00f0ff -21%, #ebacfd 121%);

                    &:hover {
                      background-image: none;
                      background-color: blue;
                    }
            `;

    default:
      return `
        color: #fff;
      `;
  }
};

const setFontSizeIcon = (fontSizeIcon) => {
  switch (fontSizeIcon) {
    case "xs":
      return `
        font-size: 14px;
        `;
    case "s":
      return `
        font-size: 18px;
        `;

    case "m":
      return `
        font-size: 20px;
      `;

    case "l":
      return `
        font-size: 36px;
      `;

    case "xl":
      return `
        font-size: 44px;
        
      `;

    case "xxl":
      return `
        font-size: 72px;
      `;

    case "button":
      return `
          font-size: 14px;
          margin-right: 10px;
        `;

    default:
      return `
        font-size: 36px;
      `;
  }
};

const setStylesIcon = (stylesIcon) => {
  switch (stylesIcon) {
    case "footer":
      return `
            opacity: 0.5;
            font-size: 18px;
            cursor: pointer;

            &:hover{
              opacity: 1;
             
            }`;

    case "gradientIcons":
      return `font-size: 44px;`;

    default:
      return `
        color: #fff;
      `;
  }
};

export const Icon = styled.i`
  font-family: themify;
  // line-height: 30px;
  font-weight: 400;
  ${(props) => setFontSizeIcon(props.fontSizeIcon)};
  ${(props) => setColorIcon(props.colorIcon)};
  ${(props) => setStylesIcon(props.stylesIcon)};
`;

const setPositionTextIcons = (positionTextIcons) => {
  switch (positionTextIcons) {
    case "left":
      return `
        text-align: left;
      `;
    case "rigth":
      return `
        text-align: right;
      `;

    default:
      return `
        text-align: center;
      `;
  }
};

const setPositionIcons = (positionIcons) => {
  switch (positionIcons) {
    case "left":
      return `
        display: flex;
        align-items: start;
        ${IconContainer} {
            align-items: start;
            margin-right: 20px;
            
        }
      `;
    default:
      return ``;
  }
};

const setAdaptiveIcons = (adaptiveIcons) => {
  switch (adaptiveIcons) {
    case "aside":
      return `  
      @media(max-width: 1400px) {
        flex-direction: column;
        ${TextContainer} {
          width: 100%;
          
        }
        ${IconContainer} {
          width: 100%;
          
      }
        ${Img} {
            width: 100%;
          }
      }
      `;

    default:
      break;
  }
};

export const ContentContainer = styled.div`
  ${(props) => setPositionIcons(props.positionIcons)};
  ${(props) => setPositionTextIcons(props.positionTextIcons)};
  ${(props) => setAdaptiveIcons(props.adaptiveIcons)};
`;

export const Img = styled.div`
  display: inline-block;
  width: ${(props) => (props.widthImg ? props.widthImg : "100%")};
  height: ${(props) => (props.heightImg ? props.heightImg : "64px")};
  background-size: cover;
  background-position: center center;
  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};
`;
