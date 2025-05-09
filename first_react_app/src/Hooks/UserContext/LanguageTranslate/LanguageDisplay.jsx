import React, { useContext } from 'react'
import myLanguage from './LanguageContext'
const LanguageDisplay = () => {
    const { lang, translation, handleTranslate } = useContext(myLanguage)
    return (
        <>
            <h1 style={{ color: lang === 'en' ? 'blue' : 'red' }}>{translation[lang].greeting}</h1>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={() => handleTranslate('en')} style={{ background: lang === 'en' ? 'gray' : 'blue', color: 'white' }} disabled={lang === 'en'}>English</button>
                <button onClick={() => handleTranslate('hi')} style={{ background: lang === 'hi' ? 'gray' : 'red', color: 'white' }} disabled={lang === 'hi'}>Hindi</button>
            </div>
        </>
    )
}

export default LanguageDisplay