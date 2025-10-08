import { createContext } from "react";
import Layout from "../layouts/layout.main";
import useLang, { ILanguageOptions } from "../hooks/useLang";

interface IAppContext {
  language: string;
  toggleChangeLanguage: () => void;
  getTranslate: ILanguageOptions;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

interface IAppProvider {
  children: React.ReactNode;
}
export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const languageOptions = useLang();

  return (
    <AppContext.Provider value={languageOptions}>
      <Layout>{children}</Layout>
    </AppContext.Provider>
  );
};

export default AppContext;
