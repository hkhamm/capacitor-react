import React, { createContext, FC, useContext } from "react"
import { useStoreA } from "./StoreAProvider"
import { useStoreB } from "./StoreBProvider"

export interface StoreC {
    getC: () => number
}

export const StoreContext = createContext<StoreC>({} as StoreC)

export const useStoreC = () => useContext<StoreC>(StoreContext)

const StoreCProvider: FC = ({ children }) => {
    const { a } = useStoreA()
    const { b } = useStoreB()

    const getC = () => a + b

    const store: StoreC = {
        getC
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreCProvider
