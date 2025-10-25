import { createContext, useContext, useState, type ReactNode } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";
import sv from "../locales/sv.json";
import it from "../locales/it.json";

const locales: Record<string, any> = { en, es, sv, it };

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");

  const t = (key: string) => {
    return locales[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
