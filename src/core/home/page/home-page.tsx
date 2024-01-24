import { Button } from "@mui/material";
import styled from "styled-components";
import Image from "../../../../public/assets/2.jpg";

export const HomePageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 0px;
`;

export const SloganAndBookingButton = styled.div`
  /* background-color: red; */
  width: 45%;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SloganAndDescription = styled.div`
  padding-bottom: 16px;
`;
export const HomePageImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SloganTitle = styled.h2`
  font-size: 48px;
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HomePageDescription = styled.p`
  font-size: larger;
  line-height: 32px;
`;

export const BookNowButton = styled(Button)`
  padding: 8px 32px !important;
  background-color: #f2c900 !important;
  color: black !important;
  font-weight: bold;
  font-size: 20px !important;
`;

export const StyledMainPageImage = styled.img`
  width: 80%;
  height: 80%;

  @media (max-width: 480px) {
    width: 95%;
    height: 95%;
  }
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <SloganAndBookingButton>
        <SloganAndDescription>
          <SloganTitle>استمتع بتجربة حجز فريدة ومريحة</SloganTitle>
          <HomePageDescription>
            مرحبًا بك في موقعنا! اكتشف عالمًا من الراحة والفخامة مع حجز الفنادق
            والصالات. سواء لإقامة هادئة أو مناسبة خاصة، نحن هنا لجعل لحظاتك لا
            تُنسى. استمتع بأفضل العروض وابدأ رحلتك الفندقية الآن!{" "}
          </HomePageDescription>
        </SloganAndDescription>
        <BookNowButton>أحجز الآن</BookNowButton>
      </SloganAndBookingButton>
      <HomePageImageContainer>
        <StyledMainPageImage src={Image} alt="main image" />
      </HomePageImageContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
