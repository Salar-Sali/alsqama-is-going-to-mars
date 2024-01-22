import styled from "styled-components";

export const HomePageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const SloganAndBookingButton = styled.div`
  background-color: red;
  width: 40%;
`;
export const HomePageImageContainer = styled.div`
  background-color: blue;
  width: 40%;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <SloganAndBookingButton>test</SloganAndBookingButton>
      <HomePageImageContainer>test</HomePageImageContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
