import React, { useState } from 'react';

import '../../styles/ExpandableProperty.css';

const ExpandableProperty = ({ expanded, title, children }) => {
  const [isOpen, setIsOpen] = useState(expanded);
  const handleKeyDown = (e) => {
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div className="ExpandableProperty" onClick={() => setIsOpen(!isOpen)} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      { isOpen ? children : null }
      { React.Children.count(children) === 0 && isOpen ? 'The list is empty!' : null }
    </>
  );
};

export default ExpandableProperty;
