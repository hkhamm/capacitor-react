import React, { createContext, FC, useContext, useState } from "react"

export interface StoreB {
    b: number
    setB: (newB: number) => void
}

export const StoreContext = createContext<StoreB>({} as StoreB)

export const useStoreB = () => useContext<StoreB>(StoreContext)

const StoreBProvider: FC = ({ children }) => {
    const [b, setB] = useState<number>(0)

    const store: StoreB = {
        b,
        setB
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreBProvider
