import { useContext } from "react";
import { Language } from "iconoir-react";

import AppContext from "../../../contexts/AppContext";

import "./toggleLang.style.css";

const ToggleLang: React.FC = () => {
  const { language, toggleChangeLanguage } = useContext(AppContext);

  return (
    <div className="toggleLang-content">
      <span>{language}</span>
      <button onClick={toggleChangeLanguage} className="button">
        <Language />
      </button>
    </div>
  );
};

export default ToggleLang;
