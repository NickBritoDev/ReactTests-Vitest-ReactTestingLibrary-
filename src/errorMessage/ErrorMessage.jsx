import React from 'react';

const ErrorMessage = ({ message = "Error message in function declaration" }) => {
  return (
    <div data-testid="message-container">{message}</div>
  );
}

export default ErrorMessage;
