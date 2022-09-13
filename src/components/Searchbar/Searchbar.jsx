import { Component } from "react";
import styles from './Searchbar.module.css';

export class Searchbar extends Component {

    render() {
        return (
            <header className={styles.searchbar}>
                <form className={styles.searchForm} onSubmit={this.props.onSubmit}>
                    <button type="submit" className={styles.searchButton}>
                        <span className={styles.searchButtonLabel}>Search</span>
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
};