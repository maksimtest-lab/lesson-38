import React, { useState } from 'react';
import './Tabs.css';

export default function Tabs({ children }) {
  const firstIndex = 0;
  const [openIndex, setOpenIndex] = useState(firstIndex);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="tabs">
        {React.Children.map(children, function (child, index) {
            return React.cloneElement(child, {
                isOpen: openIndex === index,
                handleToggle: () => handleToggle(index),
            })}
        )}
    </div>
  );
};
