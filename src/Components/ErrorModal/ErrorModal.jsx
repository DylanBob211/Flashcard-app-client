import React from 'react';
import PropTypes from 'prop-types';

const ErrorModal = ({ text }) => (
  text.length > 0
    ? (
      <div
        data-test="errorModal"
        style={{
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          position: 'absolute',
          left: '50%',
          top: '2%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          padding: '1rem',
          borderRadius: '5px',
        }}
      >
        <h4>{text}</h4>
      </div>
    )
    : null
);

ErrorModal.propTypes = {
  text: PropTypes.string,
};

ErrorModal.defaultProps = {
  text: '',
};

export default ErrorModal;
