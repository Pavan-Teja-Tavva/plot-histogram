import React from "react"
import classes from "./index.module.css"

const Histogram = ({ data }) => {
    return (
        <>
            <div className={classes['plot-area']}>
                <div className={classes['y-axis']}>
                    <div className={classes['y-label']}><p>Frequency</p></div>
                    <div className={classes.numbers}>
                        {[0, 5, 10, 15, 20, 25, 30].map(n => (
                            <div key={n} className={classes.number}>{n}</div>
                        ))}
                    </div>
                </div>
                <div className={classes.histogram}>
                    {data.map(({ word, frequency }) => (
                        <div className={classes.segment}>
                            <div className={classes.frequency}>{frequency}</div>
                            <div key={word} className={classes.bar} style={{ height: 11.2 * frequency }} />
                            <div className={classes.label}>{word}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes['x-axis']}>
                <div className={classes['x-label']}><p>Word</p></div>
            </div>
        </>
    )
}

Histogram.displayName = "Histogram"
export default Histogram