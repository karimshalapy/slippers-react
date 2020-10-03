import React from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import { DropdownSectionData, DropdownSectionTypes } from '../../../HeaderTypes'
import classes from './DropdownSection.module.css'

interface Props {
    type: DropdownSectionTypes,
    payload: DropdownSectionData
}

const DropdownSection: React.FC<Props> = ({ type, payload: { heading, data } }) => {

    //a helper function to do data mutation to transform the data into unordered lists with the content properly rendered
    const sectionContent = () => {
        switch (type) {
            case "imageList":
                return (
                    <>
                        {heading ? <h2 className={classes.ImgListHeading}>{heading}</h2> : null}
                        <ul className={classes.ImageList}>
                            {data.map(item => (
                                <li key={v4()}>
                                    <Link to={item.url} className={classes.Link}>
                                        <img src={item.imgUrl} alt={item.imgAlt} />
                                        <span>{item.text}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )

            case "textList":
                return (
                    <>
                        {heading ? <h2 className={classes.TextListHeading}>{heading}</h2> : null}
                        <ul className={classes.TextList}>
                            {data.map(item => (
                                <li key={v4()}>
                                    <Link to={item.url} className={classes.Link}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )
            case "imageBlocks":
                return (
                    <>
                        <ul className={classes.ImageBlocks}>
                            {data.map(item => (
                                <li key={v4()}>
                                    <Link to={item.url} className={classes.Link}>
                                        <img src={item.imgUrl} alt={item.imgAlt} />
                                        <div className={classes.TextOverImage}>
                                            <span>{item.text}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))
                            }
                        </ul>
                    </>
                )
            default:
                return null;
        }
    }
    //main return statement
    return (
        <li className={classes.SectionListItem}>
            {sectionContent()}
        </li>
    )
}

export default DropdownSection
