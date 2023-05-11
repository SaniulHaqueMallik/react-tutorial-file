
import React, { useRef } from 'react';
import Button from './Button';

function Imperativehandle () {
  const childRef = useRef(null);

  

  return (
    <div>
      <Button ref={childRef} />
      <button >Click me</button>
    </div>
  );
};

export default Imperativehandle;
