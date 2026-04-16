import React from 'react';

const Profile = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center">
      <button className="back-btn" onClick={onBack}>← BACK TO MENU</button>
      <h2 className="mb-6">CHARACTER PROFILE</h2>
      <img src="imgs/meee.png" className="avatar-img" alt="Xandra" />
      <div className="space-y-4 text-center">
        <p>Name: Xandra Ranchez</p>
        <p>Class: IT Student</p>
        <p>Specialization: UI/UX & Front-End</p>
      </div>
    </div>
  );
};

export default Profile;