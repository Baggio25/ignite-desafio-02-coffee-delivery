import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors["base-background"]};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

  ${({ variant, theme }) => css`
    color: ${theme.colors[`brand-${variant}-dark`]};
    background: ${theme.colors[`brand-${variant}-light`]};
  `}

  ${({ variant, theme }) =>
    variant === "purple" &&
    css`
      svg {
        color: ${theme.colors["brand-purple"]};
      }
    `}
`;
