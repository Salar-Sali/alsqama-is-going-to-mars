/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next";
import IAppHeaderVM from "../view/i-app-header-vm";
import langKey from "../../../bootstrap/i18n/langKey";

export class AppHeaderVM {
  useVM(): IAppHeaderVM {
    const { t } = useTranslation();
    return {
      props: {
        headerTabs: [
          t(langKey.navbar.hotels),
          t(langKey.navbar.chalets),
          t(langKey.navbar.resorts),
        ],
      },
    };
  }
}
