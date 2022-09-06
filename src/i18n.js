import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./assets/translations/en.json";
import translationVi from "./assets/translations/vi.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: translationEN
     },
     vi: {
       translation: translationVi
     },
     
   }
 });
 
i18n.changeLanguage("vi");