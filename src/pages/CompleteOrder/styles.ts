import { styled } from "styled-components";

export const CompleteOrderContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const SectionBaseStyle = styled.section`
  width: 100%;
  border-radius: 6px;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors["base-card"]};
`;