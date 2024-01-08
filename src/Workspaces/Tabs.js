// Tabs.js
import React, { useState } from 'react';
import './Tabs.css'; // Import the CSS file

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-container">
        {children.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTab ? 'active' : ''}`}
            onClick={() => changeTab(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
