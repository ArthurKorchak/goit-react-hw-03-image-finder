import { Component } from "react";
import { InfinitySpin } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import styles from './Loader.module.css';

export class Loader extends Component {

    render() {
        return createPortal(
                <div className={styles.loader}>
                    <InfinitySpin  width="200" color="#4fa94d" />
                </div>,
            document.getElementById('portal')
        );
    };
};