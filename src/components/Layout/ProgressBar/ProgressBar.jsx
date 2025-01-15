import React, { useState } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={`progressbar ${loading ? 'loading' : ''}`}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default ProgressBar;


