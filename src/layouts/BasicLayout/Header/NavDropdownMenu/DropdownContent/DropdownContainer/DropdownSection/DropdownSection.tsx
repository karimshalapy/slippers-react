import React from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import { DropdownSectionData, DropdownSectionTypes } from '../../../../HeaderTypes'
import classes from './DropdownSection.module.css'

interface Props {
    type: DropdownSectionTypes,
    payload: DropdownSectionData
    reset: () => void
}

const DropdownSection: React.FC<Props> = ({ type, reset, payload: { heading, data } }) => {

    //a helper function to do data mutation to transform the data into unordered lists with the content properly rendered
    const sectionContent = () => {
        switch (type) {
            case "0_imageList":
                return (
                    <li className={[classes.SectionListItem, classes.HasImageList].join(" ")}>
                        {heading ? <h2 className={classes.ImgListHeading}>{heading}</h2> : null}
                        <ul className={classes.ImageList}>
                            {data.map(item => (
                                <li key={v4()}>
                                    <a href={item.url} className={classes.Link} onClick={reset}>
                                        <img className={classes.ImageListImages} src={item.imgUrl} alt={item.imgAlt} />
                                        <span>{item.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                )

            case "1_textList":
                return (
                    <li className={classes.SectionListItem}>
                        {heading ? <h2 className={classes.TextListHeading}>{heading}</h2> : null}
                        <ul className={classes.TextList}>
                            {data.map(item => (
                                <li key={v4()}>
                                    <Link to={item.url} className={classes.Link} onClick={reset}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                )
            case "2_imageBlocks":
            case "3_imageBlocksOnly":
                return (
                    <li className={type === "2_imageBlocks" ? classes.SectionListItem : classes.ImagesBlocksOnlySection}>
                        <ul className={type === "2_imageBlocks" ? classes.ImageBlocks : classes.ImageBlocksOnly}>
                            {data.map(item => (
                                <li key={v4()}>
                                    <Link to={item.url} className={classes.Link} onClick={reset}>
                                        <img src={item.imgUrl} alt={item.imgAlt} />
                                        <div className={classes.TextOverImage}>
                                            <span>{item.text}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))
                            }
                        </ul>
                    </li>
                )
            default:
                return null;
        }
    }
    //main return statement
    return (
        <>
            {sectionContent()}
        </>
    )
}

export default DropdownSection
