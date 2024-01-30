import React, { useState, FormEvent } from "react";
import Modal from "@mui/material/Modal";
import { Button, TextField, Box, Typography } from "@mui/material";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTranslation } from "react-i18next";
import { LANGS } from "../../../../bootstrap/i18n/init-i18n";
import langKey from "../../../../bootstrap/i18n/langKey";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export const StyledLoginSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUpModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === LANGS.AR;

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    console.log("sign up");
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="auth-modal"
      aria-describedby="modal-for-signup-and-login"
    >
      <StyledSignUpBox>
        <StyledSignUpModalHeaderWrapper dir={isArabic ? "rtl" : "ltr"}>
          <Typography variant="h5" gutterBottom>
            {t(langKey.mainPage.createNewAccount)}
          </Typography>
          <StyledAccountCircleIcon />
        </StyledSignUpModalHeaderWrapper>
        <form onSubmit={handleSignup}>
          {/* data */}
          <TextField
            placeholder={t(langKey.mainPage.username)}
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
            margin="normal"
            dir={isArabic ? "rtl" : "ltr"}
          />
          <TextField
            placeholder={t(langKey.mainPage.email)}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            dir={isArabic ? "rtl" : "ltr"}
          />
          <TextField
            placeholder={t(langKey.mainPage.password)}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            dir={isArabic ? "rtl" : "ltr"}
          />
          {/* End of data */}
          <SignUpAndAlreadyHaveAccount>
            <StyledCreateAccountButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              {t(langKey.global.createAccount)}
            </StyledCreateAccountButton>
            <StyledLoginSpan dir={isArabic ? "rtl" : "ltr"}>
              {t(langKey.mainPage.haveAnAccount)}
              <Button
                style={{
                  padding: "0px",
                  margin: "0px",
                  fontSize: "14px",
                  color: "#F2C900",
                }}
              >
                {t(langKey.global.login)}
              </Button>
            </StyledLoginSpan>
          </SignUpAndAlreadyHaveAccount>
        </form>
      </StyledSignUpBox>
    </Modal>
  );
};

export default SignUpModal;
