import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ id, webformatURL, largeImageURL, alt, onClick }) {
  return (
    <li
      className={s.ImageGalleryItem}
      key={id}
      onClick={() => onClick(largeImageURL)}
    >
      <img className={s.ImageGalleryItemImage} src={webformatURL} alt={alt} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
