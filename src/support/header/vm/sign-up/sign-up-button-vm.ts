import { getAccessToken } from "../../model/sign-up/sign-up-button-model";

export class SignUpButtonVM {
  useVM() {
    return this.handleOnClick;
  }

  handleOnClick() {
    this.fetchAccessToken();
  }
  private async fetchAccessToken() {
    console.log("vm");
    const data = await getAccessToken();
    console.log("data", data);
  }
}
