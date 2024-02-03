/* eslint-disable react-hooks/rules-of-hooks */
import { Dispatch, SetStateAction, useState } from "react";
import { SignUpModel } from "../../model/sign-up/sign-up-button-model";

export interface ISignUpButtonVM {
  props: {
    accessToken: string;
    error: boolean;
    isLoading: boolean;
  };
  onClick: () => void;
}

export type GetAccessTokenResponse = { id: string }[];

export class SignUpButtonVM {
  useVM(): ISignUpButtonVM {
    const [accessToken, setAccessToken] = useState("");
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return {
      props: {
        accessToken: accessToken,
        error: error,
        isLoading,
      },
      onClick: () =>
        this.handleOnClickSignUp(setAccessToken, setError, setIsLoading),
    };
  }

  private async handleOnClickSignUp(
    setAccessToken: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<boolean>>,
    setIsLoading: Dispatch<SetStateAction<boolean>>
  ) {
    setIsLoading(true);
    try {
      const data: GetAccessTokenResponse = await SignUpModel();
      console.log("Data:", data);
      setAccessToken(data[0].id);
      setError(false);
    } catch (error) {
      console.error("Error in usage:", error);
      setError(true);
    }
    setIsLoading(false);
  }
}
