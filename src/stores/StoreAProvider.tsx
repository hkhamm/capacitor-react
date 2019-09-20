import React, { createContext, FC, useContext, useState } from "react"

export interface StoreA {
    a: number
    setA: (newA: number) => void
}

export const StoreContext = createContext<StoreA>({} as StoreA)

export const useStoreA = () => useContext<StoreA>(StoreContext)

const StoreAProvider: FC = ({ children }) => {
    const [a, setA] = useState<number>(0)

    const store: StoreA = {
        a,
        setA
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreAProvider
