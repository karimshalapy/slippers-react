import React, { useCallback, useContext } from 'react'
import classes from './SideNavMenuContainer.module.css'
import DropdownTransition from '../../../../../components/hoc/DropdownTransition/DropdownTransition'
import { MenuTypes } from '../SideNavMenuTypes'
import MenuGenerator from './MenuGenerator/MenuGenerator'
import { SideMenuContext } from '../SideNavMenu'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../../store/rootReducer/reducersTypes'

interface Props {
    open: boolean,
}

const SideNavMenuContainer: React.FC<Props> = props => {
    const sideNavData = useSelector((state: RootReducer) => state.mainResources.sideNav)
    const { activeMenu } = useContext(SideMenuContext)

    //a function to get the level for the "second & secondRev" leveled menus
    const getLevel = useCallback(() => {
        if (activeMenu === "main") return "second"
        else if (activeMenu === "discover") return "secondRev"
        else return "first"
    }, [activeMenu])

    //main logic function that maps the data to jsx elements array
    const getSideNavRenderData = useCallback(() => {
        let jsx = [];
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
                        enter={activeMenu === key || activeMenu === `${key}Back`}
                    />
                )
            }
        }

        return jsx
    }, [activeMenu, getLevel, sideNavData])

    return (
        <DropdownTransition show={props.open}>
            {nodeRef => (
                <ul ref={nodeRef} className={classes.SideMenuContainer}>
                    { getSideNavRenderData()}
                </ul>
            )}
        </DropdownTransition>
    )
}

export default SideNavMenuContainer
