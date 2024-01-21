import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  ${({ theme }) => theme.palette.error.main};
`;

const AppHeader = () => {
  return <div>app-header</div>;
};

export default AppHeader;
