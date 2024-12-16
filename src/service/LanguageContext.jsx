import React, {createContext, useState, useContext} from 'react'


//create context
const LanguageContext = createContext();

//create a provider
export const LanguageProvider = ({children}) =>{
    const [language, setLanguage] =useState('english') //default language
    const toggleLanguage = (newLanguage) =>{
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value ={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
export const useLanguage = () => useContext(LanguageContext);
