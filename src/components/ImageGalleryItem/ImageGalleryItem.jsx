import { Component } from "react";
import styles from './ImageGalleryItem.module.css';


export class ImageGalleryItem extends Component {

    render() {
        const {webformatURL, user} = this.props.element
        return (
            <li className={styles.galleryItem} >
                <img src={webformatURL} alt={user} />
            </li>
        );
    };
};