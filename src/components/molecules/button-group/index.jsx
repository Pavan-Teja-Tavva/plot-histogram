import React from "react"
import Button from "../../atoms/button"
import classes from "./index.module.css"

const ButtonGroup = ({ onExport, onClear }) => {
    return (
        <div className={classes['button-group']}>
            <Button variant="primary" name="Export" handler={onExport} />
            <Button variant="secondary" name="Clear" handler={onClear} />
        </div>
    )
}

ButtonGroup.displayName = "ButtonGroup"
export default ButtonGroup