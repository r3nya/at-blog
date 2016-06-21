import React, { Component } from 'react';
import ServiceItem from 'components/ServiceItem';
import styles from './Services.css';

export default class Services extends Component {
  render() {
    const data = [
      {
        logo: 'fa-cube',
        title: 'Design',
        description: 'Awesome description 1'
      },
      {
        logo: 'fa-qrcode',
        title: 'Development',
        description: 'Awesome description 2'
      },
      {
        logo: 'fa-rocket',
        title: 'SEO',
        description: 'Awesome description 3'
      }
    ];

    return (
      <div className={styles.wrapper}>
        {data.map((item, i) =>
          <ServiceItem
            key={i}
            {...item}
          />
        )}
      </div>
    );
  }
}
