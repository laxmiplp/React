import React, { useState } from 'react'
import myLanguage from './LanguageContext'
import LanguageDisplay from './LanguageDisplay'
const translation = {
    en: { greeting: 'Hello React!' },
    hi: { greeting: 'नमस्ते रिएक्ट!' }
}
const LanguageApp = () => {
    const [lang, setLang] = useState('en')
    const handleTranslate = () => {
        setLang((prev) => prev === 'en' ? 'hi' : 'en')
    }
    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100vh', }}>
            <myLanguage.Provider value={{ lang, handleTranslate, translation }}>
                <LanguageDisplay />
            </myLanguage.Provider>
        </div>
    )
}

export default LanguageApp