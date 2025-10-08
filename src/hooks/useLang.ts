import { useState } from "react";

import english from "../translations/en-US.json";
import spanish from "../translations/es-MX.json";

export interface ILanguageOptions {
  description: string;
  groups: {
    name: string;
    description?: string;
    links: {
      name: string;
      url: string;
      image?: {
        url?: string;
      };
    }[];
  }[];
}

type ILanguage = "english" | "spanish";

const useLang = () => {
  const [language, setLanguage] = useState<ILanguage>("english");

  const toggleChangeLanguage = () => {
    if (language === "english") {
      setLanguage("spanish");
      return;
    }

    setLanguage("english");
  };

  const getTranslate: ILanguageOptions =
    language === "english" ? english : spanish;

  return { language, getTranslate, toggleChangeLanguage };
};

export default useLang;
