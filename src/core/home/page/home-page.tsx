import { Button } from "@mui/material";
import styled from "styled-components";
import Image1 from "../../../../public/assets/1.jpg";
import Image2 from "../../../../public/assets/2.jpg";
import Image3 from "../../../../public/assets/3.jpg";
import Carousel from "react-material-ui-carousel/dist/components/Carousel";

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
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
  background-color: blue;
`;

export const HomePageImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 65%;
  background-color: red;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%;
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
        <StyledCarousel>
          <StyledMainPageImage src={Image1} alt="main image" />
          <StyledMainPageImage src={Image2} alt="main image" />
          <StyledMainPageImage src={Image3} alt="main image" />
          <StyledMainPageImage src={Image1} alt="main image" />
          <StyledMainPageImage src={Image2} alt="main image" />
        </StyledCarousel>
      </HomePageImageContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
