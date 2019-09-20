import React, { createContext, FC, useContext } from "react"
import { StoreA, useStoreA } from "./StoreAProvider"
import { StoreB, useStoreB } from "./StoreBProvider"
import { StoreC, useStoreC } from "./StoreCProvider"

export interface Stores {
    storeA: StoreA
    storeB: StoreB
    storeC: StoreC
}
export const StoreContext = createContext<Stores>({} as Stores)

export const useGlobalStore = () => useContext<Stores>(StoreContext)

const GlobalStoreProvider: FC = ({ children }) => {
    const storeA = useStoreA()
    const storeB = useStoreB()
    const storeC = useStoreC()

    const store: Stores = {
        storeA,
        storeB,
        storeC
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default GlobalStoreProvider
