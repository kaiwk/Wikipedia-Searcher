import React, { PropTypes } from 'react';

const Error = ({code, info}) => (
    <div>
      <h1>{code}</h1>
      <p>{info}</p>
    </div>
);

Error.propTypes = {
  code: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
};

export default Error;
