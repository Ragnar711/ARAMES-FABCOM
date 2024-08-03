import React, { useState } from 'react';
import style from '../../styles/Machine.module.css';
import alerte from '../../assets/arret.png';
import fleche from '../../assets/fleche.png';
import { Button } from 'antd';

const Alerte = () => {
  const [showCauseArret, setShowCauseArret] = useState(false);
  const [activeEquipementButton, setActiveEquipementButton] = useState(null);
  const [activeCauseButton, setActiveCauseButton] = useState(null);

  const handleClick = () => {
    setShowCauseArret(!showCauseArret);
  };

  const handleEquipementButtonClick = (buttonId) => {
    setActiveEquipementButton(buttonId);
    sendToBackend({ type: 'equipement', id: buttonId });
  };

  const handleCauseButtonClick = (buttonId) => {
    setActiveCauseButton(buttonId);
    sendToBackend({ type: 'cause', id: buttonId });
  };

  const sendToBackend = async (data) => {
    try {
      const response = await fetch('https://your-backend-api.com/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const equipementButtons = [
    { id: 1, label: 'Enveloppeuse' },
    { id: 2, label: 'COS' },
    { id: 3, label: 'Assem bac / Couv' },
  ];

  const causeButtons = [
    { id: 4, label: 'Cause 1' },
    { id: 5, label: 'Cause 2' },
    { id: 6, label: 'Cause 3' },
  ];

  return (
    <>
      <div className={style.arret}>
        <img src={alerte} alt="" className={style.alerte} />
        <div className={style.firstArret}>
          <span>Déclaration arret</span>
        </div>
        <div className={style.column}>
          <span className={style.blackSpan}>Date et heure</span>
          <div>15/02/2024 02:30:15</div>
        </div>

        <div className={style.column}>
          <span className={style.blackSpan}>Durée</span>
          <span>00:12:15</span>
        </div>
        <div>
          <img className={style.fleche} src={fleche} alt="" onClick={handleClick} />
        </div>
      </div>
      {showCauseArret && (
        <div className={style.causeArret}>
          <div className={style.equipement}>
            {equipementButtons.map((button) => (
              <Button
                key={button.id}
                className={style.ButtonCause}
                style={{ backgroundColor: activeEquipementButton === button.id ? 'red' : '' }}
                onClick={() => handleEquipementButtonClick(button.id)}
              >
                {button.label}
              </Button>
            ))}
          </div>
          <div className={style.equipement}>
            {causeButtons.map((button) => (
              <Button
                key={button.id}
                className={style.ButtonCause}
                style={{ backgroundColor: activeCauseButton === button.id ? '#F1D100' : '' }}
                onClick={() => handleCauseButtonClick(button.id)}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Alerte;
 