import React, { FC, ChangeEvent } from "react"
import { useStore } from "./StoreProvider"
import { makeStyles, TextField, Typography } from "@material-ui/core"

const useStyles = makeStyles({
    app: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        width: 300,
        textAlign: "center",
        marginBottom: 16
    }
})

const App: FC = () => {
    const { value, setValue } = useStore()
    const classes = useStyles()

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

    return (
        <div className={classes.app}>
            <div className={classes.content}>
                <div className={classes.title}>
                    <Typography variant="h2">Welcome to React and Capacitor!</Typography>
                </div>

                <Typography variant="body1">Current value: {value ? value : "None"}</Typography>
                <TextField label="New value" margin="normal" variant="outlined" value={value} onChange={changeValue} />
            </div>
        </div>
    )
}

export default App
