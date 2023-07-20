import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyleContainer, InputStyled, InputWrapper, RigthText } from "./styles";
import { RegularText } from "../Typography";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ( { error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RigthText>{rightText}</RigthText>}
        </InputStyleContainer>
        {error && (
          <RegularText size="s">{error}</RegularText>
        )}
      </InputWrapper>
    )
  }
)