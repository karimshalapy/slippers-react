import React, { useCallback } from 'react'
import classes from './HomePrimaryBtn.module.css'

interface Props {
    classNames?: string[],
    hasLink?: boolean
    clickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const HomePrimaryBtn: React.FC<Props> = ({ classNames, hasLink, clickHandler, children }) => {

    const getBtnClasses = useCallback(() => {
        const classesArr = [classes.HomePrimaryBtn]
        if (!hasLink) classesArr.push(classes.NoLink)
        if (classNames) classesArr.push(...classNames)

        return classesArr.join(" ")
    }, [classNames, hasLink])

    return (
        <button className={getBtnClasses()} onClick={clickHandler}>
            {children}
        </button>
    )
}

export default HomePrimaryBtn
