import React from 'react';

const Skills = ({ onBack }) => {
  const skills = [
    { name: 'UI/UX', width: '85%' },
    { name: 'HTML', width: '90%' },
    { name: 'CSS', width: '80%' },
    { name: 'JS/REACT', width: '75%' }
  ];

  return (
    // The "section active" classes come from your CSS to handle centering and visibility
    <div className="section active">
      {/* Uses .back-btn from your CSS */}
      <button onClick={onBack} className="back-btn">
        [ BACK TO MENU ]
      </button>

      <h2>POWER UPS</h2>

      <div style={{ width: '100%', maxWidth: '600px' }}>
        {skills.map((skill) => (
          /* Uses .skill from your CSS */
          <div key={skill.name} className="skill">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{skill.name}</span>
              <span style={{ color: 'yellow' }}>{skill.width}</span>
            </div>
            
            {/* Uses .bar from your CSS */}
            <div className="bar">
              {/* Uses .fill from your CSS */}
              <div 
                className="fill" 
                style={{ width: skill.width }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Retro Flavor Text */}
      <p style={{ marginTop: '40px', opacity: 0.5, fontSize: '10px' }}>
        Leveling up in progress...
      </p>
    </div>
  );
};

export default Skills;