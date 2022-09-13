import { Component } from "react";
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {

    componentDidMount = () => {
        window.addEventListener('keydown', this.keyDownOperator);
    };
    
    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.keyDownOperator);
    };

    keyDownOperator = (event) => {
        if (event.code === 'Escape') {
            this.props.toggleModal(event);
        };
    };

    render() {
        return createPortal(
            <div className={styles.overlay} onClick={this.props.toggleModal}>
                <div className={styles.modal}>
                    <img src={this.props.image} alt="choosed depiction" />
                </div>
            </div>,
            document.getElementById('portal')
        );
    };
};

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
};