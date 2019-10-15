import React, { FC } from "react"
import { makeStyles } from "@material-ui/core"
import logo from "./logo.svg"

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
    return (
        <div className={classes.app}>
            <header className={classes.appHeader}>
                <img src={logo} className={classes.appLogo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className={classes.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
