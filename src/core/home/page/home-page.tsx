import { Button } from "@mui/material";
import styled from "styled-components";
import Image from "../../../../public/assets/mainPage.jpeg";

export const HomePageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
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
export const HomePageImageContainer = styled.div`
  /* background-color: blue; */
  width: 45%;
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SloganTitle = styled.h2``;

export const BookNowButton = styled(Button)`
  padding: 8px 24px !important;
  background-color: #f2c900 !important;
  color: black !important;
`;

export const StyledMainPageImage = styled.img`
  width: 100%;
  height: 100%;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <SloganAndBookingButton>
        <div>
          <SloganTitle>استمتع بتجربة حجز فريدة ومريحة</SloganTitle>
          <p>
            مرحبًا بك في موقعنا الرائع! اكتشف عالمًا جديدًا من الراحة والفخامة
            مع خدمتنا المميزة في حجز الفنادق والصالات. سواء كنت تبحث عن إقامة
            هادئة أو تخطيط لمناسبة خاصة، نحن هنا لنجعل كل لحظة لديك لا تُنسى.
            استمتع بأفضل العروض والأماكن الرائعة، وابدأ رحلتك في تحقيق الأحلام.
            احجز الآن وانعم بتجربة حجز لا مثيل لها!
          </p>
        </div>
        <BookNowButton>أحجز الآن</BookNowButton>
      </SloganAndBookingButton>
      <HomePageImageContainer>
        <StyledMainPageImage src={Image} alt="main image" />
      </HomePageImageContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
