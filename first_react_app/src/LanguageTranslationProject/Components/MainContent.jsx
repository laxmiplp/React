import React from 'react'
import { useDictonary } from '../Contexts/LangaugeContextProvider'


export const MainContent = () => {
    const { translate, theming } = useDictonary()

    const styles = {

        // color: theming === 'light' ? '#ffffff' : '#000000',
        backgroundColor: theming === 'light' ? '#ffffff' : '#111827',
        color: theming === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',

    };

    return (
        <main className="flex-grow w-full p-8 text-lg leading-relaxed  transition-colors ${theming === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}" ><p><strong>Please - </strong>{translate("login")}</p>
            <p className="text-lg leading-relaxed" ><strong>Message:</strong> {translate("welcome")}</p>
        </main>
    )
}
