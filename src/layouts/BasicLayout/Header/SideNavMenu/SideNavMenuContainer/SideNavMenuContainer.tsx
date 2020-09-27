import React, { useContext } from 'react'
import classes from './SideNavMenuContainer.module.css'
import DropdownTransition from '../../../../../components/hoc/DropdownTransition/DropdownTransition'
import { DataInfo } from '../SideNavMenuTypes'
import MenuGenerator from './MenuGenerator/MenuGenerator'
import { SideMenuContext } from '../SideNavMenu'

interface Props {
    open: boolean,
}

const mainMenuData: DataInfo[] = [
    {
        goTo: "men",
        text: "men",
        isNext: true,
    },
    {
        goTo: "women",
        text: "women",
        isNext: true,
    },
    {
        goTo: "discover",
        text: "discover more",
        isNext: true,
    },
    {
        goTo: "gift",
        text: "gifting",
        isNext: true,
    },
]
const menData: DataInfo[] = [
    {
        text: "slippers",
        isNext: false,
        link: "/"
    },
    {
        text: "slippers",
        isNext: false,
        link: "/"
    },
    {
        text: "slippers",
        isNext: false,
        link: "/"
    },
]
const discoverMenuData: DataInfo[] = [
    {
        goTo: "about",
        text: "about us",
        isNext: true,
    },
    {
        goTo: "customers",
        text: "existing customers",
        isNext: true,
    },
]
const helpMenuData: DataInfo[] = [
    {
        text: "LOLOLOLOL",
        isNext: false,
        link: "/"
    },
    {
        text: "LOLOLOLOL",
        isNext: false,
        link: "/"
    },
]

const SideNavMenuContainer: React.FC<Props> = props => {
    const { activeMenu } = useContext(SideMenuContext)
    const getLevel = () => {
        if (activeMenu === "main") return "second"
        else if (activeMenu === "discover") return "secondRev"
        else return "first"
    }
    return (
        <DropdownTransition show={props.open}>
            {nodeRef => (
                <ul ref={nodeRef} className={classes.SideMenuContainer}>
                    <MenuGenerator data={mainMenuData} level="first" enter={activeMenu === "main"} />
                    <MenuGenerator data={menData} level="second" enter={activeMenu === "men"} />
                    <MenuGenerator data={menData} level="second" enter={activeMenu === "women"} />
                    <MenuGenerator data={discoverMenuData} level={getLevel()} enter={activeMenu === "discover" || activeMenu === "discoverBack"} />
                    <MenuGenerator data={helpMenuData} level="second" enter={activeMenu === "about"} />
                    <MenuGenerator data={helpMenuData} level="second" enter={activeMenu === "customers"} />
                </ul>
            )}
        </DropdownTransition>
    )
}

export default SideNavMenuContainer
