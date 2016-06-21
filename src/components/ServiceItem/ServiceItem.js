import React, { PropTypes } from 'react';
import styles from './ServiceItem.css';
import cx from 'classnames';

export const ServiceItem = props => {
  const { logo, title, description } = props;

  return (
    <div className={styles.colon}>
      <i className={cx('fa', logo)} aria-hidden="true"></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

ServiceItem.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};
