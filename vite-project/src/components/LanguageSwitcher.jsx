import React from "react";
import LanguageContext from "./LanguageContext";

const LanguageSwitcher = () => {
    const {language, setLanguage} = React.useContext(LanguageContext);


    return (
        <>
            <button onClick={() => setLanguage('ru')}>Русский</button>
            <button onClick={() => setLanguage('en')}>Английский</button>
        </>
    );
};

export default LanguageSwitcher