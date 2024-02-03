import React, { useState, FormEvent } from "react";
import Modal from "@mui/material/Modal";
import { TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LANGS } from "../../../../bootstrap/i18n/init-i18n";
import langKey from "../../../../bootstrap/i18n/langKey";
import {
  StyledSignUpBox,
  StyledSignUpModalHeaderWrapper,
  StyledAccountCircleIcon,
  SignUpAndAlreadyHaveAccount,
  StyledCreateAccountButton,
  SignUpModalLogInButton,
} from "./style";
import { SignUpButtonVM } from "../../vm/sign-up/sign-up-button-vm";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === LANGS.AR;

  const vm = new SignUpButtonVM();
  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    console.log("sign up");
    vm.handleOnClick();
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
            <div dir={isArabic ? "rtl" : "ltr"}>
              {t(langKey.mainPage.haveAnAccount)}
              <SignUpModalLogInButton>
                {t(langKey.global.login)}
              </SignUpModalLogInButton>
            </div>
          </SignUpAndAlreadyHaveAccount>
        </form>
      </StyledSignUpBox>
    </Modal>
  );
};

export default SignUpModal;
