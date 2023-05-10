import React from "react"
import classes from './index.module.css'

const Button = ({ variant, name, handler }) => {
    return (
        <div className={classes['button-wrapper']}>
            <button className={`${classes.btn} ${classes['btn-' + variant]}`} onClick={handler}>{name}</button>
        </div>
    )
}

Button.displayName = "Button"
export default Button