import React, { createContext, FC, useContext, useState } from "react"

export interface Store {
    value: string
    setValue: (value: string) => void
}

export const StoreContext = createContext<Store>({} as Store)

export const useStore = () => useContext<Store>(StoreContext)

const StoreProvider: FC = ({ children }) => {
    const [value, setValue] = useState<string>("")

    const store: Store = {
        value,
        setValue
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider
