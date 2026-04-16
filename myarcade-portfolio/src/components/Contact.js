import React from 'react';

const Contact = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center">
      <button className="back-btn" onClick={onBack}>← BACK TO MENU</button>
      <h2 className="mb-10">CONTACT</h2>
      <div className="space-y-6 text-center">
        <p>Email: <a href="mailto:xgranchez@outlook.com" className="hover:text-[#ff00ff]">xgranchez@outlook.com</a></p>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/ranchezxandragwen-hub" target="_blank" className="hover:text-[#ff00ff]">GitHub</a>
          <span>|</span>
          <a href="https://linkedin.com/in/xgranchez" target="_blank" className="hover:text-[#ff00ff]">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;