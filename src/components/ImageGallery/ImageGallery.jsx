import { Component } from "react";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { nanoid } from "nanoid";
import styles from './ImageGallery.module.css';

export class ImageGallery extends Component {

    render() {
        // console.log(this.state.images);
        // const serachWord = this.props.serachWord;
        // const page = this.props.page;

        // this.requesterAPI(serachWord, page)
        return (
            <ul className={styles.gallery}>
                {this.props.images.map(element => 
                    <ImageGalleryItem key={nanoid()} element={element} />
                )}
            </ul>
        );
    };
};