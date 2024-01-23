import styled from "styled-components";

export const HomePageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const SloganAndBookingButton = styled.div`
  background-color: red;
  width: 45%;
  /* Medium screens */
  @media (max-width: 768px) {
    width: 80%;
  }

  /* Small screens */
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const HomePageImageContainer = styled.div`
  background-color: blue;
  width: 45%;
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
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
