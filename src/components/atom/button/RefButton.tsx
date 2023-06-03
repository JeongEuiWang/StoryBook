import React, {ButtonHTMLAttributes, forwardRef} from 'react';
import {ButtonShape, ButtonSize, ButtonTheme, StyledButton} from "./StyledButton";

type RefButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ButtonTheme,
  size?: ButtonSize,
  shape?: ButtonShape,
}

const RefButton = forwardRef<HTMLButtonElement, RefButtonProps>((
  {
    children,
    theme = ButtonTheme.PRIMARY,
    size = ButtonSize.MIDDLE,
    shape = ButtonShape.SQUARE,
    ...buttonAttributeProps
  }, ref) => {
  return (
    <StyledButton ref={ref} theme={theme} size={size} shape={shape} {...buttonAttributeProps}>
      {children}
    </StyledButton>
  );
});

export default RefButton;
