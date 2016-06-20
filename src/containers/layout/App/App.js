import React, { Component, PropTypes } from 'react';
import { Header, Footer } from 'containers/layout';
import styles from './App.css';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className={styles.main}>
        <Header />

        <section className={styles.content} role="main">
          {children}
        </section>

        <Footer />
      </div>
    );
  }
}
