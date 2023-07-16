import styled from "styled-components";

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