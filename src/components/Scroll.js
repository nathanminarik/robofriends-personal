import React from 'react';

export const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: '600px',
        border: ' 5px solid black',
      }}
    >
      {children}
    </div>
  );
};
