import React, { FC } from "react"
import { makeStyles } from "@material-ui/core"
import { useGlobalStore } from "./stores/GlobalStore"

const useStyles = makeStyles({
    app: {
        textAlign: "center"
    },
    appLogo: {
        animation: "$appLogoSpin infinite 20s linear",
        height: "40vmin",
        pointerEvents: "none"
    },
    appHeader: {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white"
    },
    appLink: {
        color: "#61dafb"
    },
    "@keyframes appLogoSpin": {
        from: {
            transform: "rotate(0deg)"
        },
        to: {
            transform: "rotate(360deg)"
        }
    }
})

const App: FC = () => {
    const classes = useStyles()
    const { storeA, storeC, storeB } = useGlobalStore()

    const addOneToA = () => storeA.setA(storeA.a + 1)
    const addOneToB = () => storeB.setB(storeB.b + 1)
    const clear = () => {
        storeA.setA(0)
        storeB.setB(0)
    }

    return (
        <div className={classes.app}>
            <header className={classes.appHeader}>
                <p>{`A + B = C: ${storeA.a} + ${storeB.b} = ${storeC.getC()}`}</p>
                <button onClick={addOneToA}>Add 1 to A</button>
                <button onClick={addOneToB}>Add 1 to B</button>
                <button onClick={clear}>Clear</button>
            </header>
        </div>
    )
}

export default App
