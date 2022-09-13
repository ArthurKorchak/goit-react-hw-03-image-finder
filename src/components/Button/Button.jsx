import { Component } from "react";
import styles from './Button.module.css';

export class Button extends Component {

    render() {
        return (
            <button className={styles.button} onClick={this.props.pageOperator}>Load more</button>
        );
    };
};