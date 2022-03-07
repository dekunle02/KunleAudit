import React, { useState, useContext } from 'react'
import { IoArrowBack, IoArrowForward, } from "react-icons/io5"
import { IoMdArrowDropdownCircle } from "react-icons/io"

const PeriodContext = React.createContext()

export function usePeriod() {
    return useContext(PeriodContext)
}


export function PeriodProvider({ children }) {
    const [period, setPeriod] = useState(0)
    const [visible, setVisible] = useState(false)

    // The latest period is the 0th period.. the oldest is 4. 
    // Each period represents a tax year determined by the backend
    const toggleVisibility = () => setVisible(!visible)

    const next = () => {
        if (period === 0) {
            return
        } else {
            setPeriod(period - 1)
        }
    }

    const previous = () => {
        if (period < 4) {
            setPeriod(period + 1)
        }
    }

    return (
        <PeriodContext.Provider value={period}>
            <button className='text-colorPrimary absolute right-9 -top-14 m-2 p-2 text-2xl hover:scale-110 z-50'
                onClick={toggleVisibility}>
                <IoMdArrowDropdownCircle className={`${visible ? " rotate-180 " : ""}`} />
            </button>
            {visible &&
                <div className={`page-margins text-lg flex flex-row gap-20 justify-center items-center `}>
                    <button onClick={previous}
                        className={`p-2 rounded-full m-2 bg-colorPrimary/10  ${period < 4 ? "hover:bg-colorPrimary/40" : "cursor-not-allowed"}`}>
                        <IoArrowBack />
                    </button>
                    <span className=''>{period}</span>
                    <button onClick={next}
                        className={`p-2 rounded-full m-2 bg-colorPrimary/10 ${period === 0 ? "cursor-not-allowed" : "hover:bg-colorPrimary/40"}`}>
                        <IoArrowForward />
                    </button>
                </div>
            }

            {children}
        </PeriodContext.Provider>
    )
}