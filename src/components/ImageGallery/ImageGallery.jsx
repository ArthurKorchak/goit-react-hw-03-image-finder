import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export function ImageGallery({images, toggleModal}) {
    return (
        <ul className={styles.gallery}>
            {images.map((element, idx) => 
                <ImageGalleryItem key={idx} webformatURL={element.webformatURL} idx={idx} toggleModal={toggleModal} />
            )}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
        }),
    ),
    toggleModal: PropTypes.func.isRequired,
};