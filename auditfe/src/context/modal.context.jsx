import React, { useState, useContext } from 'react'

const ModalContext = React.createContext()


export function useModal() {
    return useContext(ModalContext)
}


export function ModalProvider({ children }) {
    const [content, setContent] = useState(null)
    const [showPopup, setShowPopup] = useState(false)

    const show = (component) => {
        setContent(component)
        setShowPopup(true)
    }

    const dismiss = () => {
        setContent(null)
        setShowPopup(false)
    }

    const propObject = {
        show: show,
        dismiss: dismiss
    }

    return (
        <ModalContext.Provider value={propObject}>
            {showPopup &&
                <div className="w-screen h-screen z-30 fixed top-0 right-0 bg-colorBlack/50 flex flex-col justify-center items-center"
                    onClick={dismiss}>
                    <div className='mx-auto my-auto' onClick={e => e.stopPropagation()}>
                        {content}
                    </div>
                </div>
            }
            {children}
        </ModalContext.Provider>
    )

}