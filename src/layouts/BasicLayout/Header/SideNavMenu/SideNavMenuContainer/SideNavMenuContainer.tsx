import React, { useCallback, useContext, forwardRef } from 'react'
import classes from './SideNavMenuContainer.module.css'
import { MenuTypes } from '../../../../../@types/SideNavMenuTypes'
import MenuGenerator from './MenuGenerator/MenuGenerator'
import { SideMenuContext } from '../../Header'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../../@types/reducersTypes'
import useDisableScrollOnModalOpen from '../../../../../hooks/useDisableScrollOnModalOpen'

interface Props {

}

const SideNavMenuContainer = forwardRef<HTMLUListElement, Props>((props, nodeRef) => {
    const sideNavData = useSelector((state: RootReducer) => state.mainResources.sideNav)
    const { activeSideMenu } = useContext(SideMenuContext)
    useDisableScrollOnModalOpen(true)

    //a function to get the level for the "second & secondRev" leveled menus
    const getLevel = useCallback(() => {
        if (activeSideMenu === "main") return "second"
        else if (activeSideMenu === "discover") return "secondRev"
        else return "first"
    }, [activeSideMenu])

    //main logic function that maps the data to jsx elements array
    const getSideNavRenderData = useCallback(() => {
        let jsx = []
        if (sideNavData) {
            let key: MenuTypes
            for (key in sideNavData) {
                //declaring the constants is required for the typeguard used below in the level prop
                const { level, imageBlocks, data } = sideNavData[key]
                //pushing the Menu into the jsx array
                jsx.push(
                    <MenuGenerator
                        key={key}
                        imageBlocks={imageBlocks}
                        data={data}
                        level={level === "second & secondRev" ? getLevel() : level}
                        enter={activeSideMenu === key || activeSideMenu === `${key}Back`}
                    />
                )
            }
        }

        return jsx
    }, [activeSideMenu, getLevel, sideNavData])

    return (
        <ul ref={nodeRef} className={classes.SideMenuContainer}>
            { getSideNavRenderData()}
        </ul>
    )
})

export default SideNavMenuContainer
