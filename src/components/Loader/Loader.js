import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerDiamond } from 'spinners-react';
import s from './Loader.module.css';

function Loader({ enabled }) {
  return (
    <div className={s.Loader}>
      <SpinnerDiamond color="#3f51b5" enabled={enabled} />
    </div>
  );
}

Loader.propTypes = {
  enabled: PropTypes.bool.isRequired,
};

export default Loader;
