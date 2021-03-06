import React, { useCallback } from 'react'
import classes from './Button.module.css'

interface Props {
    classNames?: string,
    hasLink?: boolean
    clickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    outlined?: boolean,
    tomato?: boolean
    disabled?: boolean,
    ghost?: boolean
}

const HomePrimaryBtn: React.FC<Props> = ({
    classNames,
    hasLink,
    clickHandler,
    children,
    outlined,
    tomato,
    ghost,
    disabled
}) => {

    const getBtnClasses = useCallback(() => {
        const classesArr = [classes.Button]
        if (outlined) classesArr.push(classes.ButtonOutlined)
        if (tomato) classesArr.push(classes.ButtonTomato)
        if (ghost) classesArr.push(classes.ButtonGhost)
        if (!hasLink) classesArr.push(classes.NoLink)
        if (classNames) classesArr.push(classNames)

        return classesArr.join(" ")
    }, [classNames, hasLink, outlined, tomato, ghost])

    return (
        <button className={getBtnClasses()} onClick={clickHandler} disabled={disabled} >
            {children}
        </button>
    )
}

export default HomePrimaryBtn
