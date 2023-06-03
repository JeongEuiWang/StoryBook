import styled, {css} from "styled-components";

export enum ButtonTheme {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  MINOR = "MINOR",
}

export enum ButtonSize {
  SMALL = "SMALL",
  MIDDLE = "MIDDLE",
  LARGE = "LARGE",
  DYNAMIC = "DYNAMIC",
  FULL = "FULL",
  ICON = "ICON",
}

export enum ButtonShape {
  ROUNDED = "ROUNDED",
  SQUARE = "SQUARE",
}

export type StyledButtonProps = {
  theme: ButtonTheme;
  size: ButtonSize;
  shape: ButtonShape;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  //box-shadow: 0 2px 20px rgba(116, 116, 116, 0.16);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  white-space: nowrap;

  &:hover {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }

  &:disabled {
    background-color: #b7babe;
    color: #fff;
    box-shadow: none !important;
    transform: translateY(0px) !important;
    cursor: default;
  }

  ${({ theme }) => THEME_HANDLER(theme)}
  ${({ size }) => SIZE_HANDLER(size)}
  ${({ shape }) => SHAPE_HANDLER(shape)}
`;

const THEME_HANDLER = (theme: ButtonTheme) => {
  switch (theme) {
    case ButtonTheme.PRIMARY:
      return css`
        background-color: #5888ff;
        color: #ffffff;
      `;
    case ButtonTheme.SECONDARY:
      return css`
        border: 1px solid #5888ff;
        background-color: #ffffff;
        color: #5888ff;
      `;
    case ButtonTheme.MINOR:
      return css`
        border: 1px solid #cf7171;
        background-color: #ffffff;
        color: #cf7171;
      `;
  }
};

const SIZE_HANDLER = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.SMALL:
      return css``;
    case ButtonSize.MIDDLE:
      return css`
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        height: 40px;
        width: 200px;
      `;
    case ButtonSize.LARGE:
      return css`
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
        height: 48px;
        width: 220px;
      `;
    case ButtonSize.DYNAMIC:
      return css`
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        padding: 10px 40px;
      `;
    case ButtonSize.FULL:
      return css`
        height: 40px;
        width: 100%;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
      `;
    case ButtonSize.ICON:
      return css`
        height: 48px;
        width: 48px;
      `;
  }
};

const SHAPE_HANDLER = (shape: ButtonShape) => {
  switch (shape) {
    case ButtonShape.ROUNDED:
      return css`
        border-radius: 20px;
      `;
    case ButtonShape.SQUARE:
      return css`
        border-radius: 8px;
      `;
  }
};
