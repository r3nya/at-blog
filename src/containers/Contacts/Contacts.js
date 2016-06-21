import React, { Component } from 'react';
import { SimpleMap } from 'components/SimpleMap';
import styles from './Contacts.css';

export default class Contacts extends Component {
  render() {
    return (
      <div>
        <header className={styles.container}>
          <h1>Our contacts</h1>

          <address>Blabalab, ap. 443, office 4343555</address>
          <a href="mailto:example@example.com">Example Email</a>
          <a href="tel:01234567890">01234 567 890</a>
        </header>

        <SimpleMap />
      </div>
    );
  }
}
