import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  margin-top: 0.7rem;
  text-transform: uppercase;
  cursor: pointer;

  transition: 0.4s;
  line-height: 1.3rem;
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
  background: ${({ theme }) => theme.colors["brand-yellow"]};
  color: ${({ theme }) => theme.colors["base-white"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

`;