import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

export function Searchbar({onSubmit}) {
    return (
        <header className={styles.searchbar}>
            <form className={styles.searchForm} onSubmit={onSubmit}>
                <button type="submit" className={styles.searchButton}>
                    <span>🔍</span>
                </button>
                <input
                    className={styles.searchInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};