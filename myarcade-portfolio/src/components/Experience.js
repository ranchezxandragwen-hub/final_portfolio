import React from 'react';

const Levels = ({ onBack }) => {
  // Data structure based on your HTML blueprint
  const projectLevels = [
    {
      id: 'level1',
      title: 'LEVEL 1',
      imgs: ['imgs/front.png', 'imgs/back.png'],
      status: 'unlocked'
    },
    {
      id: 'level2',
      title: 'LEVEL 2',
      imgs: ['imgs/1.png', 'imgs/2.png'],
      status: 'unlocked'
    },
    {
      id: 'level3',
      title: 'LEVEL 3',
      imgs: ['imgs/3.png', 'imgs/4.png'],
      status: 'unlocked'
    },
    {
      id: 'boss',
      title: 'BOSS LEVEL',
      imgs: [],
      status: 'locked'
    }
  ];

  return (
    <div className="section active">
      {/* Back Button - Uses .back-btn from your CSS */}
      <button className="back-btn" onClick={onBack}>
        ← BACK TO MENU
      </button>

      <h2 style={{ marginBottom: '20px' }}>SELECT LEVEL</h2>

      {/* Grid Container - Uses .level-grid from your CSS */}
      <div className="level-grid">
        {projectLevels.map((lvl) => (
          <div 
            key={lvl.id} 
            className={`level ${lvl.status === 'locked' ? 'boss' : ''}`}
            onClick={() => lvl.status !== 'locked' && console.log(`Opening ${lvl.id}`)}
          >
            <h3>{lvl.title} {lvl.status === 'locked' && '🔒'}</h3>
            
            {/* Display images if it's not the boss level */}
            <div className="flex flex-col gap-2 mt-2">
              {lvl.imgs.map((img, index) => (
                <img key={index} src={img} alt={lvl.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Levels;