import { Component } from "react";
import styles from './ImageGalleryItem.module.css';


export class ImageGalleryItem extends Component {

    render() {
        const { idx, webformatURL, toggleModal } = this.props;

        return (
            <li className={styles.galleryItem} >
                <img id={idx} src={webformatURL} alt="depiction from set" onClick={toggleModal} />
            </li>
        );
    };
};