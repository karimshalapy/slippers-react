import React, { useCallback } from 'react'
import classes from './Button.module.css'

interface Props {
    classNames?: string[],
    hasLink?: boolean
    clickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    outlined?: boolean
}

const HomePrimaryBtn: React.FC<Props> = ({ classNames, hasLink, clickHandler, children, outlined }) => {

    const getBtnClasses = useCallback(() => {
        const classesArr = [outlined ? classes.ButtonOutlined : classes.ButtonPrimary]
        if (!hasLink) classesArr.push(classes.NoLink)
        if (classNames) classesArr.push(...classNames)

        return classesArr.join(" ")
    }, [classNames, hasLink, outlined])

    return (
        <button className={getBtnClasses()} onClick={clickHandler}>
            {children}
        </button>
    )
}

export default HomePrimaryBtn
