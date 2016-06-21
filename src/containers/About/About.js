import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Loader from 'components/Loader';
import { fetchAbout } from 'actions';
import { aboutSelector } from 'selectors';
import styles from './About.css';

const mapDispatchToProps = {
  fetchAbout
};

@connect(aboutSelector, mapDispatchToProps)
export default class About extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string,
    fetchAbout: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchAbout } = this.props;
    fetchAbout();
  }

  render() {
    const { loading, text } = this.props;

    return (
      <div className={styles.conteiner}>
        <Loader show={loading} />
        <article dangerouslySetInnerHTML={{ __html: text }}></article>
      </div>
    );
  }
}
