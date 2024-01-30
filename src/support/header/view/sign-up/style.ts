import { styled } from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";

export const StyledSignUpBox = styled(Box)`
  && {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 32px;
    width: 35%;
    border-radius: 8px;
    @media (max-width: 768px) {
      width: 60%;
    }

    @media (max-width: 480px) {
      width: 80%;
    }
  }
`;

export const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  && {
    font-size: 35px;
    color: #5a409b;
  }
`;

export const StyledSignUpModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCreateAccountButton = styled(Button)`
  && {
    background-color: #5a409b;
    padding: 8px 0px;
    transition: all 0.3s ease;
    &:hover {
      background-color: rgba(90, 64, 155, 0.8);
    }
  }
`;

export const SignUpAndAlreadyHaveAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const SignUpModalLogInButton = styled(Button)`
  && {
    padding: 0px;
    margin: 4px;
    margin-top: 0px;
    font-size: 16px;
    color: #f2c900;
    font-weight: 600;
  }
`;
