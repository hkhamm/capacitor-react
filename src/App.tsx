import React, { FC, ChangeEvent } from "react"
import { useStore } from "./StoreProvider"
import { makeStyles, TextField } from "@material-ui/core"

const useStyles = makeStyles({
    app: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    content: {}
})

const App: FC = () => {
    const { value, setValue } = useStore()
    const classes = useStyles()

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

    return (
        <div className={classes.app}>
            <div className={classes.content}>
                <div>Current value: {value ? value : "None"}</div>
                <TextField label="New value" margin="normal" variant="outlined" value={value} onChange={changeValue} />
            </div>
        </div>
    )
}

export default App
