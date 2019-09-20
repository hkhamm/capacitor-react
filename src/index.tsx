import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import StoreBProvider from "./stores/StoreBProvider"
import StoreAProvider from "./stores/StoreAProvider"
import StoreCProvider from "./stores/StoreCProvider"
import GlobalStoreProvider from "./stores/GlobalStore"

ReactDOM.render(
    <StoreAProvider>
        <StoreBProvider>
            <StoreCProvider>
                <GlobalStoreProvider>
                    <App />
                </GlobalStoreProvider>
            </StoreCProvider>
        </StoreBProvider>
    </StoreAProvider>,
    document.getElementById("root")
)
