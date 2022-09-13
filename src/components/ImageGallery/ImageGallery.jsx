import { Component } from "react";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export class ImageGallery extends Component {

    render() {

        return (
            <ul className={styles.gallery}>
                {this.props.images.map((element, idx) => 
                    <ImageGalleryItem key={idx} webformatURL={element.webformatURL} idx={idx} toggleModal={this.props.toggleModal} />
                )}
            </ul>
        );
    };
};