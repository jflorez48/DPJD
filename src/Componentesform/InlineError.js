import React from 'react';

function InlineError({ error }) {
  return (
    <p className="my-1 text-sm text-red-600  font-medium flex ">{error}</p>
  );
}

export default InlineError;