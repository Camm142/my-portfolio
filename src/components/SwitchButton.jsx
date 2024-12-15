import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/switchbtn.css';

export default function SwitchButton({ language, handleLanguageToggle }) {
  const [defaultLanguage, setDefaultLanguage] = useState('english');

  const handleToggle = () => {
    // Decide the current language using the prop or the default state
    const currentLanguage = language || defaultLanguage;
    const newLanguage = currentLanguage === 'english' ? 'vietnamese' : 'english';

    // Update state if handleLanguageToggle is provided by parent
    if (handleLanguageToggle) {
      handleLanguageToggle(newLanguage);
    } else {
      setDefaultLanguage(newLanguage);
    }
  };

  const currentLanguage = language || defaultLanguage;

  return (
    <div className="language-switch">
      <input
        type="checkbox"
        id="toggleSwitch"
        checked={currentLanguage === 'vietnamese'}
        onChange={handleToggle}  // Call handleToggle on change
      />
      <label htmlFor="toggleSwitch" className="switch-label">
        <span className="switch-text">EN</span>
        <span className="switch-text">VN</span>
      </label>
    </div>
  );
}

// Prop validation
SwitchButton.propTypes = {
  language: PropTypes.string,
  handleLanguageToggle: PropTypes.func,
};

SwitchButton.defaultProps = {
  language: null,
};
