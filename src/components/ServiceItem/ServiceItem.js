import React, { Component, PropTypes } from 'react';
import styles from './ServiceItem.css';
import cx from 'classnames';

export default class ServiceItem extends Component {
  static propTypes = {
    logo: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  };

  render() {
    const { logo, title, description } = this.props;

    return (
      <div className={styles.colon}>
        <i className={cx('fa', logo)} aria-hidden="true"></i>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}
