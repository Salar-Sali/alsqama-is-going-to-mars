import Button from "@mui/material/Button/Button";
import { styled } from "styled-components";

export const StyledCreateAccountButton = styled(Button)`
  && {
    font-weight: bold;
    color: white;

    &:hover {
      background-color: #f2c900;
      color: #5a409b;
    }
  }
`;
