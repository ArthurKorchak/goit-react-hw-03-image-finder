import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export function ImageGalleryItem({idx, webformatURL, toggleModal}) {
    return (
        <li className={styles.galleryItem} >
            <img id={idx} src={webformatURL} alt="depiction from set" onClick={toggleModal} />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    idx: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
};