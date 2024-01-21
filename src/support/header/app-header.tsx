import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  ${({ theme }) => theme.palette.error.main};
`;
const AppHeader = () => {
  return <StyledHeaderWrapper>app-header</StyledHeaderWrapper>;
};

export default AppHeader;
