import styles from './Button.module.css';
import PropTypes from 'prop-types';

export function Button({pageOperator}) {
    return (
        <button className={styles.button} onClick={pageOperator}>Load more</button>
    );
};

Button.propTypes = {
    pageOperator: PropTypes.func.isRequired,
};