import React from 'react';
import useToggle from '../hooks/useToggle';

export default function TogglingComponent() {
  const [isOpen, Toggle] = useToggle(false);

  return (
    <>
      <h1 className="title">useToggle</h1>
    <div className="container">
      <div className="togglecomp">
        <button onClick={Toggle} className="button">
          Toggle to show
        </button>
        {isOpen && <div className="content">Show Content</div>}
      </div>
    </div>
    
    </>
  );
}
