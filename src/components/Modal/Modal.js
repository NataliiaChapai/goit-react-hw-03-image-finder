import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    isShown: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscClick);
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.onEscClick);
  };

  onEscClick = event => {
    if (event.code === 'Escape') {
      this.props.isShown();
    }
  };

  onBDClick = event => {
    if (event.currentTarget === event.target) {
      this.props.isShown();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <div className={s.Overlay} onClick={this.onBDClick}>
        <div className={s.Modal}>
          <img className={s.Image} src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
