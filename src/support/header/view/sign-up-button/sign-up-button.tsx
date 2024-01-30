import { useTranslation } from "react-i18next";
import { StyledCreateAccountButton } from "./style";
import langKey from "../../../../bootstrap/i18n/langKey";
import { useState } from "react";
import SignUpModal from "../sign-up/sign-up-modal";

const SignUpButton = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <StyledCreateAccountButton onClick={() => setModalIsOpen(true)}>
        {t(langKey.global.createAccount)}
      </StyledCreateAccountButton>
      <SignUpModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </>
  );
};

export default SignUpButton;
