import React, {ButtonHTMLAttributes} from 'react';
import {ButtonShape, ButtonSize, ButtonTheme, StyledButton} from "./StyledButton";

type BasicButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ButtonTheme,
  size?: ButtonSize,
  shape?: ButtonShape,
}

const BasicButton = (
  {
    children,
    theme = ButtonTheme.PRIMARY,
    size = ButtonSize.MIDDLE,
    shape = ButtonShape.SQUARE,
    ...buttonAttributeProps
  }: BasicButtonProps) => {
  return (
    <StyledButton theme={theme} size={size} shape={shape} {...buttonAttributeProps}>
      {children}
    </StyledButton>
  )
}

export default BasicButton;
